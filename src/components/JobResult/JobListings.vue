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

<script setup>
import { computed, onMounted } from "vue";
import JonListingVue from "./JonListing.vue";
import { useRoute } from "vue-router";
import usePreviusandNextPage from "@/composables/usePreviusAndNextPage";
import { useJobsStore } from "@/stores/jobs";

const jobsStore = useJobsStore();
onMounted(jobsStore.FETCH_JOBS);
const route = useRoute();

const FILTER_JOBS = computed(() => jobsStore.FILTER_JOBS);
const maxPage = computed(() => Math.ceil(FILTER_JOBS.value.length / 10));
const currentPage = computed(() => Number.parseInt(route.query.page || "1"));

const { nextPage, prevPage } = usePreviusandNextPage(currentPage, maxPage);

const displayedJobs = computed(() => {
  const pageNumber = currentPage.value;
  const firstJobIndex = (pageNumber - 1) * 10;
  const lastJobIndex = pageNumber * 10;
  return FILTER_JOBS.value.slice(firstJobIndex, lastJobIndex);
});
</script>
