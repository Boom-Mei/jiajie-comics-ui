<template>
  <div id="history">
    <!-- 头部 -->
    <div id="header">
      <div class="back">
        <i class="iconfont icon-left" @click="add()"></i>
      </div>
      <div class="history">
        <span>历史记录</span>
      </div>
      <div class="give">
        <van-share-sheet
  v-model="showShare"
  title="立即分享给好友"
  :options="options"/>
      <i class="iconfont icon-fenxiang" @click="fenxiang()"></i>
      </div>
    </div>
    <!-- 下面内容盒子 -->
    <div class="content">
      <!-- 书列表 -->
      <div class="bookList" v-for="item in bookLookList" :key="item.id" @click="$router.push({name:'adetails',query:{img:item}})">
          <div class="time">
          <p>{{item.time}}</p>
          </div>
          <div class="bookImg">
              <div class="img">
          <img :src="item.img">
          </div>
          <div class="bookName">
          <p>{{item.name}}</p>
          <p>更新到第{{item.imglist.length}}话</p>
          </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        bookLookList:null,
         show: true,
       showShare: false,
      options: [
        [
          { name: '微信', icon: 'wechat' },
          { name: '朋友圈', icon: 'wechat-moments' },
          { name: '微博', icon: 'weibo' },
          { name: 'QQ', icon: 'qq' },
        ],
        [
          { name: '复制链接', icon: 'link' },
          { name: '分享海报', icon: 'poster' },
          { name: '二维码', icon: 'qrcode' },
          { name: '小程序码', icon: 'weapp-qrcode' },
        ],
      ],
    };
  },

  mounted() {},

  methods: {
    add() {
      this.$router.back(-1);
    },
    fenxiang(){
      this.showShare = !this.showShare
    },
  },
  created() {
    this.$emit("hidenavson");
    this.bookLookList = this.$store.state.bookLookLists
    console.log(this.bookLookList);
  },
  beforeDestroy() {
    this.$emit("shownavson");
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
#history {
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
    background-color: rgba(252, 249, 249, 0.979);
    .back {
      i {
        font-size: 30px;
        position: relative;
        z-index: 9999;
      }
    }
    .give {
      i {
        font-size: 25px;
        position: relative;
        z-index: 9999;
      }
    }
    .history {
      text-align: center;
    }
  }
  .content {
      padding: 50px 10px;
    .bookList {
            padding: 10px 0;
            border-bottom: 1px solid #e2e2e2;
        .time{
            p{
                font-size: 14px;
                color: #999;
            }
        }
        .bookImg{
            padding-top: 10px;
            display: flex;
            align-items: center;
            .img{
                display: inline-block;
                width: 35%;
                img{
                    width: 100%;
                }
            }
            .bookName{
            display: inline-block;
            p{
                padding-left: 15px;
            }
            p:nth-child(1){
                font-weight: bold;
            }
            p:nth-child(2){
                font-size: 12px;
                padding-top:5px ;
            }
        }
        }
        
    }
  }
}
</style>