import { createApp, render } from "vue";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// Vue.createVNode()
debugger;
createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
