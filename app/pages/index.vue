<script setup lang="ts">
const preferredLocale = useLocalePreference()
const destination = isSupportedLocale(preferredLocale.value)
  ? `/${preferredLocale.value}`
  : '/fr'

await navigateTo(destination, { redirectCode: 302 })
</script>
