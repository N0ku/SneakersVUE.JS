import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Categorie from '../components/Categorie.vue'
import Marque from '../components/Marque.vue'
import NotFound from '../components/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Category',
    name: 'Categorie',
    component: Categorie
  },
  {
    path: '/marques/:name',
    name: 'marque',
    component: Marque,
    props: (route) => ({
      foo: route.query.foo
    })
  },
  {
    path: '/:catchAll(.*)',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
