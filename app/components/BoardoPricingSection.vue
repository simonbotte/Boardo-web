<script setup lang="ts">
import type { Context } from 'gsap'

const { t } = useBoardoLocale()

const benefits = computed(() => [
  {
    id: 'players',
    icon: 'i-lucide-users-round',
    included: t('pricing.included.players'),
    title: t('pricing.benefits.players.title'),
    description: t('pricing.benefits.players.description')
  },
  {
    id: 'stats',
    icon: 'i-lucide-chart-no-axes-column-increasing',
    included: t('pricing.included.stats'),
    title: t('pricing.benefits.stats.title'),
    description: t('pricing.benefits.stats.description')
  },
  {
    id: 'ads',
    icon: 'i-lucide-megaphone-off',
    included: t('pricing.included.ads'),
    title: t('pricing.benefits.ads.title'),
    description: t('pricing.benefits.ads.description')
  }
])

const plans = computed(() => [
  {
    id: 'annual',
    title: t('pricing.plan.annual.title'),
    price: t('pricing.plan.annual.price'),
    period: t('pricing.plan.annual.period'),
    featured: true
  },
  {
    id: 'monthly',
    title: t('pricing.plan.monthly.title'),
    price: t('pricing.plan.monthly.price'),
    period: t('pricing.plan.monthly.period'),
    featured: false
  }
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
    const benefitGrid = section.querySelector<HTMLElement>('[data-pricing-benefit-grid]')
    const benefitCards = benefitGrid?.querySelectorAll<HTMLElement>(
      '[data-pricing-benefit-card]'
    )
    const includedList = section.querySelector<HTMLElement>('[data-pricing-included]')
    const includedBenefits = includedList?.querySelectorAll<HTMLElement>(
      '[data-pricing-benefit]'
    )
    const plansHeading = section.querySelector<HTMLElement>('[data-pricing-plans-heading]')

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

    if (includedList && includedBenefits && includedBenefits.length > 0) {
      gsap.from(includedBenefits, {
        autoAlpha: 0,
        y: 24,
        duration: 0.65,
        ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: {
          trigger: includedList,
          start: 'top 60%',
          toggleActions: 'play none none reverse'
        }
      })
    }

    if (benefitGrid && benefitCards && benefitCards.length > 0) {
      gsap.from(benefitCards, {
        autoAlpha: 0,
        y: 40,
        scale: 0.96,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: {
          trigger: benefitGrid,
          start: 'top 60%',
          toggleActions: 'play none none reverse'
        }
      })
    }

    if (plansHeading) {
      gsap.from(plansHeading.children, {
        autoAlpha: 0,
        y: 24,
        duration: 0.65,
        ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: {
          trigger: plansHeading,
          start: 'top 60%',
          toggleActions: 'play none none reverse'
        }
      })
    }

    cards.forEach((card) => {
      gsap.from(card, {
        autoAlpha: 0,
        y: 32,
        duration: 0.65,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 65%',
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
    class="relative isolate overflow-hidden pt-20 sm:pt-28"
  >

    <UContainer class="px-5">
      <div
        data-pricing-heading
        class="mx-auto max-w-3xl text-center"
      >
        <UBadge
          color="primary"
          variant="soft"
          class="rounded-full px-3 py-1 font-semibold"
        >
          <UIcon name="i-lucide-crown" class="mr-1 size-4" />
          {{ t('pricing.badge') }}
        </UBadge>
        <h2 class="font-display mt-3 text-3xl font-bold tracking-tight text-highlighted sm:text-5xl">
          {{ t('pricing.title') }}
        </h2>
      </div>

      <div class="mx-auto mt-10 max-w-5xl">
        <article
          data-pricing-card
          class="relative isolate overflow-hidden rounded-[2rem] bg-primary-500 px-6 py-8 text-inverted sm:px-10 sm:py-10"
        >
          <div
            aria-hidden="true"
            class="pointer-events-none absolute -right-14 -top-24 -z-10 size-64 rounded-full bg-white/10"
          />

          <div class="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div class="max-w-2xl">
              <div class="flex items-center gap-2 text-sm font-semibold text-inverted/80">
                <UIcon name="i-lucide-crown" class="size-5" />
                <span>Boardo Ultra</span>
              </div>
              <h3 class="font-display mt-4 text-2xl font-bold tracking-tight sm:text-4xl">
                {{ t('pricing.hero.title') }}
              </h3>
              <p class="mt-3 max-w-xl leading-relaxed text-inverted/85 sm:text-lg">
                {{ t('pricing.hero.description') }}
              </p>
            </div>

            <ul
              data-pricing-included
              class="grid gap-3 sm:grid-cols-3 lg:grid-cols-1"
            >
              <li
                v-for="benefit in benefits"
                :key="benefit.id"
                data-pricing-benefit
                class="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 text-sm font-medium"
              >
                <UIcon name="i-lucide-check" class="size-5 shrink-0" />
                <span>{{ benefit.included }}</span>
              </li>
            </ul>
          </div>
        </article>

        <div
          data-pricing-benefit-grid
          class="mt-5 grid gap-4 sm:grid-cols-3"
        >
          <UCard
            v-for="benefit in benefits"
            :key="benefit.id"
            data-pricing-benefit-card
            variant="outline"
            class="rounded-3xl bg-elevated shadow-sm transition-transform duration-300 hover:-translate-y-1"
            :ui="{ body: 'p-6 sm:p-7' }"
          >
            <div class="mb-5 flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <UIcon :name="benefit.icon" class="size-6" />
            </div>
            <h3 class="font-display text-lg font-bold text-highlighted">
              {{ benefit.title }}
            </h3>
            <p class="mt-2 text-sm leading-relaxed text-muted">
              {{ benefit.description }}
            </p>
          </UCard>
        </div>

        <div
          data-pricing-plans-heading
          class="mx-auto mt-16 max-w-3xl text-center sm:mt-20"
        >
          <h3 class="font-display text-2xl font-bold text-highlighted sm:text-3xl">
            {{ t('pricing.plansTitle') }}
          </h3>
        </div>

        <div class="mx-auto mt-7 grid max-w-3xl gap-4 sm:grid-cols-2">
          <article
            v-for="plan in plans"
            :key="plan.id"
            data-pricing-card
            :class="[
              'relative flex flex-col rounded-3xl p-6 sm:p-7',
              plan.featured
                ? 'bg-linear-to-br from-primary-500 via-primary-600 to-primary-800 text-inverted shadow-xl shadow-primary/15'
                : 'border border-default bg-elevated text-default shadow-sm'
            ]"
          >
            <UBadge
              v-if="plan.featured"
              color="neutral"
              variant="solid"
              class="absolute right-5 top-5 rounded-full bg-white/15 px-3 py-1 font-semibold text-inverted ring-0"
            >
              {{ t('pricing.bestValue') }}
            </UBadge>

            <h4 class="font-display text-xl font-bold">
              {{ plan.title }}
            </h4>
            <p class="mt-5 flex items-baseline gap-1">
              <span class="font-display text-4xl font-bold tracking-tight sm:text-5xl">
                {{ plan.price }}
              </span>
              <span :class="plan.featured ? 'text-inverted/75' : 'text-muted'">
                {{ plan.period }}
              </span>
            </p>

            <div
              :class="[
                'mt-6 flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold',
                plan.featured ? 'bg-white/10' : 'bg-primary/8 text-primary'
              ]"
            >
              <UIcon name="i-lucide-sparkles" class="size-5 shrink-0" />
              <span>{{ t('pricing.trial') }}</span>
            </div>
            <p
              :class="[
                'mt-3 text-sm leading-relaxed',
                plan.featured ? 'text-inverted/75' : 'text-muted'
              ]"
            >
              {{ t('pricing.cancelAnytime') }}
            </p>
          </article>
        </div>
      </div>
    </UContainer>
  </section>
</template>
