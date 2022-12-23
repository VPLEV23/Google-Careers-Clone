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
      <CollapsibleAccordionVue header="Job Types"> </CollapsibleAccordionVue>

      <JobFilterSidebarOrganization />
    </section>
  </div>
</template>
Vue
<script>
import ActionButtonVue from "../../Shared/ActionButton.vue";
import JobFilterSidebarOrganization from "./JobFilterSidebarOrganization.vue";
import CollapsibleAccordionVue from "../../Shared/CollapsibleAccordion.vue";
export default {
  name: "JobSideBar",
  components: {
    ActionButtonVue,
    CollapsibleAccordionVue,
    JobFilterSidebarOrganization,
  },
};
</script>
