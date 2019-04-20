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
    //Dashboard
    {
      path: "/",
      component: () =>
        import(/* webpackChunkName: "layouts" */ "./layouts/BasicLayout"),
      children: [
        {
          path: "/",
          redirect: "/dashboard/todayyoyaku"
        },
        {
          path: "/dashboard",
          name: "dashboard",
          component: { render: h => h("router-view") },
          children: [
            {
              path: "/dashboard",
              redirect: "/dashboard/todayyoyaku"
            },
            {
              path: "/dashboard/todayyoyaku",
              name: "todayyoyaku",
              component: () =>
                import(/* webpackChunkName: "dashboard" */ "./views/Dashboard/TodayYoyaku")
            },
            {
              path: "/dashboard/myyoyaku",
              name: "myyoyaku",
              component: () =>
                import(/* webpackChunkName: "dashboard" */ "./views/Dashboard/MyYoyaku")
            },
            {
              path: "/dashboard/yoyaku",
              name: "yoyaku",
              component: () =>
                import(/* webpackChunkName: "dashboard" */ "./views/Dashboard/Yoyaku")
            }
          ]
        }
      ]
    },
    //个人页
    {
      path: "/person",
      name: "person",
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
          component: () =>
            import(/* webpackChunkName: "Person" */ "./views/Person/PersonInfo")
        }
      ]
    },
    //管理员
    {
      path: "/administor",
      name: "administor",
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
          component: () =>
            import(/* webpackChunkName: "Person" */ "./views/Administor/UserManager")
        },
        {
          path: "/administor/yoyakumanager",
          name: "yoyakumanager",
          component: () =>
            import(/* webpackChunkName: "Person" */ "./views/Administor/YoyakuManager")
        },
        {
          path: "/administor/machinemanager",
          name: "machinemanager",
          component: () =>
            import(/* webpackChunkName: "Person" */ "./views/Administor/MachineManager")
        }
      ]
    },
    {
      path: "*",
      name: "404",
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
