<template>
  <div
    class="flex w-96 flex-col border-r border-solid border-brand-gray-1 bg-white p-4"
  >
    <section class="pb-5">
      <JobFiltersPromt />
      <JobFilterSkill />
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
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { useUserStore } from "@/stores/user";

import CollapsibleAccordion from "@/components/Shared/CollapsibleAccordion.vue";
import JobFilterDegrees from "./JobFilterDegrees.vue";
import JobFilterJobTypes from "./JobFilterJobTypes.vue";
import JobFilterOrg from "./JobFilterOrg.vue";
import JobFiltersPromt from "./JobFiltersPromt.vue";
import JobFilterSkill from "./JobFilterSkills.vue";

const route = useRoute();
const userStore = useUserStore();

const parseSkills = () => {
  const role = route.query.role || "";
  userStore.UPADATE_SKILL_SEARCH(role);
};
onMounted(parseSkills);
</script>
