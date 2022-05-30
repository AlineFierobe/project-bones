import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/index.css";

// IMPORT FONTAWESOME
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import titleMixin from "./utils/titleMixin";

library.add(fas, far, fab);
dom.watch();

const app = createApp(App);
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mixin(titleMixin);
app.mount("#app");
