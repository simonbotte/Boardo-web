<script setup lang="ts">
import type { Context } from "gsap";

const { t } = useBoardoLocale();

const interfaceSections = ["skull-king", "7-wonders", "pixies"] as const;

const interfaceSection = ref<HTMLElement | null>(null);
let animationContext: Context | null = null;

onMounted(async () => {
  const section = interfaceSection.value;

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
      "[data-interface-heading]"
    );
    const rows = gsap.utils.toArray<HTMLElement>("[data-interface-row]");

    if (heading) {
      gsap.from(heading.children, {
        autoAlpha: 0,
        y: 24,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: heading,
          start: "top 40%",
          toggleActions: "play none none reverse",
        },
      });
    }

    rows.forEach((row, index) => {
      const phone = row.querySelector<HTMLElement>("[data-interface-phone]");
      const content = row.querySelector<HTMLElement>(
        "[data-interface-content]"
      );
      const direction = index % 2 === 0 ? -1 : 1;

      gsap
        .timeline({
          scrollTrigger: {
            trigger: row,
            start: "top 60%",
            toggleActions: "play none none reverse",
          },
        })
        .from(phone, {
          autoAlpha: 0,
          x: direction * 72,
          y: 36,
          rotate: direction * 5,
          scale: 0.92,
          duration: 0.85,
          ease: "power3.out",
        })
        .from(
          content?.children ?? [],
          {
            autoAlpha: 0,
            x: direction * -36,
            y: 18,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.1,
          },
          "-=0.48"
        );
    });
  }, section);
});

onBeforeUnmount(() => {
  animationContext?.revert();
  animationContext = null;
});
</script>

<template>
  <section ref="interfaceSection" class="overflow-hidden bg-muted/30">
    <UContainer class="px-5">
      <section class="pt-20 sm:pt-28">
        <div data-interface-heading class="mx-auto max-w-xl text-center">
          <UBadge
            color="primary"
            variant="soft"
            class="rounded-full px-3 py-1 font-semibold"
          >
            {{ t("interface.badge") }}
          </UBadge>
          <h2 class="font-display mt-2 text-3xl font-bold sm:text-4xl">
            {{ t("interface.title") }}
          </h2>
        </div>

        <div
          v-for="(game, index) in interfaceSections"
          :key="game"
          data-interface-row
          class="mx-auto flex flex-col max-w-4xl items-center gap-10 justify-center sm:flex-row md:gap-20"
          :class="{
            'sm:flex-row-reverse': index % 2 !== 0,
            'pt-20': index === 0,
            'mt-20 sm:mt-28': index > 0,
          }"
        >
          <IPhoneScreenshot
            :src="`/images/app-screen/${game}-entry-screen.webp`"
            :alt="t(`interface.${game}.title`)"
            :title="t(`interface.${game}.title`)"
            width="450"
            height="926"
            data-interface-phone
            class="h-[225px] aspect-ratio[926/450] shrink-0 will-change-transform sm:h-[463px]"
          />

          <div data-interface-content class="text-center">
            <h3 class="font-display text-3xl font-bold">
              {{ t(`interface.${game}.title`) }}
            </h3>
            <p
              class="mt-2 max-w-sm text-lg leading-tight"
              :class="index % 2 === 0 ? 'ml-auto' : 'mx-auto md:mx-0'"
            >
              {{ t(`interface.${game}.description`) }}
            </p>
          </div>
        </div>
      </section>
    </UContainer>
  </section>
</template>
