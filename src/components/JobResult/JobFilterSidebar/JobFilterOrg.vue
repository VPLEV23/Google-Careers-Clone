<template>
  <JobFilterSidebarCheckboxGroup
    :uniq-value="UNIQUE_ORGANIZATIONS"
    :action="userStore.ADD_SELECTED_ORGANIZATION"
  />
</template>

<script lang="ts" setup>
import { computed } from "vue";
import JobFilterSidebarCheckboxGroup from "./JobFilterSidebarCheckboxGroup.vue";
import { useJobsStore } from "../../../stores/jobs";
import { useUserStore } from "../../../stores/user";

const jobsStore = useJobsStore();
const UNIQUE_ORGANIZATIONS = computed(() => jobsStore.UNIQUE_ORGANIZATIONS);
const userStore = useUserStore();
</script>
