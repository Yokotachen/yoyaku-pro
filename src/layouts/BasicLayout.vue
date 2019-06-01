<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider
      collapsible
      v-model="collapsed"
      :trigger="null"
      width="256px"
      :theme="proTheme"
    >
      <div class="logo">
        <a href="/">
          <span>
            <img class="logoimg" src="../assets/logo.png" alt="logo" />
          </span>
          <span>
            <h1 class="logoname" style="color:#ae8e62">Yoyakukun Pro</h1>
          </span>
          <!-- <h1 class="logoname">Yoyakukun Pro</h1> -->
        </a>
      </div>
      <SiderMenu :inlineCollapsed="collapsed" :theme="proTheme"></SiderMenu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="collapsed = !collapsed"
        ></a-icon>
        <a-switch
          class="switch"
          defaultChecked
          :checked="checked"
          @change="handleSettingChange()"
          checkedChildren="Dark"
          unCheckedChildren="Light"
        />
        <Header class="header"></Header>
      </a-layout-header>
      <a-layout-content style="margin: 0 16px">
        <router-view></router-view>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        <Footer></Footer>
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import Header from "./Header";
import SiderMenu from "./SiderMenu";
import Footer from "./Footer";
// import { prototype } from "events";

export default {
  components: {
    Header,
    SiderMenu,
    Footer
  },
  data() {
    return {
      collapsed: false,
      checked: true,
      logoColor: "white"
    };
  },
  computed: {
    proTheme() {
      return this.$route.query.proTheme || "dark";
    }
  },
  methods: {
    onCollapse(collapsed, type) {
      console.log(collapsed, type);
    },
    onBreakpoint(broken) {
      console.log(broken);
    },
    handleSettingChange() {
      this.$router.push({
        query: {
          ...this.$route.query,
          ["proTheme"]: this.checked ? "light" : "dark"
        }
      });
      this.checked = !this.checked;
    }
  }
};
</script>

<style scoped>
.logo {
  height: 64px;
  line-height: 64px;
  overflow: hidden;
  text-align: center;
}

.logoimg {
  height: 35px;
}

.logoname {
  display: inline-block;
  margin-top: 8px;
  font-weight: 800;
  font-size: 20px;
  font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
  vertical-align: middle;
  color: rgb(174, 142, 98);
  margin-left: 15px;
}

.trigger {
  padding: 0 20px;
  line-height: 64px;
  font-size: 20px;
}

.header {
  float: right;
  margin-right: 19px;
}

.switch {
  float: right;
  margin-right: 15px;
  margin-top: 20px;
}
</style>
