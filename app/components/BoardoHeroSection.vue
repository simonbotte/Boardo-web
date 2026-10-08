<script setup lang="ts">
import type { Context } from 'gsap'

const logoSrc = '/images/boardo-iOS-Default-1024x1024@3x.png'
const { t } = useBoardoLocale()

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
              :title="t('hero.logoAlt')"
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

          <BoardoAppStoreBadge />
        </div>
      </UContainer>
    </section>
  </div>
</template>
