<template>
  <div class="flex w-full flex-row flex-nowrap">
    <JobFilterSidebarVue />
    <JobListingVue />
  </div>
</template>

<script lang="ts" setup>
import JobFilterSidebarVue from "../components/JobResult/JobFilterSidebar/JobFilterSidebar.vue";
import JobListingVue from "../components/JobResult/JobListings.vue";
</script>
