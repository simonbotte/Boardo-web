<script setup lang="ts">
import type { Context } from "gsap";

const { t } = useBoardoLocale();

const featureCards = computed(() => [
  {
    name: "addFriends",
    icon: "i-lucide-user-round-plus",
    image: "recurent-players.webp",
  },
  {
    name: "saveScores",
    icon: "i-lucide-list-checks",
    image: "acropolis-score-entry.webp",
  },
  { name: "playGames", icon: "i-lucide-dices", image: "games.webp" },
  { name: "stats", icon: "i-lucide-chart-no-axes-combined", image: "stat-clemence.webp" },
  {
    name: "liveActivities",
    icon: "i-lucide-smartphone",
    image: "live-activites.webp",
    imagePosition: "bottom",
  },
]);

const featuresSection = ref<HTMLElement | null>(null);
let animationContext: Context | null = null;

onMounted(async () => {
  const section = featuresSection.value;

  if (
    !section ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    return;
  }

  const [{ gsap }, { ScrollTrigger }] = await Promise.all([
    import("gsap"),
    import("gsap/ScrollTrigger"),
  ]);

  gsap.registerPlugin(ScrollTrigger);

  animationContext = gsap.context(() => {
    const heading = section.querySelector<HTMLElement>(
      "[data-features-heading]"
    );
    const cards = gsap.utils.toArray<HTMLElement>("[data-feature-card]");

    if (heading) {
      gsap.from(heading.children, {
        autoAlpha: 0,
        y: 24,
        duration: 0.65,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: heading,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      });
    }

    cards.forEach((card) => {
      gsap.from(card, {
        autoAlpha: 0,
        y: 40,
        scale: 0.96,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, section);
});

onBeforeUnmount(() => {
  animationContext?.revert();
  animationContext = null;
});
</script>

<template>
  <section
    id="download"
    ref="featuresSection"
    class="overflow-hidden pt-20 text-center sm:pt-24"
  >
    <UContainer class="px-5">
      <div data-features-heading>
        <UBadge
          color="primary"
          variant="soft"
          class="rounded-full px-3 py-1 font-semibold"
        >
          {{ t("features.badge") }}
        </UBadge>
        <h2 class="font-display mt-2 text-3xl font-bold sm:text-4xl">
          {{ t("features.title") }}
        </h2>
      </div>
      <div class="mx-auto mt-9 grid max-w-4xl gap-4 sm:grid-cols-2">
        <UCard
          v-for="(feature, index) in featureCards"
          :key="feature.name"
          data-feature-card
          class="rounded-2xl bg-muted shadow-none ring-0"
          :class="{ 'sm:col-span-2': index === 0 }"
        >
          <div class="flex flex-col items-center gap-4">
            <div class="mx-auto w-48 aspect-[1350/1840] overflow-hidden">
              <IPhoneScreenshot
                :src="`/images/app-screen/${feature.image}`"
                :alt="t(`features.${feature.name}.title`)"
                :title="t(`features.${feature.name}.title`)"
                class="w-full"
                :class="
                  feature.imagePosition === 'bottom'
                    ? '-translate-y-[33.333333%]'
                    : undefined
                "
              />
            </div>
            <div>
              <UIcon :name="feature.icon" class="mb-2 size-5 text-primary" />
              <h3 class="font-display text-xl font-bold">
                {{ t(`features.${feature.name}.title`) }}
              </h3>
              <p class="mt-1 text-sm leading-tight">
                {{ t(`features.${feature.name}.description`) }}
              </p>
            </div>
          </div>
        </UCard>
      </div>
    </UContainer>
  </section>
</template>
