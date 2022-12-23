<template>
  <CollapsibleAccordionVue header="Organization">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li class="h-8 w-1/2">
            <input id="VueTube" type="checkbox" class="mr-3" />
            <label for="VueTube">VueTube</label>
          </li>
          <li class="h-8 w-1/2">
            <input id="Between Vue and Me" type="checkbox" class="mr-3" />
            <label for="BetweenVue and Me">Between Vue</label>
          </li>
          <li class="h-8 w-1/2">
            <input id="Et Vue Brute" type="checkbox" class="mr-3" />
            <label for="Et Vue Brut">Et Vue Brut</label>
          </li>
          <li class="h-8 w-1/2">
            <input id="Vue and half man" type="checkbox" class="mr-3" />
            <label for="Vue and half man">Vue and half man</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </CollapsibleAccordionVue>
</template>

<script>
import CollapsibleAccordionVue from "../../Shared/CollapsibleAccordion.vue";
export default {
  name: "JobFilterSidebarOrganization",
  components: {
    CollapsibleAccordionVue,
  },
};
</script>
