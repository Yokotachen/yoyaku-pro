<template>
  <div id="components-layout-demo-basic">
    <a-layout style="height:100vh">
      <a-layout-header>
        <a-dropdown style="font-size:large">
          <a-icon type="global" />
          <a-menu slot="overlay">
            <a-menu-item key="zhCN">简体中文</a-menu-item>
            <a-menu-item key="enUS">日本語</a-menu-item>
          </a-menu>
        </a-dropdown>
      </a-layout-header>
      <a-layout-content>
        <router-view></router-view>
      </a-layout-content>
      <a-layout-footer>
        <Footer></Footer>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
import Footer from "./Footer";
export default {
  components: {
    Footer
  }
};
</script>

<style scoped>
#components-layout-demo-basic {
  text-align: center;
}
#components-layout-demo-basic .ant-layout-header {
  background: #f0f2f5;
}
#components-layout-demo-basic .ant-layout-footer {
  color: #fff;
}
#components-layout-demo-basic .ant-layout-footer {
  line-height: 1.5;
}
#components-layout-demo-basic .ant-layout-content {
  color: #fff;
  min-height: 120px;
  line-height: 120px;
}
#components-layout-demo-basic > .ant-layout {
  margin-bottom: 48px;
}
#components-layout-demo-basic > .ant-layout:last-child {
  margin: 0;
}
</style>
