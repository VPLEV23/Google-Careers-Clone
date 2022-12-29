import { defineStore } from "pinia";

import getJobs from "@/api/getJobs";
import type { Job } from "@/api/types";

import { useUserStore } from "@/stores/user";

export const FETCH_JOBS = "FETCH_JOBS";
export const UNIQUE_ORGANIZATIONS = "UNIQUE_ORGANIZATIONS";
export const UNIQUE_JOB_TYPES = "UNIQUE_JOB_TYPES";
export const FILTER_JOBS = "FILTER_JOBS";

export const INCLUDE_JOB_BY_ORG = "INCLUDE_JOB_BY_ORG";
export const INCLUDE_JOB_TYPE = "INCLUDE_JOB_TYPE";

export const INCLUDE_JOB_BY_DEGREE = "INCLUDE_JOB_BY_DEGREE";

export interface JobsState {
  jobs: Job[];
}

export const useJobsStore = defineStore("jobs", {
  state: (): JobsState => ({
    jobs: [],
  }),
  actions: {
    async [FETCH_JOBS]() {
      const jobs = await getJobs();
      this.jobs = jobs;
    },
  },
  getters: {
    [UNIQUE_ORGANIZATIONS](state) {
      const uniqueOrganizations = new Set<string>();
      state.jobs.forEach((job) => uniqueOrganizations.add(job.organization));
      return uniqueOrganizations;
    },

    [UNIQUE_JOB_TYPES](state) {
      const uniqJobTypes = new Set<string>();
      state.jobs.forEach((job) => uniqJobTypes.add(job.jobType));
      return uniqJobTypes;
    },
    [INCLUDE_JOB_BY_ORG]: () => (job: Job) => {
      const userStore = useUserStore();
      if (userStore.selectedOrg.length === 0) return true;
      return userStore.selectedOrg.includes(job.organization);
    },
    [INCLUDE_JOB_TYPE]: () => (job: Job) => {
      const userStore = useUserStore();
      if (userStore.selectedjobTypes.length === 0) return true;
      return userStore.selectedjobTypes.includes(job.jobType);
    },
    [INCLUDE_JOB_BY_DEGREE]: () => (job: Job) => {
      const userStore = useUserStore();
      if (userStore.selectedDegrees.length === 0) return true;
      return userStore.selectedDegrees.includes(job.degree);
    },
    [FILTER_JOBS](state): Job[] {
      return state.jobs
        .filter((job) => this.INCLUDE_JOB_BY_ORG(job))
        .filter((job) => this.INCLUDE_JOB_TYPE(job))
        .filter((job) => this.INCLUDE_JOB_BY_DEGREE(job));
    },
  },
});
