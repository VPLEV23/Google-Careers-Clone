import { createApp } from "vue";
import { createPinia } from "pinia";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faAngleUp,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import App from "./App.vue";

// import "./assets/main.css";
import "@/index.css";
import router from "@/router";
library.add(faSearch);
library.add(faAngleUp);
library.add(faAngleDown);
const pinia = createPinia();

createApp(App)
  .use(pinia)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
