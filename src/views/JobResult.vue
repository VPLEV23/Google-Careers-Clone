<template>
  <h1 class="text-6xl font-bold">Job Res Page</h1>
  <button @:click="goToHome">Go to Home Page</button>
</template>

<script>
export default {
  name: "JobResultView",
  methods: {
    goToHome() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>
