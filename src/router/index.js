import { createRouter, createWebHistory } from 'vue-router';

const Home = () => import("../views/Home" /* webpackChunkName: "home" */);
const Game = () => import("../views/Game" /* webpackChunkName: "game" */);

const routes = [
    {
        path: '/dubblock',
        name: 'Home',
        component: Home
    },
    {
        path: '/dubblock/:gameId',
        name: 'Game',
        component: Game
    }
];

const router = createRouter({
    history: createWebHistory(),
    base: "dubblock",
    routes
});

export default router
