<template>
  <CollapsibleAccordionVue header="Job Types">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li v-for="job in UNIQUE_JOB_TYPES" :key="job" class="h-8 w-1/2">
            <input
              :id="job"
              v-model="selectedjobTypes"
              :value="job"
              type="checkbox"
              class="mr-3"
              @change="selectedTypes"
            />
            <label :for="org">{{ job }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </CollapsibleAccordionVue>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useJobsStore, UNIQUE_JOB_TYPES } from "../../../stores/jobs";
import { useUserStore, ADD_SELECTED_JOB_TYPES } from "../../../stores/user";
import CollapsibleAccordionVue from "../../Shared/CollapsibleAccordion.vue";
export default {
  name: "JobFilterSidebarOrganization",
  components: {
    CollapsibleAccordionVue,
  },
  data() {
    return {
      selectedjobTypes: [],
    };
  },
  computed: {
    ...mapState(useJobsStore, [UNIQUE_JOB_TYPES]),
  },
  methods: {
    ...mapActions(useUserStore, [ADD_SELECTED_JOB_TYPES]),
    selectedTypes() {
      this.ADD_SELECTED_JOB_TYPES(this.selectedjobTypes);
      this.$router.push({ name: "JobResult" });
    },
  },
};
</script>
