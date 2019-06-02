<template>
  <div>
    <a-row class="row">
      <a-col :xs="1" :sm="3" :md="5" :lg="7" :xl="9" />
      <a-col :xs="22" :sm="18" :md="14" :lg="10" :xl="6">
        <div style="height: 44px;line-height: 44px;">
          <span class="logoname">Yoyakukun Pro</span>
        </div>
        <div class="logonamedsc">预约君进化版</div>
        <span class="register">注册</span>
        <a-form>
          <a-form-item>
            <a-input
              size="large"
              addonAfter="@nec.cn"
              placeholder="用户名:请输入邮箱前缀"
              @change="inputUsername"
            >
              <a-icon slot="prefix" type="user" />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input size="large" type="password" placeholder="密码:19890122">
              <a-icon slot="prefix" type="lock" />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input
              size="large"
              type="password"
              placeholder="确认密码:19890122"
            >
              <a-icon slot="prefix" type="lock" />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input size="large" type="tel" placeholder="电话:8219352">
              <a-icon slot="prefix" type="phone" />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-button
              type="primary"
              html-type="submit"
              style="width:50%;height:40px;float:left"
              >注册</a-button
            >
            <a href="/user/login" style="float:right">使用已有账户登录</a>
          </a-form-item>
        </a-form>
      </a-col>
      <a-col :xs="1" :sm="3" :md="5" :lg="7" :xl="9" />
    </a-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputUserName: "",
      inputPWD: "",
      inputComfirmPWD: ""
    };
  },
  methods: {
    inputUsername(e) {
      this.username = e.target.value;
    }
  }
};
</script>

<style scoped>
.row {
  margin-top: 100px;
}

.logoname {
  position: relative;
  top: 2px;
  color: #ae8e62;
  font-weight: 600;
  font-size: 33px;
  font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
}

.logonamedsc {
  margin-top: 12px;
  margin-bottom: 40px;
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
  height: 20;
  line-height: 20px;
}

.register {
  margin-bottom: 30px;
  color: black;
  font-size: 20px;
  height: 20;
  line-height: 20px;
  float: left;
}
</style>
