import MySelf from "../views/MySelf.vue";
import Leaderboard from "../views/Leaderboard.vue";
import Speedrun from "../views/Speedrun.vue";
import TAS from "../views/TAS.vue";
import Home from "../views/Home.vue";
const routes = [
    { path: '/', component: Home },
    { path: '/myself', component: MySelf },
    { path: '/ld', component: Leaderboard },
    { path: '/sr', component: Speedrun },
    { path: '/tas', component: TAS },
    { path: './path(.*)', component: Home },
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
})