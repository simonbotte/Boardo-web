const MAX_FILE_SIZE = 5 * 1024 * 1024
const RECIPIENT = 'simon@smnb.fr'

type ContactKind = 'contact' | 'game'

function valueOf(parts: Awaited<ReturnType<typeof readMultipartFormData>>, name: string) {
  return parts?.find(part => part.name === name && !part.filename)?.data.toString('utf8').trim() ?? ''
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, character => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '\'': '&#39;',
    '"': '&quot;'
  })[character]!)
}

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const parts = await readMultipartFormData(event)
  const kind = valueOf(parts, 'kind') as ContactKind
  const firstName = valueOf(parts, 'firstName')
  const lastName = valueOf(parts, 'lastName')
  const email = valueOf(parts, 'email')
  const message = valueOf(parts, 'message')
  const attachment = parts?.find(part => part.name === 'attachment' && part.filename)

  if (!['contact', 'game'].includes(kind) || !firstName || !lastName || !message) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid contact form.' })
  }

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid email address.' })
  }

  if (attachment && attachment.data.length > MAX_FILE_SIZE) {
    throw createError({ statusCode: 400, statusMessage: 'Attachment is too large.' })
  }

  if (kind === 'game' && attachment && !attachment.type.startsWith('image/')) {
    throw createError({ statusCode: 400, statusMessage: 'The game attachment must be an image.' })
  }

  if (!config.resendApiKey || !config.contactEmailFrom) {
    throw createError({ statusCode: 503, statusMessage: 'Contact email is not configured.' })
  }

  const subject = `[Boardo] ${kind === 'game' ? 'Demande d’ajout de jeu' : 'Demande de contact'} — ${firstName} ${lastName}`
  const html = [
    `<p><strong>Type :</strong> ${kind === 'game' ? 'Demande d’ajout de jeu' : 'Contact'}</p>`,
    `<p><strong>Nom :</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>`,
    email ? `<p><strong>E-mail :</strong> ${escapeHtml(email)}</p>` : '<p><strong>E-mail :</strong> Non renseigné</p>',
    `<p><strong>Message :</strong><br>${escapeHtml(message).replace(/\n/g, '<br>')}</p>`
  ].join('')

  await $fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${config.resendApiKey}`
    },
    body: {
      from: config.contactEmailFrom,
      to: [RECIPIENT],
      subject,
      html,
      reply_to: email || undefined,
      attachments: attachment
        ? [{ filename: attachment.filename, content: attachment.data.toString('base64') }]
        : undefined
    }
  })

  return { ok: true }
})
