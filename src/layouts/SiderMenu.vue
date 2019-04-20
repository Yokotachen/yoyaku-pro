<template>
  <a-menu
    :defaultSelectedKeys="['Dashboard']"
    :defaultOpenKeys="['Dashboard']"
    mode="inline"
    theme="dark"
  >
    <a-sub-menu key="Dashboard">
      <span slot="title">
        <a-icon type="dashboard" />
        <span>Dashboard</span>
      </span>
      <a-menu-item key="1">今日预约</a-menu-item>
      <a-menu-item key="2">我的预约</a-menu-item>
      <a-menu-item key="3">设备预约</a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="Person">
      <span slot="title">
        <a-icon type="user" />
        <span>个人页</span>
      </span>
      <a-menu-item key="4">个人设置</a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="administrator" v-if="administrator === true">
      <span slot="title">
        <a-icon type="profile" />
        <span>管理员</span>
      </span>
      <a-menu-item key="5">用户管理</a-menu-item>
      <a-menu-item key="6">预约管理</a-menu-item>
      <a-menu-item key="7">设备管理</a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>

<script>
export default {
  data() {
    return {
      administrator: true
    };
  }
};
</script>

<style></style>
