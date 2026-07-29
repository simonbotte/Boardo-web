<script setup lang="ts">
import type { Context } from 'gsap'

const { t } = useBoardoLocale()

const freeFeatures = computed(() => [
  t('pricing.free.games'),
  t('pricing.free.history')
])

const premiumFeatures = computed(() => [
  t('pricing.premium.noAds'),
  t('pricing.premium.people'),
  t('pricing.premium.stats')
])

const pricingSection = ref<HTMLElement | null>(null)
let animationContext: Context | null = null

onMounted(async () => {
  const section = pricingSection.value

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
    const heading = section.querySelector<HTMLElement>('[data-pricing-heading]')
    const cards = gsap.utils.toArray<HTMLElement>('[data-pricing-card]')

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

    cards.forEach((card) => {
      gsap.from(card, {
        autoAlpha: 0,
        y: 40,
        scale: 0.96,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 60%',
          toggleActions: 'play none none reverse'
        }
      })
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
    id="pricing"
    ref="pricingSection"
    class="pt-20 sm:pt-24"
  >
    <UContainer class="px-5">
      <div
        data-pricing-heading
        class="mx-auto max-w-2xl text-center"
      >
        <UBadge
          color="primary"
          variant="soft"
          class="rounded-full px-3 py-1 font-semibold"
        >
          {{ t('pricing.badge') }}
        </UBadge>
        <h2 class="font-display mt-2 text-3xl font-bold sm:text-4xl">
          {{ t('pricing.title') }}
        </h2>
        <p class="mt-3 text-lg leading-tight">
          {{ t('pricing.description') }}
        </p>
      </div>

      <div class="mx-auto mt-10 grid max-w-4xl gap-5 md:grid-cols-2">
        <UCard
          data-pricing-card
          variant="outline"
          class="rounded-2xl shadow-none"
          :ui="{ body: 'p-6 sm:p-8' }"
        >
          <h3 class="font-display text-2xl font-bold">
            {{ t('pricing.free.title') }}
          </h3>
          <p class="mt-3 text-3xl font-bold">
            {{ t('pricing.free.price') }}
          </p>
          <p class="mt-3 min-h-12 text-sm leading-relaxed">
            {{ t('pricing.free.description') }}
          </p>
          <ul class="mt-7 space-y-3">
            <li
              v-for="feature in freeFeatures"
              :key="feature"
              class="flex gap-3 text-sm leading-relaxed"
            >
              <UIcon
                name="i-lucide-check"
                class="mt-0.5 size-5 shrink-0 text-primary"
              />
              <span>{{ feature }}</span>
            </li>
          </ul>
        </UCard>

        <UCard
          data-pricing-card
          variant="outline"
          class="rounded-2xl bg-primary/5 shadow-none ring-primary"
          :ui="{ body: 'p-6 sm:p-8' }"
        >
          <div class="flex items-start justify-between gap-3">
            <h3 class="font-display text-2xl font-bold">
              {{ t('pricing.premium.title') }}
            </h3>
            <UBadge
              color="primary"
              variant="soft"
              class="shrink-0 rounded-full font-semibold"
            >
              {{ t('pricing.premium.badge') }}
            </UBadge>
          </div>
          <p class="mt-3 text-3xl font-bold">
            {{ t('pricing.premium.price') }}<span class="ml-1 text-base font-normal">{{ t('pricing.premium.period') }}</span>
          </p>
          <p class="mt-3 min-h-12 text-sm leading-relaxed">
            {{ t('pricing.premium.description') }}
          </p>
          <ul class="mt-7 space-y-3">
            <li
              v-for="feature in premiumFeatures"
              :key="feature"
              class="flex gap-3 text-sm leading-relaxed"
            >
              <UIcon
                name="i-lucide-check"
                class="mt-0.5 size-5 shrink-0 text-primary"
              />
              <span>{{ feature }}</span>
            </li>
          </ul>
        </UCard>
      </div>
    </UContainer>
  </section>
</template>
