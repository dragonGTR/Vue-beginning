import {createRouter,createWebHistory} from 'vue-router'
import dcHero from './components/HerosList'
import calender from './components/Calender'
import Home from './components/Home'

//copied from Document

const routes = [
    { path: '/', component: Home },
    { path: '/dcHeros', component: dcHero },
    { path: '/calender', component: calender },
  ]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
  })




export default router;