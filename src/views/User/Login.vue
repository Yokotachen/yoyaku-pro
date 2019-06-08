<template>
  <div>
    <a-row class="row">
      <a-col :xs="1" :sm="3" :md="5" :lg="7" :xl="9" />
      <a-col :xs="22" :sm="18" :md="14" :lg="10" :xl="6">
        <div style="height: 44px;line-height: 44px;">
          <span class="logoname">Yoyakukun Pro</span>
        </div>
        <div class="logonamedsc">预约君进化版</div>
        <a-form :form="form" @submit="handleSubmit">
          <a-form-item>
            <a-input
              size="large"
              addonAfter="@nec.cn"
              placeholder="用户名:请输入邮箱前缀"
              v-decorator="[
                'emailheader',
                { rules: [{ required: true, message: '用户名不能为空' }] }
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
              <a-icon slot="prefix" type="lock" />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-button
              type="primary"
              html-type="submit"
              style="width:100%;height:40px"
              >登陆</a-button
            >
            <a href="/user/register" style="float:right">注册账户</a>
          </a-form-item>
        </a-form>
      </a-col>
      <a-col :xs="1" :sm="3" :md="5" :lg="7" :xl="9" />
    </a-row>
  </div>
</template>

<script>
import md5 from "js-md5";
import request from "../../utils/request";
import { message } from "ant-design-vue";

export default {
  data() {
    this.form = this.$form.createForm(this);
    return {
      formLayout: "horizontal"
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          request({
            url: "api/loginchk/",
            method: "post",
            data: {
              user_name: values.emailheader,
              password: md5(values.passwd)
            }
          }).then(response => {
            if (response.data.status != 0) {
              message.error(response.data.Message, 5);
            } else {
              this.$router.push({ path: "/" });
            }
          });
        }
      });
    }
  }
};
</script>

<style scoped>
.row {
  margin-top: 120px;
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
</style>
