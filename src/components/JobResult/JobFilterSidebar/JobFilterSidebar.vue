<template>
  <div
    class="flex w-96 flex-col border-r border-solid border-brand-gray-1 bg-white p-4"
  >
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-4 text-base font-semibold">What do You want to do</h3>
        <div class="flex items-center text-sm">
          <ActionButtonVue text="Clear Filters" type="secondary" />
        </div>
      </div>
      <JobFilterSidebarCheckboxGroup
        header="Degrees"
        :uniq-value="UNIQ_DEGREES"
        :action="userStore.ADD_SELECTED_DEGEES"
      />
      <JobFilterSidebarCheckboxGroup
        header="Job Types"
        :uniq-value="UNIQUE_JOB_TYPES"
        :action="userStore.ADD_SELECTED_JOB_TYPES"
      />
      <JobFilterSidebarCheckboxGroup
        header="Organizations"
        :uniq-value="UNIQUE_ORGANIZATIONS"
        :action="userStore.ADD_SELECTED_ORGANIZATION"
      />
    </section>
  </div>
</template>
Vue
<script lang="ts" setup>
import { computed } from "vue";
import ActionButtonVue from "../../Shared/ActionButton.vue";
import JobFilterSidebarCheckboxGroup from "./JobFilterSidebarCheckboxGroup.vue";
import { useUserStore } from "../../../stores/user";
import { useDegreeStore } from "@/stores/degrees";
import { useJobsStore } from "../../../stores/jobs";

const jobsStore = useJobsStore();
const degreeStore = useDegreeStore();
const UNIQUE_ORGANIZATIONS = computed(() => jobsStore.UNIQUE_ORGANIZATIONS);
const UNIQUE_JOB_TYPES = computed(() => jobsStore.UNIQUE_JOB_TYPES);
const UNIQ_DEGREES = computed(() => degreeStore.UNIQ_DEGREES);
const userStore = useUserStore();
</script>
