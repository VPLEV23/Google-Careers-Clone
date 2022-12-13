import { createRouter, createWebHashHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import JobResult from "@/views/JobResult.vue";

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
];

const router = createRouter({
  history: createWebHashHistory (),
  routes,
});

export default router;
