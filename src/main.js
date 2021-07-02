import Vue from 'vue'
// 相对路径引入的App.vue文件
import App from './App.vue'
// 引入store文件
import store from './store/store.js'
import elementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入iview
import iviewUi from 'view-design'
import 'view-design/dist/styles/iview.css'
// 引入国际化
import i18n from './lang/index.js'
// 引入路由router
import router from './router/index.js'
// 注册全局的grid
import { Grid, GridItem } from './components/Grid/index.js'
import axios from 'axios'

// 过滤时间
import moment from 'moment/moment'
Vue.filter('moment', function (value, formatString) {
    // formatString = formatString || 'YYYY-MM-DD HH:mm:ss';
    formatString = formatString || 'YYYY-MM-DD';
    return moment(value).format(formatString); // value可以是普通日期 20170723
    //return moment.unix(value).format(formatString); // 这是时间戳转时间
});

Vue.use(axios)
Vue.prototype.$http = axios

Vue.use(Grid)
Vue.use(GridItem)
// console.log(i18n)
Vue.use(iviewUi)


Vue.use(elementUi)
new Vue({
    // 渲染节点
    render: h => h(App),
    i18n,
    // 挂载store文件
    store,
    // 挂载路由
    router,
    axios
}).$mount('#app')