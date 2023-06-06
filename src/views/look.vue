<template>
  <div id="look" @touchmove="scoor()">
    <!-- 头部 -->
    <div id="header">
      <div class="back">
        <i class="iconfont icon-left" @click="add()"></i>
      </div>
      <div class="Topname">
      <span>{{imgLists.name}}</span>
      </div>
      <div class="give">
        <i class="iconfont icon-xiazai"></i>
        <i class="iconfont icon-fenxiang"></i>
      </div>
    </div>
    <!-- 漫画图片 -->
    <div v-if="lookList[page]">
      <div class="img" v-for="(item,index) in lookList[page].lookArr" :key="index" v-lazy="item">
        <img :src="item" alt />
      </div>
    </div>
      <!-- 目录 -->
    <van-popup v-model="show2" position="left"  :style="{ height: '100%',width:'70%',}" style="z-index:100;">
      <p v-for="(item,index) in imgLists.imglist" :key="index" class="esys" @click="cataloguePage(item)" :class="{con:item.id == page}">{{item.name}}</p>
    </van-popup>
    <!-- 点击显示隐藏的盒子 -->
    <div class="hid_box"  @click="show =true">
    </div>
    <!-- 隐藏的底部 -->
    <van-popup v-model="show" position="bottom"  :style="{ height: '50px' }">
      <div class="bottom">
        <i class="iconfont icon-mulu" @click="catalogue()"></i>
        <i class="iconfont icon-xiayizhang1" @click="redu()"></i>
        <i class="iconfont icon-xiayizhang" @click="addPage()"></i>
        <!-- <button @click="redu()">上一章</button>
        <button @click="addPage()">下一章</button>-->
      </div>
    </van-popup>
  </div>
</template>

<script>
import { Toast } from "vant";
import axios from "axios";
export default {
  data() {
    return {
      lookList: [],//漫画图片的数组
      page: null,//页数
      scrollTop: "",//距离顶部的距离
      scrollHeight: "",//总共的高
      offsetHeight: "",//当前页面的高
      flag: false,//前往下一章的状态
      show:false,//隐藏盒子的状态
      show2:false,//目录的隐藏盒子
      imgLists:[]
    };
  },

  mounted() {},
  methods: {
    //返回
    add() {
      this.$router.back(-1);
      localStorage.removeItem("loglevel:webpack--dev-server");
    },
    //下一章
    addPage() {
      if (
        this.page == 4 ||
        this.page == 9 ||
        this.page == 14 ||
        this.page == 19
      ) {
        this.page == this.page;
        setTimeout(() => {
          Toast("这是最后一章哦");
        }, 1000);
      } else {
        this.page += 1;
        this.goTopa();
      }
      console.log(this.page);
    },
    //上一章
    redu() {
      if (
        this.page == 0 ||
        this.page == 5 ||
        this.page == 10 ||
        this.page == 15
      ) {
        this.page == this.page;
        Toast("这是第一章哦,前面没有咯");
      } else {
        this.page -= 1;
      }
      this.goTopa();
    },
    //滚动前往下一章
    scoor() {
      //当前高度
      this.scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      //总高度
      this.scrollHeight = document.body.scrollHeight;
      //当前屏幕高度
      this.offsetHeight = document.body.offsetHeight;

      if (this.scrollTop + this.offsetHeight + 1 >= this.scrollHeight) {
        const toast = Toast.loading({
          duration: 0, // 持续展示 toast
          forbidClick: true,
          message: "加载中",
        });

        let second = 1;
        const timer = setInterval(() => {
          second--;
          if (second) {
            toast.message = `倒计时 ${second} 秒`;
          } else {
            clearInterval(timer);
            // 手动清除 Toast
            Toast.clear();
          }
        }, 1000);
        this.flag = true;
        setTimeout(() => {
          if (this.flag == false) {
            return;
          }
          this.addPage();
          this.flag = false;
        }, 1000);
      }
    },
    //回到顶部
    goTopa() {
      let timer = null,
        _that = this;
      cancelAnimationFrame(timer);
      requestAnimationFrame(function fn() {
        if (_that.scrollTop > 0) {
          _that.scrollTop -= 1000;
          document.body.scrollTop = document.documentElement.scrollTop =
            _that.scrollTop;
          timer = requestAnimationFrame(fn);
        }
      });
    },
    //目录显示的按钮
    catalogue(){
      this.show = false,
      this.show2 = true
    },
    //点击目录上的每一页
    cataloguePage(item){
      console.log(item.id);
      this.page = item.id
      this.show2 = false
      this.goTopa()
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.scoor);
  },
  created() {
    this.$emit("hidenavson");
    axios.get("./cartoon/lookList.json").then((data) => {
      this.lookList = data.data;
      console.log(this.lookList);
    });
    console.log(this.$route.params);
    this.imgLists = this.$route.params.imgsLists
    this.page = this.$route.params.lookid;
    console.log(this.imgListss);
  },

  beforeDestroy() {
    this.$emit("shownavson");
  },
};
</script>

<style lang="less">
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
#look {
  .img {
    img {
      width: 100%;
    }
  }
  .hid_box{
    width: 50%;
    height: 50vh;
    position: fixed;
    // background-color: #fff;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 21;
  }
  //目录
  .esys{
    font-size: 14px;
    padding: 17px;
    color: #666;
  }
  .con{
    color: red;
  }
  //底部导航栏
  .bottom {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #fff;
    display: flex;
    justify-content: space-evenly;
    i {
      padding: 20px;
      font-size: 18px;
    }
  }
}
</style>