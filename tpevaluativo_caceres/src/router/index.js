import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    
    path: '/cargaproductos',
    name: 'CatalogoAdmin',
    component : () => import('../views/CatalogoAdmin.vue')
    
  },
  {
    
    path: '/catalogo',
    name: 'CatalogoPublic',
    component : () => import('../views/CatalogoPublic.vue')
    
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
