import { defineStore } from "pinia";

export const ADD_SELECTED_ORGANIZATION = "ADD_SELECTED_ORGANIZATION";
export const ADD_SELECTED_JOB_TYPES = "ADD_SELECTED_JOB_TYPES";

export interface UserStae {
  isLoggedIn: boolean;
  selectedOrg: string[];
  selectedjobTypes: string[];
}

export const useUserStore = defineStore("user", {
  state: (): UserStae => ({
    isLoggedIn: false,
    selectedOrg: [],
    selectedjobTypes: [],
  }),
  actions: {
    loginUser() {
      this.isLoggedIn = true;
    },
    [ADD_SELECTED_ORGANIZATION](organizations: string[]) {
      this.selectedOrg = organizations;
    },

    [ADD_SELECTED_JOB_TYPES](jobTypes: string[]) {
      this.selectedjobTypes = jobTypes;
    },
  },
});
