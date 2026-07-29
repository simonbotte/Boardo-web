<script setup lang="ts">
import type { FormError } from '@nuxt/ui'
import type { Context } from 'gsap'

type ContactKind = 'contact' | 'game'

type ContactForm = {
  firstName: string
  lastName: string
  email: string
  message: string
  attachment: File | null
}

const MAX_FILE_SIZE = 5 * 1024 * 1024

const { t } = useBoardoLocale()
const toast = useToast()
const kind = ref<ContactKind>('contact')
const form = reactive<ContactForm>({
  firstName: '',
  lastName: '',
  email: '',
  message: '',
  attachment: null
})

const isGameRequest = computed(() => kind.value === 'game')
const messagePlaceholder = computed(() => t(isGameRequest.value ? 'contact.gameMessagePlaceholder' : 'contact.messagePlaceholder'))
const attachmentDescription = computed(() => t(isGameRequest.value ? 'contact.gameAttachmentDescription' : 'contact.attachmentDescription'))
const attachmentLabel = computed(() => t(isGameRequest.value ? 'contact.attachmentImageLabel' : 'contact.attachmentLabel'))
const attachmentHelp = computed(() => t(isGameRequest.value ? 'contact.gameAttachmentHelp' : 'contact.attachmentHelp'))
const attachmentAccept = computed(() => isGameRequest.value ? 'image/jpeg,image/png,image/webp,image/heic' : 'image/*,.pdf,.doc,.docx')
const contactSection = ref<HTMLElement | null>(null)
let animationContext: Context | null = null

onMounted(async () => {
  const section = contactSection.value

  if (
    !section
    || window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ) {
    return
  }

  const [{ gsap }, { ScrollTrigger }] = await Promise.all([
    import('gsap'),
    import('gsap/ScrollTrigger')
  ])

  gsap.registerPlugin(ScrollTrigger)

  animationContext = gsap.context(() => {
    const heading = section.querySelector<HTMLElement>('[data-contact-heading]')
    const form = section.querySelector<HTMLElement>('[data-contact-form]')

    if (heading) {
      gsap.from(heading.children, {
        autoAlpha: 0,
        y: 24,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: {
          trigger: heading,
          start: 'top 60%',
          toggleActions: 'play none none reverse'
        }
      })
    }

    if (form) {
      gsap.from(form, {
        autoAlpha: 0,
        y: 40,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: form,
          start: 'top 60%',
          toggleActions: 'play none none reverse'
        }
      })
    }
  }, section)
})

onBeforeUnmount(() => {
  animationContext?.revert()
  animationContext = null
})

function selectKind(nextKind: ContactKind) {
  kind.value = nextKind
  form.attachment = null
}

function validate(state: ContactForm): FormError[] {
  const errors: FormError[] = []

  if (!state.firstName.trim()) errors.push({ name: 'firstName', message: t('contact.required') })
  if (!state.lastName.trim()) errors.push({ name: 'lastName', message: t('contact.required') })
  if (!state.message.trim()) errors.push({ name: 'message', message: t('contact.required') })

  if (state.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) {
    errors.push({ name: 'email', message: t('contact.invalidEmail') })
  }

  if (state.attachment && state.attachment.size > MAX_FILE_SIZE) {
    errors.push({ name: 'attachment', message: t('contact.fileTooLarge') })
  }

  if (isGameRequest.value && state.attachment && !state.attachment.type.startsWith('image/')) {
    errors.push({ name: 'attachment', message: t('contact.invalidImage') })
  }

  return errors
}

async function submit() {
  const payload = new FormData()
  payload.append('kind', kind.value)
  payload.append('firstName', form.firstName.trim())
  payload.append('lastName', form.lastName.trim())
  payload.append('email', form.email.trim())
  payload.append('message', form.message.trim())

  if (form.attachment) payload.append('attachment', form.attachment)

  try {
    await $fetch('/api/contact', { method: 'POST', body: payload })

    form.firstName = ''
    form.lastName = ''
    form.email = ''
    form.message = ''
    form.attachment = null
    toast.add({
      title: t('contact.successTitle'),
      description: t('contact.successDescription'),
      color: 'success',
      icon: 'i-lucide-circle-check'
    })
  } catch {
    toast.add({
      title: t('contact.errorTitle'),
      description: t('contact.errorDescription'),
      color: 'error',
      icon: 'i-lucide-circle-alert'
    })
  }
}
</script>

