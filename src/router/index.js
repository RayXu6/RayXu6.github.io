
const Home = {}
const About = {}

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})