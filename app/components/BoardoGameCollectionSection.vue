<script setup lang="ts">
import type { Context } from 'gsap'

const gameSlides = [
  "flip7",
  "skyjo",
  "skull-king",
  "akropolis",
  "five-rois",
  "odin",
  "pixies",
  "qwirkle",
  "seven-wonders",
  "triominos",
  "uno",
  "belote",
  "darts",
  "yatzy",
];
const { t } = useBoardoLocale();

const collectionSection = ref<HTMLElement | null>(null)
let animationContext: Context | null = null

onMounted(async () => {
  const section = collectionSection.value

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
    const heading = section.querySelector<HTMLElement>('[data-collection-heading]')
    const marquee = section.querySelector<HTMLElement>('[data-collection-marquee]')
    const games = gsap.utils.toArray<HTMLElement>('[data-collection-game]')

    if (heading) {
      gsap.from(heading.children, {
        autoAlpha: 0,
        y: 24,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: {
          trigger: heading,
          start: 'top 60%',
          toggleActions: 'play none none reverse'
        }
      })
    }

    if (games.length > 0) {
      gsap.from(games, {
        autoAlpha: 0,
        y: 72,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.08,
        scrollTrigger: {
          trigger: marquee ?? section,
          start: 'top 60%',
          toggleActions: 'play none none reverse'
        }
      })
    }
  }, section)
})

onBeforeUnmount(() => {
  animationContext?.revert()
  animationContext = null
})
</script>

<template>
  <section
    ref="collectionSection"
    class="pt-20 sm:pt-28"
  >
    <div
      data-collection-heading
      class="mx-auto max-w-xl px-5 text-center"
    >
      <UBadge
        color="primary"
        variant="soft"
        class="rounded-full px-3 py-1 font-semibold"
      >
        {{ t("collection.badge") }}
      </UBadge>
      <h2 class="font-display mt-2 text-3xl font-bold sm:text-4xl">
        {{ t("collection.title") }}
      </h2>
    </div>
    <div
      data-collection-marquee
      class="mt-8 overflow-hidden"
    >
      <UMarquee :overlay="false" :ui="{ root: '[--gap:--spacing(8)]', content: 'w-auto py-1' }" :reverse="true"> 
        <NuxtImg
          v-for="game in gameSlides"
          :key="`${game}`"
          :src="`/images/games/${game}.jpg`"
          :alt="`${game} ${t('collection.alt')}`"
          :title="`${game} ${t('collection.alt')}`"
          height="720"
          data-collection-game
          class="h-[200px] w-auto rounded-xl will-change-transform sm:h-[360px]"
        />
      </UMarquee>
    </div>
  </section>
</template>
