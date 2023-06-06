<template>
  <div id="search">
    <div class="searchInput">
      <div class="input">
        <i class="iconfont icon-sousuo1"></i>
        <input type="text"
         placeholder="不说谎恋人"
          v-model="text"
           @keydown="textIsSet"
           @blur="focusState = false"  v-focus="focusState"
            />
      </div>
      <span  @click="$router.back()">取消</span>
    </div>
    <!-- 历史记录 -->
    <div class="history" >
        <div class="historyName">历史记录</div>
        <div class="historylist"  v-for="(item,index) in historyList" :key="index">
            <span @click="name">{{item.name}}</span>
            <i class="iconfont icon-chacha" @click="del(index)"></i>
        </div>
    </div>
    <!-- 热门搜索 -->
    <div class="hotSearch">
        <div class="title">热门搜索</div>
        <div class="searchKeep"  @click="name" v-for="item in hotList" :key="item.id">{{item.name}}</div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
    text: "",
    historyList:[],
    hotList:[
        {
            name:"不说谎恋人",
            id:0
        },
        {
            name:"给我来个小和尚",
            id:1
        },
        {
            name:'猎妻物语',
            id:2
        },
        {
            name:'甜美的咬痕',
            id:3
        },
        {
            name:'色彩魔法使雪莉',
            id:4
        },
        {
            name:'羽烬',
            id:5
        }
    ],
    cartoonList:[],
     focusState: false
    };
  },

  mounted() {},

  methods: {
    //搜索
    textIsSet(e) {
      if (this.text == "") {

        if (e.keyCode == 13) {
          console.log(this.text = '不说谎恋人');
        }
      }else{
        if(e.keyCode == 13){
            // this.historyList.push({name:this.text})
            console.log(this.historyList);
            this.$store.commit("historyFun",{name:this.text});
               let index = this.cartoonList.find(item=>item.name ==this.text )
                if(index == undefined){
                    this.$router.push("searchList");
                }else{
                    this.$router.push({ name: "adetails", query: { img:index} });
                }
            this.text = "";
        }
      }
    },
    //删除
    del(index){
        this.historyList.splice(index,1)
    },
    //点击历史的
    name(e){
        this.text = e.target.innerText
        this.focusState = true  
    },
  },
  created() {
    this.$emit("hidenavson");
    console.log(this.historyList);
    this.historyList = this.$store.state.historyList;

    axios.get("./cartoon/cartoonLists.json").then((data) => {
      this.cartoonList = data.data;
      console.log(this.cartoonList);
    });
  },
  beforeDestroy() {
    this.$emit("shownavson");
  },
  directives: {
    focus: {
      //根据focusState的状态改变是否聚焦focus
      update: function (el, value) {    //第二个参数传进来的是个json
        if (value) {
          el.focus()
        }
      }
    }
  },
  beforeRouteLeave(to, from, next) {
    if (to.name === "adetails") {
      this.$store.commit("newCachePath", to.path.split("/"));
      console.log(this.$store.state.cachePath);
    }
    next();
  },
  computed: {},
};
</script>

<style lang="less">
#search {
  .searchInput {
    padding: 0 15px;
    padding-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    i {
      font-size: 30px;
    }
    .input {
      width: 75%;
      position: relative;
      display: flex;
      align-items: center;
      padding-left: 5px;
      i {
        position: absolute;
        font-size: 20px;
        padding-left: 10px;
      }
      input {
        width: 100%;
        padding: 6px 0;
        border-radius: 15px;
        border: transparent;
        background-color: #eff0f2;
        text-indent: 38px;
      }
    }
  }
  //历史记录
  .history{
      border-bottom: 1px solid #e2e2e2;
      padding-top: 20px;
      padding-bottom:10px ;
      margin: 0 8px;
      .historyName{
          padding-left: 15px;
          font-size: 14px;
          color: #666;
          padding-bottom: 10px;
      }
      .historylist{
          display: flex;
          justify-content: space-between;
          padding: 0  16px 10px 16px;
      }
  }
//热门搜索
    .hotSearch{
        padding: 0 20px;
        .title{
            padding-top: 10px;
        font-size: 14px;
        color: #666;
        padding-bottom: 10px;
        }
        .searchKeep{
            display: inline-block;
            padding: 3px 5px;
            background-color: #f4f4f4;
            font-size: 14px;
            margin: 4px 6px;
        }
    }
}
</style>