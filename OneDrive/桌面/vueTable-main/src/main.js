import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import "@fortawesome/fontawesome-free/css/all.css";

const axiosInstance = axios.create({
    headers: { "Content-Type": "application/json" },
});

const app = createApp(App);
app.use(store).use(router);
app.config.globalProperties.$axios = { ...axiosInstance };
app.mount("#app");