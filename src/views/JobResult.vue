<template>
  <div class="flex w-full flex-row flex-nowrap">
    <JobFilterSidebarVue />
    <JobListingVue />
  </div>
</template>

<script>
import JobFilterSidebarVue from "../components/JobResult/JobFilterSidebar/JobFilterSidebar.vue";
import JobListingVue from "../components/JobResult/JobListings.vue";
export default {
  name: "JobResultView",
  components: {
    JobFilterSidebarVue,
    JobListingVue,
  },
};
</script>
