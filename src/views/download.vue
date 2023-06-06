<template>
  <div id="download">
    <!-- 头部 -->
    <div id="header">
      <div class="back">
        <i class="iconfont icon-left" @click="add()"></i>
      </div>
      <div class="history">
        <span>下载记录</span>
      </div>
      <div class="give">
        <i class="iconfont icon-fenxiang"></i>
      </div>
    </div>
    <!-- 下面内容盒子 -->
    <div class="content">
      <!-- 书列表 -->
      <div class="bookList" v-for="item in downloadList" :key="item.id" @click="$router.push({name:'adetails',query:{img:item}})">
        <div class="bookImg">
          <div class="img">
            <img :src="item.img" />
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
            downloadList:null
        };
    },

    mounted() {
        
    },

    methods: {
    add() {
      this.$router.back(-1);
    },
  },
  created() {
    this.$emit("hidenavson");
    this.downloadList = this.$store.state.downloadLists
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
#download {
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
      .time {
        p {
          font-size: 14px;
          color: #999;
        }
      }
      .bookImg {
        padding-top: 10px;
        display: flex;
        align-items: center;
        .img {
          display: inline-block;
          width: 35%;
          img {
            width: 100%;
          }
        }
        .bookName {
          display: inline-block;
          p {
            padding-left: 15px;
          }
          p:nth-child(1) {
            font-weight: bold;
          }
          p:nth-child(2) {
            font-size: 12px;
            padding-top: 5px;
          }
        }
      }
    }
  }
}
</style>