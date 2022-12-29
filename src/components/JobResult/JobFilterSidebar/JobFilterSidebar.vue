<template>
  <div
    class="flex w-96 flex-col border-r border-solid border-brand-gray-1 bg-white p-4"
  >
    <section class="pb-5">
      <JobFiltersPromt />
      <CollapsibleAccordion header="Degrees">
        <JobFilterDegrees />
      </CollapsibleAccordion>
      <CollapsibleAccordion header="Job Types">
        <JobFilterJobTypes />
      </CollapsibleAccordion>

      <CollapsibleAccordion header="Organizations">
        <JobFilterOrg />
      </CollapsibleAccordion>
    </section>
  </div>
</template>
Vue
<script lang="ts" setup>
import CollapsibleAccordion from "@/components/Shared/CollapsibleAccordion.vue";
import JobFilterDegrees from "./JobFilterDegrees.vue";
import JobFilterJobTypes from "./JobFilterJobTypes.vue";
import JobFilterOrg from "./JobFilterOrg.vue";
import JobFiltersPromt from "./JobFiltersPromt.vue";
</script>
