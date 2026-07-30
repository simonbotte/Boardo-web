<script setup lang="ts">
const { locale, t } = useBoardoLocale()
const route = useRoute()
const config = useRuntimeConfig()

const siteUrl = computed(() => config.public.siteUrl.replace(/\/$/, ''))
const pageUrl = computed(() => `${siteUrl.value}${route.path}`)
const ogImageUrl = computed(() => `${siteUrl.value}/images/${
  locale.value === 'en' ? 'og-blanc-en.jpg' : 'og-blanc.jpg'
}`)

const alternateLinks = computed(() => [
  { rel: 'canonical', href: pageUrl.value },
  { rel: 'alternate', hreflang: 'en', href: `${siteUrl.value}/en` },
  { rel: 'alternate', hreflang: 'fr', href: `${siteUrl.value}/fr` },
  { rel: 'alternate', hreflang: 'x-default', href: `${siteUrl.value}/fr` }
])

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
    { property: 'og:url', content: pageUrl.value },
    {
      property: 'og:image',
      content: ogImageUrl.value
    },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: t('seo.title') },
    { name: 'twitter:description', content: t('seo.description') },
    {
      name: 'twitter:image',
      content: ogImageUrl.value
    }
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    ...alternateLinks.value
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'MobileApplication',
        'name': 'Boardo',
        'applicationCategory': 'Utility',
        'operatingSystem': 'iOS 18 or later',
        'applicationSubCategory': 'Board game score tracker',
        'description': t('seo.description'),
        'image': `${siteUrl.value}/images/boardo-iOS-Default-1024x1024@3x.png`,
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
    <BoardoLanguageSuggestion />
    <UMain>
      <NuxtPage />
    </UMain>
  </UApp>
</template>
