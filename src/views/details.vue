<template>
  <div id="details">
    <!-- 头部 -->
    <div id="header">
      <div class="back">
        <i class="iconfont icon-left" @click="add()"></i>
      </div>
      <div class="Topname">
      </div>
      <div class="give">
        <i class="iconfont icon-xiazai" @click="download()"></i>
        <i class="iconfont icon-fenxiang"></i>
      </div>
    </div>
    <!-- 背景图片 -->
    <div class="img">
      <img :src="imgsLists.img" alt />
    </div>
    <!-- 介绍 -->
    <!-- 名片 -->
    <div class="user">
      <div class="name">
        <p>
          <van-sticky :offset-top="0">
            <span>{{imgsLists.name}}</span>
          </van-sticky>
        </p>
      </div>
      <div class="introduce">
        <p>
          末世来临，凌默的异能觉醒，他发现自己居然可以控制丧尸。
          凌默利用自己的异能穿过尸潮，终于找到了心爱的女友—叶恋。却发现她已经成为了变异丧尸。
          为了帮助叶恋恢复神智，凌默踏上了末世求生之旅……
        </p>
      </div>
      <div class="author">
        <span>作者:</span>
        <span>阅文漫画</span>
      </div>
    </div>
    <!-- 目录 -->
    <div class="catalogueBox">
      <!-- 目录 -->
      <div class="catalogue">
        <div class="page">
          <span class="page_top">目录</span>
          <span class="page_next">连载中,已更新{{imgsLists.imglist.length}}话</span>
        </div>

        <!-- 展开目录 -->
        <div class="expandCatalog" @click="catalogueUp()">
          <span>展开目录</span>
          <i class="iconfont icon-gt"></i>
        </div>
      </div>
      <!-- 目录隐藏盒子 -->
      <van-popup v-model="show" position="bottom" :style="{ height: '70%'}" style="z-index:100;">
        <div class="cataloguaSum">
          <div class="top">
            <span>目录</span>
          </div>
          <div class="cataloguaSumBox">
            <div class="title">
              <span>全部章节({{imgsLists.imglist.length}})</span>
            </div>
            <div class="titleBox">
              <div class="titleList" v-for="item in imgsLists.imglist"
              :key="item.id"
              @click="goLook(item)">
                <div class="img">
                  <img :src="item.img" alt />
                </div>
                <div class="titleFont">
                  <p style="padding-left:10px">{{item.name}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </van-popup>
      <!-- 目录列表 -->
      <div class="chapter_list">
        <div class="swiper-container-01">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="item in imgsLists.imglist"
              :key="item.id"
              @click="$router.push({name:'look',params:{lookid:item.id,imgsLists:imgsLists}}),show=false"
              v-lazy="item"
            >
              <img :src="item.img" alt />
              <p>{{item.name}}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 异能排行榜 -->
      <div class="powerCard">
        <div class="powerCardName">
          <p>异能排行榜</p>
        </div>
        <div class="powerCardList">
          <div class="swiper-container-02">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="item in powerCardList" :key="item.id">
                <img :src="item.img" alt />
                <p>{{item.name}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 评论 -->
        <div class="centerBox">
        <div class="title"> 
          <p>精彩评论</p>
        </div>
        <!-- 评论列表 -->
        <div class="content">
          <!-- 评论列表 -->
          <div class="commentLists" v-for="(item,index) in commentLists" :key="index">
            <!-- 个人信息 -->
            <div class="commentUser">
              <div>
                <img :src="item.img" alt="">
                <span>{{item.name}}</span>
              </div>
              <div>
                <span>{{item.num}}</span>
                <i class="iconfont icon-dianzan1" v-show="!item.like" @click="like(item)"></i>
                <i class="iconfont icon-dianzan11" style="color:red" v-show="item.like" @click="like(item)"></i>
              </div>
            </div>
            <div class="tallContent">
              {{item.info}}
            </div>
          </div>
        </div>
        <!-- 发表评论 -->
        <div class="investment">
            <input type="text" v-model="text" @keydown="textIsSet">
        </div>
        </div>
    <!-- 底部 -->
    <div class="bottom">
      <!-- 主页按钮 -->
      <div class="home" @click="$router.push('/Home')">
        <i class="iconfont icon-fangzi"></i>
        <p>前往首页</p>
      </div>
      <!-- 收藏 -->
      <div class="Collection" @click="investment()">
        <span>收藏</span>
      </div>
      <!-- 开始阅读 -->
      <div class="startReading" @click="lookidFun()">
        <span>开始阅读</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Swiper from "swiper";
import { Toast } from 'vant';
export default {
  name: "adetails",
  data() {
    return {
      powerCardList: [
        {
          img: require("../assets/img/09.jpg"),
          id: 9,
          name: "一人之下",
        },
        {
          img: require("../assets/img/10.jpg"),
          id: 10,
          name: "重回末世当大佬",
        },
        {
          img: require("../assets/img/11.jpg"),
          id: 11,
          name: "大象无形",
        },
        {
          img: require("../assets/img/12.jpg"),
          id: 12,
          name: "异皇重生",
        },
        {
          img: require("../assets/img/13.jpg"),
          id: 13,
          name: "英雄再临",
        },
        {
          img: require("../assets/img/14.jpg"),
          id: 14,
          name: "修仙之人在都市",
        },
        {
          img: require("../assets/img/15.jpg"),
          id: 15,
          name: "神级外卖小哥",
        },
        {
          img: require("../assets/img/16.jpg"),
          id: 16,
          name: "戒魔人",
        },
      ],
      imgsLists: [],
      looki: null,
      show: false,
      commentLists:null,
      text:null,
      scrollTop2:null,
      
    };
  },
  mounted() {
    new Swiper(".swiper-container-01", {
      slidesPerView: 2.5, //显示个数
      observer: true,
      observeParents: true,
      freeMode: true, //起始位置
      spaceBetween: 10, //div之间间距
    });
    new Swiper(".swiper-container-02", {
      slidesPerView: 2.5, //显示个数
      observer: true,
      observeParents: true,
      spaceBetween: 10, //div之间间距
      freeMode: true, //起始位置
    });
  },

  methods: {
    add() {
      this.$router.back();
      localStorage.removeItem("loglevel:webpack-dev-server");
      // console.dir(this);
      // console.log(1);
    },
    lookidFun() {
      if (this.imgsLists.id == 1) {
        this.looki = 0;
      } else if (this.imgsLists.id == 2) {
        this.looki = 5;
      } else if (this.imgsLists.id == 3) {
        this.looki = 10;
      }
      this.$router.push({
        name: "look",
        params: { lookid: this.looki, imgsLists: this.imgsLists },
      });
      console.dir(this);
      console.log(this.looki);
    },
    catalogueSum() {
      this.$router.push({ name: "catalogueSum", params: {} });
    },
    //隐藏盒子显示隐藏
    catalogueUp(){
      this.show = true
    },
    // 去漫画内部
    goLook(item){
      this.$router.push({name:'look',params:{lookid:item.id,imgsLists:this.imgsLists}})
      this.show = false
    },
    //喜欢
    like(item){
      item.like = !item.like
      if(item.like == true){
        item.num += 1 
      }else{
        item.num -=1
      }
    },
    //回车发送评论
    textIsSet(e){
      this.scrollTop2 =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if(e.keyCode == 13 ){
        this.commentLists.unshift({
          name:"熙",
          img:require("../assets/img/wdtx.jpg"),
          info:this.text,
          num:0,
          like:false
        })
      this.text = ''
      }
    },
    //收藏
    investment(){
      console.log(this.$store.state.bookShelfList);
      let index = this.$store.state.bookShelfList.findIndex(item=>item.id ==this.imgsLists.id )
      if(index == -1){
        this.$store.commit("bookShelfFun",this.imgsLists);
        Toast("收藏成功")
      }else{
        Toast("主人,您已经收藏过了哦~")
      }
    },
    //下载
    download(){
      console.log(this.imgsLists);
      let index = this.$store.state.downloadLists.findIndex(item=>item.id ==this.imgsLists.id )
      if(index == -1){
        this.$store.commit("downloadFun",this.imgsLists);
        Toast("下载成功")
      }else{
        Toast("主人,您已经下载过了哦~")
      }
    }
  },
  computed: {},
  created() {
    this.$emit("hidenavson");
    this.imgsLists = this.$route.query.img;
    console.log(this.imgsLists);
    // this.$store.getters.lookIdFun(1)
    // console.log(this.$store.state.lookId);

    //请求漫画评论
    axios.get("./cartoon/commentLists.json").then(data=>{
      this.commentLists = data.data
      console.log(this.commentLists);
      
    })
  },
  beforeRouteLeave(to, from, next) {
    // if (to.name === "look") {
    //   this.$store.commit("newCachePath", from.path.split("/"));
    //   console.log(this.$store.state.cachePath);
    // }
    if (to.name === "Home") {
      this.$store.commit("newCachePath", to.path.split("/"));
      console.log(this.$store.state.cachePath);

    }
    if (to.name === "bookshelf") {
      this.$store.commit("newCachePath", to.path.split("/"));
      console.log(this.$store.state.cachePath);
    }
    if (to.name === "history") {
      this.$store.commit("newCachePath", to.path.split("/"));
      console.log(this.$store.state.cachePath);
    }
    if (to.name === "download") {
      this.$store.commit("newCachePath", to.path.split("/"));
      console.log(this.$store.state.cachePath);
    }
    if (to.name === "searchList") {
      this.$store.commit("newCachePath", to.path.split("/"));
    }
    if (to.name === "search") {
      this.$store.commit("newCachePath", to.path.split("/"));
      console.log(this.$store.state.cachePath);
    }
    next();
  },
  beforeDestroy() {
    this.$emit("shownavson");
  },
};
</script>

<style lang="less">
.van-sticky--fixed {
  z-index: 10;
  background-color: #fff;
  padding: 10px 0;
}
#header {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  min-width: 320px;
  max-width: 750px;
  margin: 0 auto;
  z-index: 20;
  background-color: transparent;
  .back {
    i {
      font-size: 30px;
      position: relative;
      z-index: 9999;
    }
  }
  .give {
    i {
      margin-right: 15px;
      font-size: 25px;
      position: relative;
      z-index: 9999;
    }
  }
  .Topname{
    display: flex;
    justify-content: flex-start;
  }
}
#details {
  overflow: hidden;
  max-width: 750px;
  padding-bottom: 60px;
  .img {
    height: 230px;
    overflow: hidden;
    position: relative;
    padding-top: 50px;
    img {
      width: 100%;
      position: absolute;
      margin: auto;
      left: 0;
      bottom: 0;
      right: 0;
      top: 0;
    }
  }
  //名片
  .user {
    max-width: calc(750px - 10%);
    position: absolute;
    top: 150px;
    width: 90%;
    margin: 0 5%;
    height: 200px;
    border-radius: 5px;
    box-shadow: 0px 0px 20px #e4e4e4;
    background-color: #fff;
    .name {
      // margin-left: 20px;
      margin-top: 10px;
      text-align: center;
      font-size: 20px;
      font-weight: bold;
      .van-sticky.van-sticky--fixed {
        width: 100%;
        margin: auto;
      }
    }
    .introduce {
      font-size: 12px;
      color: #666;
      margin: 10px 20px 20px 20px;
    }
    .author {
      margin-left: 20px;
      span:nth-child(2) {
        margin-left: 10px;
      }
    }
  }
  //目录
  .catalogueBox {
    margin: 80px 20px 0 20px;
    .catalogue {
      display: flex;
      justify-content: space-between;
      //目录
      .page {
        .page_next {
          font-size: 12px;
          color: #666;
          margin-left: 10px;
        }
        .page_top {
          font-size: 20px;
        }
      }
      //展开目录
      .expandCatalog {
        font-size: 12px;
        color: #666;
      }
    }
    .chapter_list {
      padding-top: 10px;
      .swiper-slide {
        border: 0.025rem solid #e8e7e5;
        img {
          padding-bottom: 10px;
          max-width: 100%;
        }
        p {
          margin-left: 5px;
          word-break: break-all;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          font-size: 14px;
        }
      }
    }
  }
  //异能排行榜
  .powerCard {
    .powerCardName {
      font-size: 20px;
      padding: 20px 0 10px 0;
    }
    .powerCardList {
      .swiper-slide {
        img {
          width: 100%;
          border-radius: 8px;
          padding-bottom: 5px;
        }
      }
    }
  }
   // 评论

    .centerBox{ 
      margin:10px;
      background-color: #fff;
      box-shadow: 0 0 20px #e4e4e4;
      border-radius: 10px;
      padding: 10px;
      .title{
        font-size: 14px;
        font-weight: bold;
      }
      //评论列表
      .content{
        .commentLists{
          padding: 10px 0;
          .commentUser{
              display: flex;
              justify-content: space-between;
              align-items: center;
            div{
              display: flex;
              align-items: center;
              img{
                width: 40px;
                height: 40px;
                display: inline-block;
                border-radius: 50%;
              }
              span{
                padding: 0 8px;
                font-size: 14px;
              }
              }
              
          }
          .tallContent{
            margin-left: 48px;
            margin-right: 8px;
            font-size: 14px;
          }
        }
      }
      //发表评论
      .investment{
        display: flex;
        justify-content: center;
        padding-top: 5px;
        input{
          width: 90%;
          padding: 5px 0;
          border-radius: 10px;
          text-indent: 10px;
          border: 1px solid #999;
        }
      }
  }
  //底部导航栏
  .bottom {
    position: fixed;
    height: 50px;
    z-index: 100;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #fff;
    width: 100%;
    div {
      text-align: center;
    }
    //前往首页
    .home {
      i {
        font-size: 20px;
      }
      p {
        font-size: 12px;
      }
    }
    //收藏
    .Collection {
      font-size: 14px;
      padding: 8px 25px;
      border-radius: 18px;
      background-color: #f4f4f4;
      font-weight: bold;
    }
    // 开始阅读
    .startReading {
      font-size: 14px;
      font-weight: bold;
      color: #fff;
      padding: 8px 50px;
      background-color: #ff613e;
      border-radius: 20px;
    }
  }
  
}
// 目录的隐藏盒子
.cataloguaSum {
  padding: 0 10px;
  .top {
    text-align: center;
    font-size: 18px;
    padding: 15px 0;
    position: fixed;
    left: 0;
    right: 0;
    margin: auto;
      background-color: #fff;
      z-index: 99;
  }
  .cataloguaSumBox {
    padding-top: 55px;
    .title {
      font-size: 14px;
      font-weight: bold;
      padding-top: 10px;
    }
    .titleBox {
      .titleList {
        height: 60px;
        padding: 20px 0;
        display: flex;
        align-items: center;
        .img {
        height: 30px !important;
          width: 40%;
          img {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>