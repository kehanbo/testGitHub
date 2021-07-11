import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../page/home/home'
import slidValidation from '../page/slidValidation/slidValidation'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: home,
            children: [],
        },
        {
            path: '/slidValidation',
            name: 'slidValidation',
            component: slidValidation,
            children: [],
        }
    ]
});

export default {
    router
}