import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from "vue-router";
import Home from '../views/Home.vue';

declare module "vue-router" {
    interface RouteMeta {
        title?: string;
    }
}

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: () => Home,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    scrollBehavior() {
        return { top: 0 };
    },
    routes
});

export default router;
