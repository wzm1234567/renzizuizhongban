import Vue from "vue"
import VueRouter from "vue-router"
import HomeView from "../views/HomeView.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/login", // 重定向:重新指向其它path,会改变网址
    component: HomeView
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login/loginName.vue")
  }
]

const router = new VueRouter({
  routes
})

export default router
