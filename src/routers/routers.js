const routes = [
    {
        name: "home",
        path: "/home",
        component: () => import("../components/views/home.vue")
    },
    {
        name: "Vue2propsparent",
        path: "/Vue2propsparent",
        component: () => import("../components/views/parent.vue")
    },
    {
        name: "Vue2slotindex",
        path: "/Vue2slotindex",
        component: () => import("../components/views/index.vue")
    },
    {
        name: "myRef",
        path: "/myRef",
        component: () => import("../components/views/MyRef.vue")
    },
    {
        name: "MyReactive",
        path: "/MyReactive",
        component: () => import("../components/views/myReactive.vue")
    },
    {
        name: "watchRef",
        path: "/watchRef",
        component: () => import("../components/views/watchRef.vue")
    },
    {
        name: "watchReactive",
        path: "/watchReactive",
        component: () => import("../components/views/watchReactive.vue")
    },
    {
        name: "toRefs",
        path: "/toRefs",
        component: () => import("../components/views/toRef(s).vue")
    },
    {
        name: "provide",
        path: "/provide",
        component: () => import("../components/views/provide.vue")
    },
    {
        name: "inject",
        path: "/inject",
        component: () => import("../components/views/inject.vue")
    }
 
]
export default routes;