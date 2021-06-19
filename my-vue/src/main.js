import Vue from "vue";
import App from "./App.vue";
import ViewUI from "view-design";
import "view-design/dist/styles/iview.css";

Vue.config.productionTip = false;
Vue.use(ViewUI);

console.log("鸡精");

new Vue({
  render: (h) => h(App),
}).$mount("#app");
