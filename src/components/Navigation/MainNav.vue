<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed top-0 left-0 h-16 w-full bg-white">
      <div
        class="mx-auto flex h-full flex-nowrap border-b border-solid border-brand-gray-1 px-8"
      >
        <router-link
          :to="{ name: 'Home' }"
          class="flex h-full items-center text-xl"
          >Bulka Careers
        </router-link>
        <nav class="ml-12 h-full">
          <ul class="li flex h-full list-none">
            <li
              v-for="item in menuItems"
              :key="item.text"
              class="ml-9 h-full first:ml-0"
            >
              <router-link
                :to="item.url"
                class="flex h-full items-center py-2.5"
                >{{ item.text }}</router-link
              >
            </li>
          </ul>
        </nav>
        <div class="ml-auto flex h-full items-center">
          <ProfileImage v-if="isLoggedIn" />
          <ActionButton v-else text="Sign In" @click="loginUser" />
        </div>
      </div>
      <sub-nav v-if="isLoggedIn" />
    </div>
  </header>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { useUserStore } from "../../../src/stores/user";
import ActionButton from "../Shared/ActionButton.vue";
import ProfileImage from "./ProfileImage.vue";
import SubNav from "./SubNav.vue";

const menuItems = ref([
  { text: "Teams", url: "/teams" },
  { text: "Location", url: "/" },
  { text: "Life at Bulka Corp", url: "/" },
  { text: "How we hire", url: "/" },
  { text: "Students", url: "/" },
  { text: "Jobs", url: "/jobs/result" },
]);
const userStore = useUserStore();
const loginUser = userStore.loginUser;
const isLoggedIn = computed(() => userStore.isLoggedIn);

const headerHeightClass = computed(() => {
  return {
    "h-16": !isLoggedIn.value,
    "h-32": isLoggedIn.value,
  };
});
</script>
