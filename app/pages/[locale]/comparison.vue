<script setup lang="ts">
const route = useRoute()
const routeLocale = Array.isArray(route.params.locale)
  ? route.params.locale[0]
  : route.params.locale

if (!isSupportedLocale(routeLocale)) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })
}

const { setLocale, t } = useBoardoLocale()
const preferredLocale = useLocalePreference()
setLocale(routeLocale)
preferredLocale.value = routeLocale

const homePath = `/${routeLocale}`

const boardoBenefits = computed(() => [
  {
    icon: 'i-lucide-sparkles',
    title: t('comparison.boardoLead.scoring.title'),
    description: t('comparison.boardoLead.scoring.description')
  },
  {
    icon: 'i-lucide-smartphone',
    title: t('comparison.boardoLead.glance.title'),
    description: t('comparison.boardoLead.glance.description')
  },
  {
    icon: 'i-lucide-laptop',
    title: t('comparison.boardoLead.devices.title'),
    description: t('comparison.boardoLead.devices.description')
  }
])

const seoComparisons = computed(() => [
  {
    title: t('comparison.seo.bgStats.title'),
    description: t('comparison.seo.bgStats.description')
  },
  {
    title: t('comparison.seo.boardRecord.title'),
    description: t('comparison.seo.boardRecord.description')
  },
  {
    title: t('comparison.seo.scorpion.title'),
    description: t('comparison.seo.scorpion.description')
  }
])

type ComparisonCell = {
  key: string
  available?: boolean
}

const rows = computed(() => [
  {
    label: t('comparison.price'),
    boardo: { key: 'comparison.value.boardo.price' },
    bgStats: { key: 'comparison.value.bgStats.price' },
    boardRecord: { key: 'comparison.value.boardRecord.price' },
    scorpion: { key: 'comparison.value.scorpion.price' },
  },
  {
    label: t('comparison.interface'),
    boardo: { key: 'comparison.value.boardo.interface' },
    bgStats: { key: 'comparison.value.bgStats.interface' },
    boardRecord: { key: 'comparison.value.boardRecord.interface' },
    scorpion: { key: 'comparison.value.scorpion.interface' },
  },
  {
    label: t('comparison.gameCount'),
    boardo: { key: 'comparison.value.boardo.gameCount' },
    bgStats: { key: 'comparison.value.bgStats.gameCount' },
    boardRecord: { key: 'comparison.value.boardRecord.gameCount' },
    scorpion: { key: 'comparison.value.scorpion.gameCount' },
  },
  {
    label: t('comparison.appleFeatures'),
    boardo: { key: 'comparison.value.boardo.appleFeatures' },
    bgStats: { key: 'comparison.value.bgStats.appleFeatures' },
    boardRecord: { key: 'comparison.value.boardRecord.appleFeatures' },
    scorpion: { key: 'comparison.value.scorpion.appleFeatures' },
  },
  {
    label: t('comparison.availability'),
    boardo: { key: 'comparison.value.boardo.availability' },
    bgStats: { key: 'comparison.value.bgStats.availability' },
    boardRecord: { key: 'comparison.value.boardRecord.availability' },
    scorpion: { key: 'comparison.value.scorpion.availability' },
  }
])

const competitors = computed(() => [
  {
    name: t('comparison.bgStats'),
    source: t('comparison.sourceBgStats'),
    href: 'https://www.bgstatsapp.com/support/'
  },
  {
    name: t('comparison.boardRecord'),
    source: t('comparison.sourceBoardRecord'),
    href: 'https://board-record.com/'
  },
  {
    name: t('comparison.scorpion'),
    source: t('comparison.sourceScorpion'),
    href: 'https://scor-pion.com/en'
  }
])

const renderCell = (cell: ComparisonCell) =>
  cell.available ? '' : t(cell.key as Parameters<typeof t>[0])
</script>

