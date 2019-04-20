<template>
  <a-layout id="components-layout-demo-responsive">
    <a-layout-sider
      breakpoint="lg"
      v-model="collapsed"
      @breakpoint="onBreakpoint"
      width="256px"
    >
      <div class="logo">
        <a href="/">
          <img class="logoimg" src="../assets/logo.png" alt="logo" />
          <h1 class="logoname">Yoyakukun Pro</h1>
        </a>
      </div>
      <SiderMenu></SiderMenu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header :style="{ background: '#fff', padding: 0 }">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="collapsed = !collapsed"
        >
        </a-icon>
        <Header></Header>
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px 0' }">
        <router-view></router-view>
      </a-layout-content>
      <a-layout-footer style="textAlign: center">
        <Footer></Footer>
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import Header from "./Header";
import SiderMenu from "./SiderMenu";
import Footer from "./Footer";

export default {
  components: {
    Header,
    SiderMenu,
    Footer
  },
  data() {
    return {
      collapsed: false
    };
  },
  methods: {
    onCollapse(collapsed, type) {
      console.log(collapsed, type);
    },
    onBreakpoint(broken) {
      console.log(broken);
    }
  }
};
</script>

<style scoped>
.logo {
  height: 64px;
  line-height: 64px;
  overflow: hidden;
  padding-left: 10px;
  background: #002140;
}

.logoimg {
  height: 35px;
  padding-left: 10px;
}

.logoname {
  display: inline-block;
  margin: 0 0 0 25px;
  color: #fff;
  font-weight: 600;
  font-size: 20px;
  font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
  vertical-align: middle;
}

.trigger {
  padding: 0 20px;
  line-height: 64px;
  font-size: 20px;
}
</style>
