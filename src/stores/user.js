import { defineStore } from "pinia";

export const ADD_SELECTED_ORGANIZATION = "ADD_SELECTED_ORGANIZATION";
export const ADD_SELECTED_JOB_TYPES = "ADD_SELECTED_JOB_TYPES";

export const useUserStore = defineStore("user", {
  state: () => ({
    isLoggedIn: false,
    selectedOrg: [],
    selectedjobTypes: [],
  }),
  actions: {
    loginUser() {
      this.isLoggedIn = true;
    },
    [ADD_SELECTED_ORGANIZATION](organizations) {
      this.selectedOrg = organizations;
    },

    [ADD_SELECTED_JOB_TYPES](jobTypes) {
      this.selectedjobTypes = jobTypes;
    },
  },
});
