import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/homeView.vue'
import AboutView from '../views/aboutView.vue'
import CollectionView from '../views/collectionView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/about', name: 'about', component: AboutView },
    { path: '/collection', name: 'collection', component: CollectionView },
  ],
})

export default router
