<template>
  <main-nav />
  <hero-vue />
</template>

<script>
import MainNav from "@/components/MainNav.vue";
import HeroVue from "./components/Hero.vue";

export default {
  name: "App",
  components: {
    MainNav,
    HeroVue,
  },
};
</script>
