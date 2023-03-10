// Imports
import { createRouter, createWebHistory } from "vue-router"
import Shop from "../components/Shop.vue"
import About from "../components/About.vue"

// Routes
const router = new createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/shop", component: Shop,
            path: "/about", component: About
        }
    ]
})

export default router