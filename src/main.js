import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Swipe, SwipeItem,Tab, Tabs,Sticky,Popup,Lazyload,Loading,List,Form ,Field,Button, ShareSheet  } from 'vant';
Vue.use(Swipe)
.use(SwipeItem).
use(Tab).
use(Tabs).
use(Sticky).
use(Popup).
use(Lazyload).
use(Loading).
use(List).
use(Form).
use(Field).
use(Button).
use(ShareSheet);
Vue.use(Lazyload, {
  lazyComponent: true,
});
// 
Vue.config.productionTip = false
import "./assets/font/iconfont.css"
//swiper插件
import "swiper/dist/css/swiper.min.css"
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
