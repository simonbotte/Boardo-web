<script setup lang="ts">
definePageMeta({
  colorMode: "light",
});
</script>

<template>
  <div class="overflow-hidden bg-default text-default">
    <BoardoHeroSection />
    <BoardoAppPreviewSection />
    <BoardoGameCollectionSection />
    <BoardoInterfaceSection />
    <BoardoFeaturesSection />
    <BoardoPricingSection v-if="1 === 2" />
    <BoardoContactSection />
    <BoardoFooter />
  </div>
</template>
