<script setup lang="ts">
import type { Context } from 'gsap'

const phoneSlides = [
  'acropolis-score-entry.webp',
  'skyjo-game-detail.webp',
  'homepage.webp',
  'flip-7-score-evolution.webp',
  'winner-screen.webp',
]

const previewSection = ref<HTMLElement | null>(null)
let animationContext: Context | null = null

const { t } = useBoardoLocale()

onMounted(async () => {
  const section = previewSection.value

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
    const phones = gsap.utils.toArray<HTMLElement>('[data-preview-phone]')
    const initialOffsets = [1, 0.5, 0, 0.5, 1]
    const distance = () => Math.min(window.innerWidth * 0.06, 90)

    gsap.set(phones, {
      y: index => initialOffsets[index] * distance()
    })

    gsap.to(phones, {
      y: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top 60%',
        end: 'bottom top',
        scrub: true,
        invalidateOnRefresh: true
      }
    })
  }, section)
})

onBeforeUnmount(() => {
  animationContext?.revert()
  animationContext = null
})
</script>

<template>
  <section
    ref="previewSection"
    :aria-label="t('preview.ariaLabel')"
    class="overflow-hidden bg-muted/30 pt-16 pb-12 sm:pt-24"
  >
    <div class="mx-auto grid w-[118vw] -translate-x-[9vw] grid-cols-3 items-start gap-2 md:w-[112vw] md:-translate-x-[6vw] md:grid-cols-5 md:gap-4">
      <IPhoneScreenshot
        v-for="(slide, index) in phoneSlides"
        :key="slide"
        data-preview-phone
        :src="`/images/app-screen/${slide}`"
        :alt="`${t('preview.alt')} ${slide}`"
        width="450"
        height="926"
        class="w-full will-change-transform"
        :class="{ 'hidden md:grid': index === 0 || index === phoneSlides.length - 1 }"
      />
    </div>
  </section>
</template>
