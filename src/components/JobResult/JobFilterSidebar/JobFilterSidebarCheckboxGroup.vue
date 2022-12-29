<template>
  <CollapsibleAccordionVue :header="header">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li v-for="value in uniqValue" :key="value" class="h-8 w-1/2">
            <input
              :id="value"
              v-model="selectedValues"
              :value="value"
              type="checkbox"
              class="mr-3"
              @change="selectValue"
            />
            <label :for="value">{{ value }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </CollapsibleAccordionVue>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

import CollapsibleAccordionVue from "../../Shared/CollapsibleAccordion.vue";

const props = defineProps({
  header: {
    type: String,
    required: true,
  },
  uniqValue: {
    type: [Set<string>, Array<string>],
    required: true,
  },
  action: {
    type: Function,
    required: true,
  },
});
const router = useRouter();
const selectedValues = ref<string[]>([]);

const selectValue = () => {
  props.action(selectedValues.value);
  router.push({ name: "JobResult" });
};
</script>
