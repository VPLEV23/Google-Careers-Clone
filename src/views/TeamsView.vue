<template>
  <HeaderContainer>
    <template v-slot:title>
      <h1 class="w-full text-4xl font-normal">Teams</h1>
    </template>
    <template v-slot:subtitle>
      <h2 class="my-4 w-full text-base">
        It's awesome working here. Why don't you come join us?
      </h2>
    </template>
  </HeaderContainer>
</template>

<script>
import HeaderContainer from "../components/Shared/HeaderContainer.vue";
export default {
  name: "TeamsView",
  components: {
    HeaderContainer,
  },
};
</script>
