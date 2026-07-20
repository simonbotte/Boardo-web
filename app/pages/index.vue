<script setup lang="ts">
definePageMeta({
  colorMode: 'light'
})

const phoneSlides = Array.from({ length: 7 }, (_, index) => ({
  id: index,
  alt: `Boardo app preview ${index + 1}`
}))

const gameSlides = ['Skyjo', 'Skull King', 'Taco Cat', 'Akropolis', 'Flip 7', 'Five Kings']

const featureCards = [
  { title: 'Add your friends', icon: 'i-lucide-user-round-plus' },
  { title: 'Save every score', icon: 'i-lucide-list-checks' },
  { title: 'Play your games', icon: 'i-lucide-dices' }
]
</script>

<template>
  <div class="overflow-hidden bg-default text-default">
    <UContainer class="px-5 pb-14 pt-12 sm:pt-16">
      <section class="mx-auto flex max-w-3xl flex-col items-center text-center">
        <NuxtImg
          src="/images/boardo-iOS-Default-1024x1024@3x.png"
          alt="Boardo logo placeholder"
          width="1024"
          height="1024"
          class="mb-2 size-[88px]"
        />
        <p class="mb-4 text-xs font-semibold tracking-tight">
          Boardo
        </p>
        <h1 class="font-display max-w-2xl text-3xl font-bold tracking-[-0.045em] sm:text-5xl">
          Never lose track of a game's score again.
        </h1>
        <p class="mt-3 max-w-xl text-xl leading-tight tracking-[-0.03em] text-toned sm:text-2xl">
          Record, calculate, and keep scores<br class="hidden sm:block"> for your favorite board games.
        </p>
        <UButton
          to="#download"
          color="primary"
          size="lg"
          class="mt-7 rounded-lg px-4 py-2 text-left shadow-sm"
        >
          <UIcon
            name="i-simple-icons-apple"
            class="size-5"
          />
          <span class="flex flex-col leading-none">
            <span class="text-[8px] font-normal">Download on the</span>
            <span class="text-sm font-semibold">App Store</span>
          </span>
        </UButton>
      </section>
    </UContainer>

    <section
      aria-label="Boardo app previews"
      class="overflow-hidden pb-16 sm:pb-24"
    >
      <div class="flex w-max animate-[marquee_32s_linear_infinite] gap-5 px-2">
        <div
          v-for="copy in 2"
          :key="copy"
          class="flex gap-5"
        >
          <NuxtImg
            v-for="phone in phoneSlides"
            :key="`${copy}-${phone.id}`"
            src="/images/phone-placeholder.svg"
            :alt="phone.alt"
            width="230"
            height="470"
            class="h-[280px] w-auto shrink-0 sm:h-[390px]"
          />
        </div>
      </div>
    </section>

    <section class="pb-20 sm:pb-28">
      <div class="mx-auto max-w-xl px-5 text-center">
        <UBadge
          color="primary"
          variant="soft"
          class="rounded-full px-3 py-1 font-semibold"
        >
          Browse
        </UBadge>
        <h2 class="font-display mt-2 text-3xl font-bold tracking-[-0.04em] sm:text-4xl">
          A large game collection
        </h2>
      </div>
      <div class="mt-8 overflow-hidden">
        <div class="flex w-max animate-[marquee_36s_linear_infinite] gap-4">
          <div
            v-for="copy in 2"
            :key="copy"
            class="flex gap-4"
          >
            <div
              v-for="game in gameSlides"
              :key="`${copy}-${game}`"
              class="relative shrink-0"
            >
              <NuxtImg
                src="/images/game-placeholder.svg"
                :alt="`${game} game cover placeholder`"
                width="220"
                height="300"
                class="h-[150px] w-[110px] rounded-xl object-cover shadow-sm sm:h-[210px] sm:w-[154px]"
              />
              <span class="absolute bottom-2 left-2 right-2 rounded-md bg-default/85 px-2 py-1 text-center text-xs font-semibold backdrop-blur-sm">{{ game }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <UContainer class="px-5">
      <section class="pb-20 sm:pb-28">
        <div class="mx-auto max-w-xl text-center">
          <UBadge
            color="primary"
            variant="soft"
            class="rounded-full px-3 py-1 font-semibold"
          >
            Interface
          </UBadge>
          <h2 class="font-display mt-2 text-3xl font-bold tracking-[-0.04em] sm:text-4xl">
            Tailored for each game
          </h2>
        </div>

        <div class="mx-auto mt-12 grid max-w-4xl items-center gap-10 md:grid-cols-2 md:gap-20">
          <NuxtImg
            src="/images/phone-score-placeholder.svg"
            alt="Skull King score screen placeholder"
            width="330"
            height="620"
            class="mx-auto h-[420px] w-auto"
          />
          <div class="text-center md:text-left">
            <h3 class="font-display text-3xl font-bold tracking-[-0.04em]">
              Skull king
            </h3>
            <p class="mx-auto mt-2 max-w-sm text-lg leading-tight text-toned md:mx-0">
              Note bids before the round and fold at the end to automatically computes points.
            </p>
          </div>
        </div>

        <div class="mx-auto mt-16 grid max-w-4xl items-center gap-10 md:grid-cols-2 md:gap-20">
          <div class="order-2 text-center md:order-1 md:text-right">
            <h3 class="font-display text-3xl font-bold tracking-[-0.04em]">
              Skull king
            </h3>
            <p class="ml-auto mt-2 max-w-sm text-lg leading-tight text-toned">
              Note bids before the round and fold at the end to automatically computes points.
            </p>
          </div>
          <NuxtImg
            src="/images/phone-score-placeholder.svg"
            alt="Skull King scoring screen placeholder"
            width="330"
            height="620"
            class="order-1 mx-auto h-[420px] w-auto md:order-2"
          />
        </div>

        <div class="mx-auto mt-16 grid max-w-4xl items-center gap-10 md:grid-cols-2 md:gap-20">
          <NuxtImg
            src="/images/phone-score-placeholder.svg"
            alt="Skull King game screen placeholder"
            width="330"
            height="620"
            class="mx-auto h-[420px] w-auto"
          />
          <div class="text-center md:text-left">
            <h3 class="font-display text-3xl font-bold tracking-[-0.04em]">
              Skull king
            </h3>
            <p class="mx-auto mt-2 max-w-sm text-lg leading-tight text-toned md:mx-0">
              Note bids before the round and fold at the end to automatically computes points.
            </p>
          </div>
        </div>
      </section>

      <section
        id="download"
        class="pb-24 text-center sm:pb-32"
      >
        <UBadge
          color="primary"
          variant="soft"
          class="rounded-full px-3 py-1 font-semibold"
        >
          Many
        </UBadge>
        <h2 class="font-display mt-2 text-3xl font-bold tracking-[-0.04em] sm:text-4xl">
          Features to enjoy most of your games
        </h2>
        <div class="mx-auto mt-9 grid max-w-4xl gap-4 sm:grid-cols-3">
          <UCard
            v-for="feature in featureCards"
            :key="feature.title"
            class="rounded-2xl bg-muted shadow-none ring-0"
          >
            <div class="flex flex-col items-center gap-4">
              <NuxtImg
                src="/images/phone-feature-placeholder.svg"
                :alt="`${feature.title} placeholder`"
                width="180"
                height="260"
                class="h-[230px] w-auto"
              />
              <div>
                <UIcon
                  :name="feature.icon"
                  class="mb-2 size-5 text-primary"
                />
                <h3 class="font-display text-xl font-bold tracking-[-0.035em]">
                  {{ feature.title }}
                </h3>
                <p class="mt-1 text-sm leading-tight text-toned">
                  Everything you need to keep your next board game night on track.
                </p>
              </div>
            </div>
          </UCard>
        </div>
      </section>
    </UContainer>
  </div>
</template>
