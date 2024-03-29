import
{
    createRouter,
    createWebHistory
}
from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
{
    path: '/',
    name: 'home',
    component: HomeView
},
{
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
},
{
    path: '/google',
    name: 'google',
    component: () => import('../views/GoogleView.vue')
},
{
    path: '/youtube',
    name: 'youtube',
    component: () => import('../views/YoutubeView.vue')
},
{
    path: '/pokedex/:name?',
    pathMatch: 'prefix',
    component: () => import('../views/Pokedex.vue')
},
{
    path: '/:catchAll(.*)',
    meta:
    {
        title: 'Not Found'
    },
    component: () => import('../views/NotFound.vue')
}]

const router = createRouter(
{
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router