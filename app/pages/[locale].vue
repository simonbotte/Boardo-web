<script setup lang="ts">
const route = useRoute()
const routeLocale = Array.isArray(route.params.locale)
  ? route.params.locale[0]
  : route.params.locale

if (!isSupportedLocale(routeLocale)) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })
}

const { setLocale } = useBoardoLocale()
const preferredLocale = useLocalePreference()
const isLocaleIndex = computed(() => route.name === 'locale')
setLocale(routeLocale)
preferredLocale.value = routeLocale

definePageMeta({
  colorMode: 'light'
})
</script>

<template>
  <NuxtPage v-if="!isLocaleIndex" />
  <div v-else class="overflow-hidden bg-default text-default">
    <BoardoHeroSection />
    <BoardoAppPreviewSection />
    <BoardoGameCollectionSection />
    <BoardoInterfaceSection />
    <BoardoFeaturesSection />
    <BoardoPricingSection />
    <BoardoContactSection />
    <BoardoFooter />
  </div>
</template>
