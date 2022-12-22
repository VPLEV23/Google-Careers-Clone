<template>
  <main class="flex-auto bg-brand-gray-2 p-8">
    <ol>
      <JonListingVue v-for="job in jobs" :key="job.id" :job="job" />
    </ol>
  </main>
</template>

<script>
import JonListingVue from "./JonListing.vue";
import axios from "axios";

export default {
  name: "JobListings",
  components: {
    JonListingVue,
  },
  data() {
    return {
      jobs: [],
    };
  },
  async mounted() {
    const res = await axios.get("http://localhost:3000/jobs");
    this.jobs = res.data;
  },
};
</script>
