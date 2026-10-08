<script setup lang="ts">
withDefaults(defineProps<{
  withTopMargin?: boolean
}>(), {
  withTopMargin: true
})

const { locale, t } = useBoardoLocale()

const appStoreBadgeSrc = computed(() =>
  locale.value === 'fr'
    ? 'https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/black/fr-fr?releaseDate=1778371200'
    : 'https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/black/en-us?releaseDate=1778371200'
)
</script>

<template>
  <a
    href="https://apps.apple.com/us/app/boardo/id6759225163?itscg=30200&itsct=apps_box_badge&mttnsubad=6759225163"
    style="display: inline-block"
    :class="['w-[164px]', { 'mt-8': withTopMargin }]"
    target="_blank"
    :title="t('hero.downloadApp.title')"
  >
    <img
      :src="appStoreBadgeSrc"
      :alt="locale === 'fr' ? 'Télécharger dans l’App Store' : 'Download on the App Store'"
      :title="locale === 'fr' ? 'Télécharger dans l’App Store' : 'Download on the App Store'"
      style="width: 259px; height: 82px; vertical-align: middle; object-fit: contain"
    >
  </a>
</template>
