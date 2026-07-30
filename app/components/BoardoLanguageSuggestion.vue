<script setup lang="ts">
const { locale, t } = useBoardoLocale();
const preferredLocale = useLocalePreference();
const dismissed = useCookie<boolean | null>(
  "boardo-language-suggestion-dismissed",
  {
    maxAge: 60 * 60 * 24 * 30,
  }
);
const isVisible = ref(false);

function browserPrefersFrench() {
  const primaryLanguage = navigator.languages?.[0] ?? navigator.language;

  return primaryLanguage.toLowerCase().startsWith("fr");
}

onMounted(() => {
  isVisible.value =
    locale.value === "fr" && !browserPrefersFrench() && !dismissed.value;
});

function dismiss() {
  dismissed.value = true;
  isVisible.value = false;
}

function selectEnglish() {
  preferredLocale.value = "en";
  isVisible.value = false;
}
</script>

<template>
  <Transition name="language-suggestion">
    <aside
      v-if="isVisible"
      class="fixed inset-x-0 top-0 z-50 border-b border-default bg-default/95 shadow-sm backdrop-blur"
      role="status"
    >
      <UContainer class="flex items-center min-h-14 py-2">
        <div
          class="relative flex w-full flex-col items-center gap-4 px-6 sm:flex-row sm:justify-between sm:px-0"
        >
          <p class="text-sm font-medium text-center">
            {{ t("locale.suggestion.message") }}
          </p>
          <div class="flex shrink-0 items-center gap-2">
            <UButton to="/en" size="sm" @click="selectEnglish">
              {{ t("locale.suggestion.action") }}
            </UButton>
            <UButton
              class="absolute top-0.75 right-0 p-0 sm:relative"
              color="neutral"
              variant="link"
              icon="i-lucide-x"
              size="sm"
              :aria-label="t('locale.suggestion.dismiss')"
              @click="dismiss"
            />
          </div>
        </div>
      </UContainer>
    </aside>
  </Transition>
</template>

<style scoped>
.language-suggestion-enter-active,
.language-suggestion-leave-active {
  transition: opacity 220ms ease, transform 220ms ease;
}

.language-suggestion-enter-from,
.language-suggestion-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}

@media (prefers-reduced-motion: reduce) {
  .language-suggestion-enter-active,
  .language-suggestion-leave-active {
    transition: none;
  }
}
</style>
