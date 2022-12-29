import { defineStore } from "pinia";
import { ref } from "vue";

export const ADD_SELECTED_ORGANIZATION = "ADD_SELECTED_ORGANIZATION";
export const ADD_SELECTED_JOB_TYPES = "ADD_SELECTED_JOB_TYPES";
export const ADD_SELECTED_DEGEES = "ADD_SELECTED_DEGEES";
export const CLEAR_FILTERS = "CLEAR_FILTERS";
// export const UPADATE_SKILL_SEARCH = "UPADATE_SKILL_SEARCH";

export const useUserStore = defineStore("user", () => {
  const isLoggedIn = ref(false);
  const selectedOrg = ref<string[]>([]);
  const selectedjobTypes = ref<string[]>([]);
  const selectedDegrees = ref<string[]>([]);
  const skillSearch = ref<string>("");

  const LOGIN_USER = () => {
    isLoggedIn.value = true;
  };
  const ADD_SELECTED_ORGANIZATION = (orgs: string[]) => {
    selectedOrg.value = orgs;
  };
  const ADD_SELECTED_JOB_TYPES = (jobs: string[]) => {
    selectedjobTypes.value = jobs;
  };
  const ADD_SELECTED_DEGEES = (degree: string[]) => {
    selectedDegrees.value = degree;
  };
  const CLEAR_FILTERS = () => {
    selectedOrg.value = [];
    selectedjobTypes.value = [];
    selectedDegrees.value = [];
    skillSearch.value = "";
  };
  const UPADATE_SKILL_SEARCH = (term: string) => {
    skillSearch.value = term;
  };

  return {
    isLoggedIn,
    selectedOrg,
    selectedjobTypes,
    selectedDegrees,
    LOGIN_USER,
    ADD_SELECTED_ORGANIZATION,
    ADD_SELECTED_JOB_TYPES,
    ADD_SELECTED_DEGEES,
    CLEAR_FILTERS,
    skillSearch,
    UPADATE_SKILL_SEARCH,
  };
});
