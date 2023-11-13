// Composables
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/components/BuscadorPeliculas.vue'),
  },
  {
    path: '/pedidos',
    component: () => import('@/components/GestionPedidos.vue'),
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
})

export default router
