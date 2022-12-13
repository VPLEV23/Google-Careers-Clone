import { createRouter, createWebHashHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import JobResult from "@/views/JobResult.vue";
import JobView from "@/views/JobView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/jobs/result",
    name: "JobResult",
    component: JobResult,
  },
  {
    path: "/jobs/result/:id",
    name: "JobListing",
    component: JobView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
