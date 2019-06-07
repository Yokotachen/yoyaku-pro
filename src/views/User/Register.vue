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
        <a-form :form="form" @submit="handleSubmit">
          <a-form-item :validateStatus="emailHeaderDup">
            <a-input
              size="large"
              addonAfter="@nec.cn"
              placeholder="用户名:请输入邮箱前缀"
              v-decorator="[
                'emailheader',
                { rules: [{ validator: checkEmailheader }] }
              ]"
            >
              <a-icon slot="prefix" type="user" />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input
              size="large"
              type="password"
              placeholder="密码:19890122"
              v-decorator="[
                'passwd',
                { rules: [{ required: true, message: '密码不能为空' }] }
              ]"
            >
              <a-icon slot="prefix" type="lock" />Íß
            </a-input>
          </a-form-item>
          <a-form-item hasFeedback>
            <a-input
              size="large"
              type="password"
              placeholder="确认密码:19890122"
              v-decorator="[
                'comfirmpasswd',
                { rules: [{ validator: checksamepwd }] }
              ]"
            >
              <a-icon slot="prefix" type="lock" />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input
              size="large"
              type="tel"
              placeholder="电话:8219352"
              v-decorator="[
                'tel',
                { rules: [{ required: true, message: '密码不能为空' }] }
              ]"
            >
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
import debounce from "lodash/debounce";
export default {
  data() {
    this.form = this.$form.createForm(this);
    return {
      formLayout: "horizontal",
      emailHeaderDup: "",
      comfirmpwd: ""
    };
  },
  created() {
    this.checkEmailheader = debounce(this.checkEmailheader, 2000);
    this.checksamepwd = debounce(this.checksamepwd, 500);
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    },
    checkEmailheader(rule, value, callback) {
      if (value) {
        if (value === "admin") {
          this.emailHeaderDup = "success";
          callback("有效的用户名");
        } else {
          this.emailHeaderDup = "error";
          callback("用户名已存在");
        }
      } else {
        this.emailHeaderDup = "error";
        callback("用户名不能为空");
      }
    },
    checksamepwd(rule, value, callback) {
      const form = this.form;
      if (value && value !== form.getFieldValue("passwd")) {
        this.comfirmpwd = "error";
        callback("密码不一致");
      } else {
        this.comfirmpwd = "success";
        callback();
      }
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
