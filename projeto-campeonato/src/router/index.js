import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'
import ListaClubes from '../views/ListaClubes.vue'
import ListaJogos from '../views/ListaJogos.vue'
import ListaHistorico from '../views/ListaHistorico.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },

  {
    path: '/clas',
    name: 'ListaClubes',
    component: ListaClubes
  },

  {
    path: '/jogos',
    name: 'ListaJogos',
    component: ListaJogos
  },

  {
    path: '/historico',
    name: 'ListaHistorico',
    component: ListaHistorico
  }
]

const router = new VueRouter({
  routes
})

export default router
