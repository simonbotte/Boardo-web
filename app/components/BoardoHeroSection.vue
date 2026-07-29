<script setup lang="ts">
import type { Context } from 'gsap'

const logoSrc = '/images/boardo-iOS-Default-1024x1024@3x.png'
const { locale, t } = useBoardoLocale()

const appStoreBadgeSrc = computed(() =>
  locale.value === 'fr'
    ? 'https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/black/fr-fr?releaseDate=1778371200'
    : 'https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/black/en-us?releaseDate=1778371200'
)

const heroTitle = ref<HTMLElement | null>(null)
let animationContext: Context | null = null

onMounted(async () => {
  const title = heroTitle.value

  if (
    !title
    || window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ) {
    return
  }

  const { gsap } = await import('gsap')

  animationContext = gsap.context(() => {
    gsap.from(title, {
      autoAlpha: 0,
      y: 24,
      duration: 0.7,
      ease: 'power3.out'
    })
  })
})

onBeforeUnmount(() => {
  animationContext?.revert()
  animationContext = null
})
</script>

<template>
  <div>
    <section>
      <UContainer class="px-5 pt-24">
        <div class="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div class="mb-2 size-[88px]">
            <NuxtImg
              :src="logoSrc"
              :alt="t('hero.logoAlt')"
              width="1024"
              height="1024"
              class="size-full"
            />
          </div>
          <p class="mb-4 text-xs font-semibold">
            Boardo
          </p>
          <h1
            ref="heroTitle"
            class="font-display max-w-2xl text-3xl font-bold sm:text-5xl"
          >
            {{ t("hero.title") }}
          </h1>
          <p class="mt-3 max-w-xl text-xl leading-tight  sm:text-2xl">
            {{ t("hero.description") }}
          </p>

          <a
            href="https://apps.apple.com/us/app/boardo/id6759225163?itscg=30200&itsct=apps_box_badge&mttnsubad=6759225163"
            style="display: inline-block"
            class="mt-8 w-[200px]"
          >
            <img
              :src="appStoreBadgeSrc"
              :alt="
                locale === 'fr'
                  ? 'Télécharger dans l’App Store'
                  : 'Download on the App Store'
              "
              style="
                width: 259px;
                height: 82px;
                vertical-align: middle;
                object-fit: contain;
              "
            >
          </a>
        </div>
      </UContainer>
    </section>
  </div>
</template>
