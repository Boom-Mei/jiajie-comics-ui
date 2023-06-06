<template>
  <div id="head">
    <!-- 头部 -->
    <div class="nav">
      <!-- logo -->
      <div class="logo">
        <img src="https://css99tel.cdndm5.com/v202111301550/blue/images/mobile/top-main-logo.png" alt />
      </div>
      <div class="search" @click="search()">
        <i class="iconfont icon-sousuo"></i>
        <p>搜索作品名</p>
      </div>
      <div class="nav_right">
        <i class="iconfont icon-wode1" @click="$router.push('/my')"></i>
        
      </div>
    </div>
    <!-- 轮播图 -->
    <div class="Rotation">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img src="../assets/img/1.webp" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/img/2.webp" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/img/3.webp" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/img/4.webp" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/img/5.webp" alt />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 脱颖而出的图片 -->
    <div class="alien_banner">
      <img src="../assets/img/1.png" alt />
    </div>
    <!-- 推荐 -->
    <div class="recommend">
      <!-- 标题 -->
      <div class="title">
        <p>为你推荐</p>
      </div>
      <!-- 推荐内容 -->
      <div class="recommend_content">
        <!-- 漫画盒子 -->
        <div class="content" @click="HomeFun(item)" v-for="item in cartoonList" :key="item.id" v-lazy="item">
          <div class="img">
            <img :src="item.img" alt />
            <div>
              <span>{{item.follow}}万关注</span>
            </div>
          </div>
          <div class="text">
            <p>{{item.name}}</p>
            <p>{{item.info}}</p>
          </div>
        </div>
        <!-- 换一换盒子 -->
        <div class="change">
          <button>查看更多</button>
          <button>换一换</button>
        </div>
      </div>
      <!-- 推荐内容 -->
      <div class="recommend_content">
        <!-- 漫画盒子 -->
        <div class="content">
          <div class="img">
            <img src="../assets/img/1.jpg" alt />
            <div>
              <span>50万关注</span>
            </div>
          </div>
          <div class="text">
            <p>不说谎恋人</p>
            <p>恋爱 都市 原创</p>
          </div>
        </div>
        <div class="content">
          <div class="img">
            <img src="../assets/img/2.jpg" alt />
            <div>
              <span>50万关注</span>
            </div>
          </div>
          <div class="text">
            <p>给我来个小和尚:欢迎来到妖怪镇</p>
            <p>奇幻 剧情 爆笑</p>
          </div>
        </div>
        <div class="content">
          <div class="img">
            <img src="../assets/img/3.jpg" alt />
            <div>
              <span>50万关注</span>
            </div>
          </div>
          <div class="text">
            <p>猎妻物语</p>
            <p>恋爱 校园 都市</p>
          </div>
        </div>
        <div class="content">
          <div class="img">
            <img src="../assets/img/4.jpg" alt />
            <div>
              <span>50万关注</span>
            </div>
          </div>
          <div class="text">
            <p>甜美的咬痕</p>
            <p>奇幻 完结 唯美</p>
          </div>
        </div>
        <div class="content">
          <div class="img">
            <img src="../assets/img/5.jpg" alt />
            <div>
              <span>50万关注</span>
            </div>
          </div>
          <div class="text">
            <p>色彩魔法使雪莉</p>
            <p>奇幻 原创</p>
          </div>
        </div>
        <div class="content">
          <div class="img">
            <img src="../assets/img/6.jpg" alt />
            <div>
              <span>50万关注</span>
            </div>
          </div>
          <div class="text">
            <p>羽烬</p>
            <p>恋爱 奇幻 剧情</p>
          </div>
        </div>
        <!-- 换一换盒子 -->
        <div class="change">
          <button>查看更多</button>
          <button>换一换</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      cartoonList: [],
      updateTime: null,
    };
  },
  // beforeCreate() {
  //   this.cartoonLists = this.$store.state.cartoonLists
  // },
  mounted() {},

  methods: {
    HomeFun(item) {
      this.$router.push({ name: "adetails", query: { img: item } });
      let index = this.$store.state.bookLookLists.findIndex(
        (e) => e.id == item.id
      );
      if (index == -1) {
        this.$store.commit("bookLookFun", item);
      }
      // 获取时间
      const newDate = new Date();
      console.log(newDate);
      const date = {
        year: newDate.getFullYear(),
        month: newDate.getMonth() + 1,
        date: newDate.getDate(),
      };
      const newmonth = date.month > 10 ? date.month : "0" + date.month;
      const day = date.date > 10 ? date.date : "0" + date.date;
      this.updateTime = date.year + "-" + newmonth + "-" + day;
      item.time = this.updateTime;
    },
    search(){
      this.$router.push('search')
    }
  },
  created() {
    axios.get("./cartoon/cartoonLists.json").then((data) => {
      this.cartoonList = data.data;
    });
  },
  beforeRouteLeave(to, from, next) {
    if (to.name === "adetails") {
      this.$store.commit("newCachePath", to.path.split("/"));
      console.log(this.$store.state.cachePath);
    }
    next();
  },
};
</script>

