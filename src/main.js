import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import { Button, Form, FormItem, Input, MessageBox, Message } from "element-ui"

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.config.productionTip = false
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$notify = Notification
Vue.prototype.$message = Message
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app")
