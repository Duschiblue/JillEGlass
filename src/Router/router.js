// Imports
import { createRouter, createWebHistory } from "vue-router"
import Shop from "../components/Shop.vue"
import About from "../components/About.vue"
import Gallery from "../components/Gallery.vue"
import Contact from "../components/Contact.vue"

// Routes
const router = new createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/", component: Shop},
        {path: "/shop", component: Shop},
        {path: "/about", component: About},
        {path: "/gallery", component: Gallery},
        {path: "/contact", component: Contact},
    ]
})

export default router