<template>
  <section class="mb-16">
    <h1 class="ta mb-14 text-9xl font-bold tracking-tighter">
      <span :class="actionClasses">{{ action }}</span
      ><br />
      for Evryone
    </h1>
    <h2 class="text-3xl font-light">Find Your job at Bulka Caree's</h2>
  </section>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import nextElementInList from "@/utils/nextElementInList";

const action = ref("Build");
const interval = ref<ReturnType<typeof setInterval>>();
const actionClasses = computed(() => {
  return {
    [action.value.toLowerCase()]: true,
  };
});

const changeTitle = () => {
  interval.value = setInterval(() => {
    const actions = ["Build", "Create", "Design", "Code"];
    action.value = nextElementInList(actions, action.value);
  }, 3000);
};
onMounted(changeTitle);
onBeforeUnmount(() => clearInterval(interval.value));

//   beforeUnmount() {
//
//   },
// };
</script>

<style scoped>
.build {
  color: #1a73e8;
}
.create {
  color: #32a853;
}
.design {
  color: #f9ab00;
}
.code {
  color: #d93025;
}
</style>
