<script setup lang="ts">
withDefaults(defineProps<{
  /** URL de la capture à afficher dans l'iPhone. */
  src: string
  /** Texte alternatif de la capture. */
  alt?: string
  /** Infobulle descriptive de la capture. */
  title?: string
}>(), {
  alt: 'Aperçu de l’application',
  title: ''
})
</script>

<template>
  <figure class="grid m-0 grid-cols-1 grid-rows-1 aspect-1350/2760">
    <div class="col-start-1 row-start-1 m-[5%] overflow-hidden">
      <NuxtImg
        :src="src"
        :alt="alt"
        :title="title || alt"
        class="block size-full object-cover rounded-[10.5%_/_5.15%]"
      />
    </div>

    <NuxtImg
      src="/images/iPhone-frame.png"
      alt=""
      title=""
      aria-hidden="true"
      class="pointer-events-none col-start-1 row-start-1 block size-full z-10"
    />
  </figure>
</template>
