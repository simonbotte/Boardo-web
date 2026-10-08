<script setup lang="ts">
const route = useRoute()
const routeLocale = Array.isArray(route.params.locale)
  ? route.params.locale[0]
  : route.params.locale

if (!isSupportedLocale(routeLocale)) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })
}

const { locale, setLocale, legalContent: content } = useBoardoLocale()
const preferredLocale = useLocalePreference()
setLocale(routeLocale)
preferredLocale.value = routeLocale

useHead(() => ({
  title: content.value.title,
  meta: [
    { name: 'description', content: content.value.description }
  ]
}))
</script>

<template>
  <div class="bg-default pb-20 text-default sm:pb-24">
    <section class="pt-10 sm:pt-12">
      <UContainer class="px-5">
        <UButton
          :to="`/${locale}`"
          icon="i-lucide-arrow-left"
          variant="ghost"
          class="mb-8"
        >
          {{ content.backHome }}
        </UButton>
        <div class="mx-auto max-w-3xl">
          <UBadge color="primary" variant="soft" class="rounded-full px-3 py-1 font-semibold">
            {{ content.badge }}
          </UBadge>
          <h1 class="font-display mt-3 text-3xl font-bold sm:text-5xl">
            {{ content.title }}
          </h1>
          <p class="mt-4 max-w-2xl text-lg leading-relaxed text-toned sm:text-xl">
            {{ content.description }}
          </p>
          <p class="mt-4 text-sm text-muted">
            {{ content.updated }}
          </p>
        </div>
      </UContainer>
    </section>

    <section class="pt-10 sm:pt-12">
      <UContainer class="px-5">
        <div class="mx-auto max-w-3xl space-y-4">
          <UCard
            v-for="section in content.sections"
            :key="section.id"
            :id="section.id"
            variant="outline"
            class="rounded-2xl shadow-none"
            :ui="{ body: 'p-5 sm:p-7' }"
          >
            <h2 class="font-display text-xl font-bold sm:text-2xl">
              {{ section.title }}
            </h2>
            <div class="mt-4 space-y-4 text-sm leading-relaxed text-toned sm:text-base">
              <p v-for="paragraph in section.paragraphs" :key="paragraph">
                {{ paragraph }}
              </p>
            </div>
          </UCard>

          <UCard
            variant="outline"
            class="rounded-2xl shadow-none"
            :ui="{ body: 'p-5 sm:p-7' }"
          >
            <h2 class="font-display text-xl font-bold sm:text-2xl">
              {{ content.linksTitle }}
            </h2>
            <ul class="mt-4 grid gap-3 text-sm sm:grid-cols-2">
              <li v-for="link in content.links" :key="link.href">
                <a
                  :href="link.href"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="font-semibold text-primary underline underline-offset-4"
                >
                  {{ link.label }}
                </a>
              </li>
            </ul>
          </UCard>
        </div>
      </UContainer>
    </section>

    <section class="pt-8">
      <UContainer class="px-5">
        <div class="mx-auto max-w-3xl">
          <NuxtLink
            :to="`/${locale}`"
            class="text-sm font-semibold text-primary underline underline-offset-4"
          >
            {{ content.backHome }}
          </NuxtLink>
        </div>
      </UContainer>
    </section>
  </div>
  <BoardoFooter />
</template>
