<script setup lang="ts">
const { locale, t } = useBoardoLocale()

useHead(() => ({
  title: t('seo.title'),
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: '#ff6900' },
    { name: 'description', content: t('seo.description') },
    { name: 'application-name', content: 'Boardo' },
    { name: 'keywords', content: t('seo.keywords') },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: t('seo.title') },
    { property: 'og:description', content: t('seo.description') },
    { property: 'og:site_name', content: 'Boardo' },
    { property: 'og:type', content: 'website' },
    {
      property: 'og:image',
      content: '/images/og-blanc.jpg'
    },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: t('seo.title') },
    { name: 'twitter:description', content: t('seo.description') },
    {
      name: 'twitter:image',
      content: '/images/og-blanc.jpg'
    }
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'MobileApplication',
        'name': 'Boardo',
        'applicationCategory': 'GameApplication',
        'operatingSystem': 'iOS 26.2 or later',
        'applicationSubCategory': 'Board game score tracker',
        'description': t('seo.description'),
        'image': '/images/boardo-iOS-Default-1024x1024@3x.png',
        'downloadUrl': 'https://apps.apple.com/us/app/boardo/id6759225163',
        'offers': {
          '@type': 'Offer',
          'price': '0',
          'priceCurrency': 'USD'
        }
      })
    }
  ],
  htmlAttrs: {
    lang: locale.value
  }
}))
</script>

<template>
  <UApp>
    <UMain>
      <NuxtPage />
    </UMain>
  </UApp>
</template>
