import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../page/home/home'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: home,
            children: [],
        }
    ]
});

export default {
    router
}