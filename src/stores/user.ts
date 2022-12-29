import { defineStore } from "pinia";

export const ADD_SELECTED_ORGANIZATION = "ADD_SELECTED_ORGANIZATION";
export const ADD_SELECTED_JOB_TYPES = "ADD_SELECTED_JOB_TYPES";
export const ADD_SELECTED_DEGEES = "ADD_SELECTED_DEGEES";

export interface UserStae {
  isLoggedIn: boolean;
  selectedOrg: string[];
  selectedjobTypes: string[];
  selectedDegrees: string[];
}

export const useUserStore = defineStore("user", {
  state: (): UserStae => ({
    isLoggedIn: false,
    selectedOrg: [],
    selectedjobTypes: [],
    selectedDegrees: [],
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
    [ADD_SELECTED_DEGEES](degrees: string[]) {
      this.selectedDegrees = degrees;
    },
  },
});
