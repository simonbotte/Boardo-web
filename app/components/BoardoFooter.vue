<script setup lang="ts">
const { t } = useBoardoLocale();
</script>

<template>
  <footer class="mt-20 sm:mt-24">
    <UContainer class="px-5 py-10 sm:py-12">
      <div class="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-3">
            <NuxtImg
              src="/images/boardo-iOS-Default-1024x1024@3x.png"
              :alt="t('hero.logoAlt')"
              width="1024"
              height="1024"
              class="size-12 rounded-lg"
            />
            <span class="font-display text-xl font-bold">Boardo</span>
          </div>
          <p class="text-xs text-muted">{{ t("footer.owner") }}</p>
        </div>
        <div class="text-xs leading-relaxed text-muted">
          <p class="max-w-4xl">
            {{ t("footer.disclaimer") }}
          </p>
        </div>
      </div>
    </UContainer>
  </footer>
</template>
