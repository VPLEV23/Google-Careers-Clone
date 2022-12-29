<template>
  <div class="flex flex-row justify-between">
    <h3 class="my-4 text-base font-semibold">What do You want to do</h3>
    <div class="flex items-center text-sm">
      <ActionButtonVue
        text="Clear Filters"
        type="secondary"
        @click="userStore.CLEAR_FILTERS"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import ActionButtonVue from "../../Shared/ActionButton.vue";
import { useUserStore } from "../../../stores/user";

const userStore = useUserStore();
</script>
