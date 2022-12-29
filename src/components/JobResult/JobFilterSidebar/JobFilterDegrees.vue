<template>
  <JobFilterSidebarCheckboxGroup
    :uniq-value="UNIQ_DEGREES"
    :action="userStore.ADD_SELECTED_DEGEES"
  />
</template>
<script lang="ts" setup>
import { computed } from "vue";

import JobFilterSidebarCheckboxGroup from "./JobFilterSidebarCheckboxGroup.vue";

import { useUserStore } from "../../../stores/user";
import { useDegreeStore } from "@/stores/degrees";

const degreeStore = useDegreeStore();
const UNIQ_DEGREES = computed(() => degreeStore.UNIQ_DEGREES);
const userStore = useUserStore();
</script>
