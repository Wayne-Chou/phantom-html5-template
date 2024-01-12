import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: "/",
        // 定義一開始的位置
        redirect: "/tableView",
    },
    {
        path: "/tableView",
        name: "tableView",
        component: () => import("@/views/tableView.vue"),
    }

];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;