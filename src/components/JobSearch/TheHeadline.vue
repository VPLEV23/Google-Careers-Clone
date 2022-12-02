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

<script>
import nextElementInList from "@/utils/nextElementInList";

export default {
  name: "TheHeadLine",
  data() {
    return {
      action: "Build",
      interval: null,
    };
  },
  computed: {
    actionClasses() {
      return {
        [this.action.toLowerCase()]: true,
      };
    },
  },
  created() {
    this.changeTitle();
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    changeTitle() {
      this.interval = setInterval(() => {
        const actions = ["Build", "Create", "Design", "Code"];
        this.action = nextElementInList(actions, this.action);
      }, 3000);
    },
  },
};
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
