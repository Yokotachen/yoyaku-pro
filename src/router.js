import Vue from "vue";
import Router from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import NotFound from "./views/404";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    //登陆注册页
    {
      path: "/user",
      hideInMenu: true,
      name: "user",
      component: () =>
        import(/* webpackChunkName: "layouts" */ "./layouts/UserLayout"),
      children: [
        {
          path: "/user",
          redirect: "/user/login"
        },
        {
          path: "/user/login",
          name: "login",
          component: () =>
            import(/* webpackChunkName: "user" */ "./views/User/Login")
        },
        {
          path: "/user/register",
          name: "register",
          component: () =>
            import(/* webpackChunkName: "user" */ "./views/User/Register")
        }
      ]
    },
    // Yoyaku
    {
      path: "/",
      component: () =>
        import(/* webpackChunkName: "layouts" */ "./layouts/BasicLayout"),
      children: [
        {
          path: "/",
          redirect: "/yoyaku/yoyaku"
        },
        {
          path: "/yoyaku",
          name: "yoyakumain",
          meta: { icon: "clock-circle", title: "预约" },
          component: { render: h => h("router-view") },
          children: [
            {
              path: "/yoyaku",
              redirect: "/yoyaku/yoyaku"
            },
            {
              path: "/yoyaku/yoyaku",
              name: "yoyaku",
              meta: { icon: "schedule", title: "预约" },
              component: () =>
                import(/* webpackChunkName: "Yoyaku" */ "./views/Yoyaku/Yoyaku")
            },
            {
              path: "/yoyaku/myyoyaku",
              name: "myyoyaku",
              meta: { icon: "pie-chart", title: "我的预约" },
              component: () =>
                import(/* webpackChunkName: "Yoyaku" */ "./views/Yoyaku/MyYoyaku")
            }
          ]
        }
      ]
    },
    // 个人页
    {
      path: "/person",
      name: "person",
      meta: { icon: "user", title: "个人" },
      component: () =>
        import(/* webpackChunkName: "layouts" */ "./layouts/BasicLayout"),
      children: [
        {
          path: "/person",
          redirect: "/person/personinfo"
        },
        {
          path: "/person/personinfo",
          name: "personinfo",
          meta: { icon: "idcard", title: "个人信息" },
          component: () =>
            import(/* webpackChunkName: "Person" */ "./views/Person/PersonInfo")
        }
      ]
    },
    // 管理员
    {
      path: "/administor",
      name: "administor",
      meta: { icon: "key", title: "管理员" },
      component: () =>
        import(/* webpackChunkName: "layouts" */ "./layouts/BasicLayout"),
      children: [
        {
          path: "/administor",
          redirect: "/administor/usermanager"
        },
        {
          path: "/administor/usermanager",
          name: "usermanager",
          meta: { icon: "team", title: "用户管理" },
          component: () =>
            import(/* webpackChunkName: "Administor" */ "./views/Administor/UserManager")
        },
        {
          path: "/administor/yoyakumanager",
          name: "yoyakumanager",
          meta: { icon: "bars", title: "预约管理" },
          component: () =>
            import(/* webpackChunkName: "Administor" */ "./views/Administor/YoyakuManager")
        },
        {
          path: "/administor/machinemanager",
          name: "machinemanager",
          meta: { icon: "database", title: "设备管理" },
          component: () =>
            import(/* webpackChunkName: "Administor" */ "./views/Administor/MachineManager")
        }
      ]
    },
    {
      path: "*",
      name: "404",
      hideInMenu: true,
      component: NotFound
    }
  ]
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
