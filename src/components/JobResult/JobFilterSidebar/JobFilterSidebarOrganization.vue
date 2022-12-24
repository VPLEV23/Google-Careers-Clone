<template>
  <CollapsibleAccordionVue header="Organization">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li v-for="org in UNIQUE_ORGANIZATIONS" :key="org" class="h-8 w-1/2">
            <input
              :id="org"
              v-model="selectedOrg"
              :value="org"
              type="checkbox"
              class="mr-3"
              @change="selectOrg"
            />
            <label :for="org">{{ org }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </CollapsibleAccordionVue>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useJobsStore, UNIQUE_ORGANIZATIONS } from "../../../stores/jobs";
import { useUserStore, ADD_SELECTED_ORGANIZATION } from "../../../stores/user";
import CollapsibleAccordionVue from "../../Shared/CollapsibleAccordion.vue";
export default {
  name: "JobFilterSidebarOrganization",
  components: {
    CollapsibleAccordionVue,
  },
  data() {
    return {
      selectedOrg: [],
    };
  },
  computed: {
    ...mapState(useJobsStore, [UNIQUE_ORGANIZATIONS]),
  },
  methods: {
    ...mapActions(useUserStore, [ADD_SELECTED_ORGANIZATION]),
    selectOrg() {
      this.ADD_SELECTED_ORGANIZATION(this.selectedOrg);
    },
  },
};
</script>
