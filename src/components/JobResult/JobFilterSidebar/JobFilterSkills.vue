<template>
  <div class="mt-2">
    <input
      v-model.lazy.trim="skillSearch"
      type="text"
      class="h-12 w-full rounded border border-solid border-brand-gray-1 p-3 text-base shadow-gray"
      placeholder="Computer Programming, Finance"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();
const skillSearch = computed({
  get() {
    return userStore.skillSearch;
  },
  set(value: string) {
    userStore.UPADATE_SKILL_SEARCH(value);
  },
});
</script>
