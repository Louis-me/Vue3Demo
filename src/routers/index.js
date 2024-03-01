import { createRouter, createWebHistory } from "vue-router"

// createRouter方法用于创建路由实例对象
// createWebHashHistory方法用于指定路由的工作模式（hash模式
import routes from "./routers"
var router=createRouter({
    history:createWebHistory(),
    routes
})
export default router