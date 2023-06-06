import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cachePath:[""],
    bookShelfList:[],
    bookLookLists:[],
    downloadLists:[],
    historyList:[],
    login:false,
    vip:false,
    gift:false,
    guan:false
  },
  getters:{
    
  },
  mutations: {
   newCachePath(state,msg){
     state.cachePath = msg;
   },
   bookShelfFun(state,msg){
     state.bookShelfList.push(msg) 
     console.log(msg);
     console.log(state.bookShelfList);
   },
   bookLookFun(state,msg){
     state.bookLookLists.push(msg)
     console.log(msg);
   },
   downloadFun(state,msg){
     state.downloadLists.push(msg)
     console.log(msg);
   },
   historyFun(state,msg){
     state.historyList.push(msg)
     console.log(msg);
   },
   loginFun(state,msg){
     state.login = msg
   },
   vipFun(state,msg){
     state.vip = msg
   },
   giftFun(state,msg){
     state.gift = msg
   },
   guanFun(state,msg){
     state.guan = msg
   },
   //删除
   delFun(state,msg){
    state.bookShelfList.splice(msg,1) 
   }
  },
  actions: {
  },
  modules: {

  },
  plugins: [
		createPersistedState({
      // 存储方式：localStorage、sessionStorage、cookies
			storage: window.sessionStorage,
      // 存储的 key 的key值
			key: "store",
			render(state) {
        // 要存储的数据：本项目采用es6扩展运算符的方式存储了state中所有的数据
				return { ...state };
			}
		})
	]
})
