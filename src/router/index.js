import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CharactersTable from '../views/Characters/CharactersTable.vue'
import FeaturesCharacter from '../views/Characters/FeaturesCharacter.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    /* children: [
      {
        path: '/CharactersTable',
        name:'CharactersTable',
        component: CharactersTable,
      },
      {
        path: '/CharactersTable/:id',
        name:'FeaturesCharacter',
        component: FeaturesCharacter,
      },
    ] */
  },
  {
    path: '/CharactersTable',
    name:'CharactersTable',
    component: CharactersTable,
  },
  {
    path: '/CharactersTable/:id',
    name:'FeaturesCharacter',
    component: FeaturesCharacter,
    props:true
  }
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
