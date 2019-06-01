import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {
  Button,
  Layout,
  Icon,
  Menu,
  Switch,
  Table,
  Popconfirm,
  Input,
  Tooltip,
  Drawer,
  Row,
  Col,
  Select,
  Form,
  DatePicker,
  Card,
  Calendar,
  Badge,
  Dropdown
} from "ant-design-vue";

Vue.config.productionTip = false;

Vue.use(Button);
Vue.use(Layout);
Vue.use(Icon);
Vue.use(Menu);
Vue.use(Switch);
Vue.use(Table);
Vue.use(Popconfirm);
Vue.use(Input);
Vue.use(Tooltip);
Vue.use(Drawer);
Vue.use(Row);
Vue.use(Col);
Vue.use(Select);
Vue.use(Form);
Vue.use(DatePicker);
Vue.use(Card);
Vue.use(Calendar);
Vue.use(Badge);
Vue.use(Dropdown);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
