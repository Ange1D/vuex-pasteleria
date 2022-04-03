import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/Pasteleria.vue'
import Pedido from '../views/Formulario.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/pastelero',
    name: 'pastelero',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Pastelero.vue')
  },
  {
    path: '/pedido',
    name: 'pedido',
    component: Pedido
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