<template>
  <div class="bg-default pb-20 text-default sm:pb-24">
    <section class="pt-10 sm:pt-12">
      <UContainer class="px-5">
        <UButton
          :to="homePath"
          icon="i-lucide-arrow-left"
          variant="ghost"
          class="mb-8"
        >
          {{ t('comparison.back') }}
        </UButton>
        <div class="mx-auto max-w-3xl text-center">
          <UBadge color="primary" variant="soft" class="rounded-full px-3 py-1 font-semibold">
            {{ t('comparison.badge') }}
          </UBadge>
          <h1 class="font-display mt-3 text-3xl font-bold sm:text-5xl">
            {{ t('comparison.title') }}
          </h1>
          <p class="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-toned sm:text-xl">
            {{ t('comparison.description') }}
          </p>
        </div>
      </UContainer>
    </section>

    <section class="pt-12 sm:pt-16">
      <UContainer class="px-5">
        <div class="mx-auto max-w-5xl rounded-3xl bg-primary/5 p-6 ring-1 ring-primary/20 sm:p-9">
          <div class="mx-auto max-w-2xl text-center">
            <UBadge
              color="primary"
              variant="soft"
              class="rounded-full px-3 py-1 font-semibold"
            >
              {{ t('comparison.boardoLead.badge') }}
            </UBadge>
            <h2 class="font-display mt-3 text-2xl font-bold sm:text-3xl">
              {{ t('comparison.boardoLead.title') }}
            </h2>
            <p class="mt-3 leading-relaxed text-toned">
              {{ t('comparison.boardoLead.description') }}
            </p>
            <div class="mt-6 flex flex-col items-center justify-center gap-3">
              <UButton :to="homePath" icon="i-lucide-arrow-right">
                {{ t('comparison.learnMore') }}
              </UButton>
              <BoardoAppStoreBadge :with-top-margin="false" />
            </div>
          </div>

          <div class="mt-8 grid gap-4 md:grid-cols-3">
            <UCard
              v-for="benefit in boardoBenefits"
              :key="benefit.title"
              class="rounded-2xl bg-default shadow-none"
              :ui="{ body: 'p-5' }"
            >
              <UIcon :name="benefit.icon" class="size-5 text-primary" />
              <h3 class="font-display mt-3 text-lg font-bold">
                {{ benefit.title }}
              </h3>
              <p class="mt-2 text-sm leading-relaxed text-toned">
                {{ benefit.description }}
              </p>
            </UCard>
          </div>
        </div>
      </UContainer>
    </section>

    <section class="pt-12 sm:pt-16">
      <UContainer class="px-5">
        <div class="overflow-x-auto rounded-2xl border border-default">
          <table class="min-w-[900px] w-full border-collapse text-left text-sm">
            <caption class="sr-only">
              {{ t('comparison.tableLabel') }}
            </caption>
            <thead class="bg-muted">
              <tr>
                <th scope="col" class="w-[18%] p-4 font-semibold text-highlighted">
                  {{ t('comparison.feature') }}
                </th>
                <th scope="col" class="w-[20.5%] bg-primary/10 p-4 font-semibold text-highlighted">
                  <span class="block">{{ t('comparison.boardo') }}</span>
                  <UButton
                    :to="homePath"
                    size="xs"
                    variant="link"
                    trailing-icon="i-lucide-arrow-right"
                    class="mt-1"
                  >
                    {{ t('comparison.learnMore') }}
                  </UButton>
                </th>
                <th scope="col" class="w-[20.5%] p-4 font-semibold text-highlighted">
                  {{ t('comparison.bgStats') }}
                </th>
                <th scope="col" class="w-[20.5%] p-4 font-semibold text-highlighted">
                  {{ t('comparison.boardRecord') }}
                </th>
                <th scope="col" class="w-[20.5%] p-4 font-semibold text-highlighted">
                  {{ t('comparison.scorpion') }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in rows" :key="row.label" class="border-t border-default align-top">
                <th scope="row" class="p-4 font-semibold text-highlighted">
                  {{ row.label }}
                </th>
                <td v-for="product in ['boardo', 'bgStats', 'boardRecord', 'scorpion'] as const" :key="product" class="p-4 leading-relaxed text-toned" :class="product === 'boardo' ? 'bg-primary/5' : ''">
                  <UIcon v-if="row[product].available" name="i-lucide-check" class="size-5 text-primary" :aria-label="row.label" />
                  <span v-else>
                    {{ renderCell(row[product]) }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </UContainer>
    </section>

    <section class="pt-12 sm:pt-16">
      <UContainer class="px-5">
        <div class="mx-auto max-w-4xl">
          <h2 class="font-display text-center text-2xl font-bold sm:text-3xl">
            {{ t('comparison.seo.title') }}
          </h2>
          <div class="mt-7 grid gap-4 md:grid-cols-3">
            <UCard
              v-for="comparison in seoComparisons"
              :key="comparison.title"
              variant="outline"
              class="rounded-2xl shadow-none"
              :ui="{ body: 'p-5' }"
            >
              <h3 class="font-display text-lg font-bold">
                {{ comparison.title }}
              </h3>
              <p class="mt-3 text-sm leading-relaxed text-toned">
                {{ comparison.description }}
              </p>
            </UCard>
          </div>
        </div>
      </UContainer>
    </section>

    <section class="pt-12 sm:pt-16">
      <UContainer class="px-5">
        <UCard class="mx-auto max-w-4xl rounded-2xl bg-primary/5 shadow-none ring-primary/20" :ui="{ body: 'p-6 sm:p-9' }">
          <div class="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <UBadge color="primary" variant="soft" class="rounded-full px-3 py-1 font-semibold">
                {{ t('comparison.whyBoardo.badge') }}
              </UBadge>
              <h2 class="font-display mt-3 text-2xl font-bold sm:text-3xl">
                {{ t('comparison.whyBoardo.title') }}
              </h2>
              <p class="mt-3 leading-relaxed text-toned">
                {{ t('comparison.whyBoardo.description') }}
              </p>
              <BoardoAppStoreBadge />
            </div>
            <ul class="space-y-4">
              <li v-for="point in ['comparison.whyBoardo.point1', 'comparison.whyBoardo.point2', 'comparison.whyBoardo.point3']" :key="point" class="flex gap-3 leading-relaxed text-toned">
                <UIcon name="i-lucide-circle-check" class="mt-0.5 size-5 shrink-0 text-primary" />
                <span>{{ t(point) }}</span>
              </li>
            </ul>
          </div>
        </UCard>
      </UContainer>
    </section>

    <section class="pt-12 sm:pt-16">
      <UContainer class="px-5">
        <div class="mx-auto max-w-4xl border-t border-default pt-6">
          <h2 class="font-display text-lg font-bold">
            {{ t('comparison.sources') }}
          </h2>
          <ul class="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <li v-for="competitor in competitors" :key="competitor.name">
              <a :href="competitor.href" target="_blank" rel="noreferrer" class="text-primary underline underline-offset-4">
                {{ competitor.name }} — {{ competitor.source }}
              </a>
            </li>
          </ul>
          <p class="mt-4 text-sm text-muted">
            {{ t('comparison.updated') }}
          </p>
        </div>
      </UContainer>
    </section>
  </div>
  <BoardoFooter />
</template>
