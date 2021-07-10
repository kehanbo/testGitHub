import Vue from "vue";
import App from "./App.vue";
import ViewUI from "view-design";
import "view-design/dist/styles/iview.css";
import VueRouter from 'vue-router'
import router from './router/router'

Vue.config.productionTip = false;
Vue.use(ViewUI);
Vue.use(VueRouter)

console.log("侬仔精");
console.log('侬仔你')

new Vue({
  render: (h) => h(App),
  router: router.router,
}).$mount("#app");
