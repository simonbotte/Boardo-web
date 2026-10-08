<script setup lang="ts">
const { locale, t } = useBoardoLocale();
</script>

<template>
  <footer class="mt-20 sm:mt-24">
    <UContainer class="px-5 py-10 sm:py-12">
      <div
        class="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between"
      >
        <div class="flex flex-col justify-between gap-8 w-full sm:flex-row sm:gap-4">
          <div class="flex flex-col gap-2">
            <div class="flex items-center gap-3">
              <NuxtImg
                src="/images/boardo-iOS-Default-1024x1024@3x.png"
                :alt="t('hero.logoAlt')"
                :title="t('hero.logoAlt')"
                width="1024"
                height="1024"
                class="size-12 rounded-lg"
              />
              <span class="font-display text-xl font-bold">Boardo</span>
            </div>
            <p class="text-xs text-muted">
              {{ t("footer.owner") }}
            </p>
          </div>
          <div class="flex items-center gap-4">
            <NuxtLink
              :to="`/${locale}/comparison`"
              class="text-sm font-semibold text-primary"
            >
              {{ t("footer.comparison") }}
            </NuxtLink>
            <NuxtLink
              :to="`/${locale}/legal`"
              class="text-sm font-semibold text-primary"
            >
              {{ t("footer.legal") }}
            </NuxtLink>
          </div>
          <nav
            class="flex items-center gap-4 text-sm"
            :aria-label="t('locale.selectorLabel')"
          >
            <NuxtLink
              to="/fr"
              class="font-semibold transition-opacity hover:opacity-100"
              :class="locale === 'fr' ? 'opacity-100' : 'opacity-50'"
              :aria-current="locale === 'fr' ? 'page' : undefined"
            >
              FR
            </NuxtLink>
            <span class="text-muted" aria-hidden="true"> / </span>
            <NuxtLink
              to="/en"
              class="font-semibold transition-opacity hover:opacity-100"
              :class="locale === 'en' ? 'opacity-100' : 'opacity-50'"
              :aria-current="locale === 'en' ? 'page' : undefined"
            >
              EN
            </NuxtLink>
          </nav>
        </div>
      </div>
    </UContainer>
  </footer>
</template>
