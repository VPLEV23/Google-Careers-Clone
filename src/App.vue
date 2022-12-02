<template>
  <main-nav />
  <hero-vue />
</template>

<script>
import MainNav from "@/components/Navigation/MainNav.vue";
import HeroVue from "./components/JobSearch/Hero.vue";

export default {
  name: "App",
  components: {
    MainNav,
    HeroVue,
  },
};
</script>
