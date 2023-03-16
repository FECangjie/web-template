import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import "@/styles/normalize.css";
import "@/styles/theme.scss";

createApp(App).use(store).use(router).use(ElementPlus).mount("#app");
