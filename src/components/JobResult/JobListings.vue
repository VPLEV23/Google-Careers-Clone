<template>
  <main class="flex-auto bg-brand-gray-2 p-8">
    <ol>
      <JonListingVue />
      <JonListingVue />
      <JonListingVue />
    </ol>
  </main>
</template>

<script>
import JonListingVue from "./JonListing.vue";
export default {
  name: "JobListings",
  components: {
    JonListingVue,
  },
};
</script>
