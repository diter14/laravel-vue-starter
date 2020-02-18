import Vue from 'vue'
import VueRouter from 'vue-router'
import widgetsRoutes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: widgetsRoutes
    // routes: [
    //     { 
    //         path: '/widgets',
    //         children: widgetsRoutes,
    //     }
    // ]
})

export default router