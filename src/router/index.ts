import MySelf from "../views/MySelf.vue";
import Leaderboard from "../views/Leaderboard.vue";
import Speedrun from "../views/Speedrun.vue";
import TAS from "../views/TAS.vue";
import {createRouter, createWebHistory} from "vue-router";
const routes = [
    { path: '/myself', component: MySelf },
    { path: '/ld', component: Leaderboard },
    { path: '/sr', component: Speedrun },
    { path: '/tas', component: TAS },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})