<template>
  <section
    id="contact"
    ref="contactSection"
    class="py-20 sm:py-24"
  >
    <UContainer class="px-5">
      <div
        data-contact-heading
        class="mx-auto max-w-2xl text-center"
      >
        <UBadge
          color="primary"
          variant="soft"
          class="rounded-full px-3 py-1 font-semibold"
        >
          {{ t('contact.badge') }}
        </UBadge>
        <h2 class="font-display mt-2 text-3xl font-bold sm:text-4xl">
          {{ t('contact.title') }}
        </h2>
        <p class="mt-3 text-lg leading-tight">
          {{ t('contact.description') }}
        </p>
      </div>

      <div
        data-contact-form
        class="mx-auto mt-10 max-w-2xl"
      >
        <div
          class="grid gap-3 sm:grid-cols-2"
          role="tablist"
          :aria-label="t('contact.ariaOptions')"
        >
          <button
            v-for="option in (['contact', 'game'] as const)"
            :key="option"
            type="button"
            role="tab"
            :aria-selected="kind === option"
            class="rounded-2xl border p-4 text-left transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            :class="kind === option ? 'border-primary bg-primary/5 ring-1 ring-primary' : 'border-default bg-default hover:bg-elevated/50'"
            @click="selectKind(option)"
          >
            <span class="flex items-center gap-3">
              <UIcon
                :name="option === 'game' ? 'i-lucide-dices' : 'i-lucide-message-circle'"
                class="size-5 text-primary"
              />
              <span class="font-semibold">{{ t(option === 'game' ? 'contact.option.game.label' : 'contact.option.contact.label') }}</span>
            </span>
            <span class="mt-2 block text-sm leading-relaxed">
              {{ t(option === 'game' ? 'contact.option.game.description' : 'contact.option.contact.description') }}
            </span>
          </button>
        </div>

        <UCard
          variant="outline"
          class="mt-5 rounded-2xl shadow-none"
          :ui="{ body: 'p-5 sm:p-7' }"
        >
          <UForm
            :state="form"
            :validate="validate"
            class="space-y-5"
            @submit="submit"
          >
            <div class="grid gap-5 sm:grid-cols-2">
              <UFormField
                name="firstName"
                :label="t('contact.firstName')"
                :ui="{ label: 'font-semibold' }"
                required
              >
                <UInput
                  v-model="form.firstName"
                  autocomplete="given-name"
                  class="w-full"
                />
              </UFormField>
              <UFormField
                name="lastName"
                :label="t('contact.lastName')"
                :ui="{ label: 'font-semibold' }"
                required
              >
                <UInput
                  v-model="form.lastName"
                  autocomplete="family-name"
                  class="w-full"
                />
              </UFormField>
            </div>

            <UFormField
              name="email"
              :label="t('contact.email')"
              :hint="t('contact.emailHint')"
              :description="t('contact.emailDescription')"
              :ui="{ label: 'font-semibold' }"
            >
              <UInput
                v-model="form.email"
                type="email"
                autocomplete="email"
                placeholder="vous@exemple.fr"
                class="w-full"
              />
            </UFormField>

            <UFormField
              name="message"
              :label="t('contact.message')"
              :ui="{ label: 'font-semibold' }"
              required
            >
              <UTextarea
                v-model="form.message"
                :placeholder="messagePlaceholder"
                :rows="5"
                autoresize
                :maxrows="10"
                class="w-full"
              />
            </UFormField>

            <UFormField
              name="attachment"
              :label="t('contact.attachment')"
              :description="attachmentDescription"
              :ui="{ label: 'font-semibold' }"
            >
              <UFileUpload
                v-model="form.attachment"
                :accept="attachmentAccept"
                :label="attachmentLabel"
                :description="`${t('contact.attachmentLimit')} ${attachmentHelp}`"
                layout="list"
                class="w-full"
              />
            </UFormField>

            <div class="flex justify-end pt-1">
              <UButton
                type="submit"
                color="primary"
                icon="i-lucide-send"
                :label="t('contact.submit')"
              />
            </div>
          </UForm>
        </UCard>
      </div>
    </UContainer>
  </section>
</template>