<style lang="less">
#head {
  padding-top: 40px;
  padding-bottom: 50px;
  max-width: 750px;
  //头部
  .nav {
    width: calc(100% - 36px);
    height: 46px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 18px;
    position: fixed;
    z-index: 10;
    background-color: rgba(252, 249, 249, 0.979);
    top: 0;
    min-width: 320px;
    max-width: 750px;
    margin: 0 auto;
    .logo {
      height: 100%;
      display: inline-flex;
      align-items: center;
      img {
        height: 50%;
      }
    }
    .search {
      position: relative;
      width: 58%;
      background-color: rgba(230, 230, 230, 0.644);
      border-radius: 20px;
      height: 65%;
      display: flex;
      align-items: center;
      justify-content: center;
      p {
        text-align: center;
        font-size: 14px;
        color: #666;
      }
      i {
        font-size: 16px;
        margin-right: 5px;
        color: #666;
      }
    }
    .nav_right {
      display: flex;
      justify-content: space-between;
      i {
        font-size: 25px;
        color: #666;
      }
    }
  }
  //轮播图
  .Rotation {
    margin-top: 10px;
    .my-swipe .van-swipe-item {
      img {
        width: 100%;
      }
      color: #fff;
      font-size: 20px;
      line-height: 140px;
      text-align: center;
    }
  }
  //图片
  .alien_banner {
    width: 100%;
    margin-top: 10px;
    img {
      width: 96%;
      margin: auto;
    }
  }
  //推荐
  .recommend {
    padding: 5px 7.5px;
    //标题
    .title {
      font-family: "Helvetica Neue", Helvetica, "PingFang SC",
        "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
      font-size: 18px;
      color: #333;
      font-weight: bold;
    }
    //推荐内容
    .recommend_content {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-bottom: 10px;
      .content {
        margin-top: 8px;
        width: 32.5%;
        .text {
          p {
            padding: 3px 0;
          }
          p:nth-child(1) {
            margin-top: 0.15rem;
            height: 1.45rem;
            line-height: 1.45rem;
            font-size: 14px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }
          p:nth-child(2) {
            height: 0.6rem;
            line-height: 0.6rem;
            font-size: 12px;
            color: #999;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }
        }
        .img {
          position: relative;
          height: calc(100% - 60px);
          img {
            width: 100%;
            border-radius: 5px;
          }
          div {
            position: absolute;
            bottom: 20px;
            font-size: 10px;
            color: #fff;
            width: 100%;
            height: 20px;
            position: relative;
            box-shadow: inset -10px -10px 5px #35353550;
            span {
              position: absolute;
              bottom: 0;
              right: 0;
            }
          }
        }
      }
      .change {
        width: 100%;
        display: flex;
        margin-top: 10px;
        justify-content: space-between;
        color: #666;
        button {
          background-color: rgba(214, 213, 213, 0.295);
          width: 49%;
          padding: 10px;
          border: none;
          font-size: 12px;
        }
      }
    }
  }
}
</style>