<template>
  <main class="flex-auto bg-brand-gray-2 p-8">
    <ol>
      <JonListingVue v-for="job in displayedJobs" :key="job.id" :job="job" />
    </ol>
    <div class="mx-auto mt-8">
      <div class="flex flex-row flex-nowrap">
        <p class="flex-grow text-sm">Page {{ currentPage }}</p>
        <div class="flex items-center justify-center">
          <router-link
            v-if="prevPage"
            :to="{ name: 'JobResult', query: { page: prevPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            >Prev</router-link
          >

          <router-link
            v-if="nextPage"
            :to="{ name: 'JobResult', query: { page: nextPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
          >
            Next</router-link
          >
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapActions, mapState } from "pinia";
import JonListingVue from "./JonListing.vue";

import { useJobsStore, FETCH_JOBS, FILTER_JOBS } from "@/stores/jobs";

export default {
  name: "JobListings",
  components: {
    JonListingVue,
  },
  computed: {
    currentPage() {
      return Number.parseInt(this.$route.query.page || "1");
    },
    prevPage() {
      const prevPage = this.currentPage - 1;
      const firstPage = 1;
      return prevPage >= firstPage ? prevPage : undefined;
    },
    ...mapState(useJobsStore, {
      FILTER_JOBS,
      nextPage() {
        const nextPage = this.currentPage + 1;
        const maxPage = this.FILTER_JOBS.length / 10;
        return nextPage <= maxPage ? nextPage : undefined;
      },
      displayedJobs() {
        const pageNumber = this.currentPage;
        const firstJobIndex = (pageNumber - 1) * 10;
        const lastJobIndex = pageNumber * 10;
        return this.FILTER_JOBS.slice(firstJobIndex, lastJobIndex);
      },
    }),
  },
  async mounted() {
    this.FETCH_JOBS();
  },
  methods: {
    ...mapActions(useJobsStore, [FETCH_JOBS]),
  },
};
</script>
