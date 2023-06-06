<template>
    <div id="searchList">
        <header-nav></header-nav>
        <!-- 下面内容盒子 -->
    <div class="content">
      <!-- 书列表 -->
      <div class="bookList" v-for="item in cartoonList" :key="item.id" @click="$router.push({name:'adetails',query:{img:item}})">
        <div class="bookImg">
          <div class="img">
            <img :src="item.img" />
          </div>
          <div class="bookName">
            <p>{{item.name}}</p>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
import axios from "axios"
import headerNav from '../components/public/headerNav.vue';
export default {
    components: { headerNav },
    data() {
        return {
            cartoonList:[]
        };
    },

    mounted() {
        
    },
    created() {
        this.$emit("hidenavson");
        axios.get("./cartoon/cartoonLists.json").then((data) => {
      this.cartoonList = data.data;
    });
    },
    methods: {
        
    },
    beforeRouteLeave(to, from, next) {
    if (to.name === "adetails") {
      this.$store.commit("newCachePath", to.path.split("/"));
    }
    next();
    },
    beforeDestroy() {
        this.$emit("shownavson");
    },
    
};
</script>

<style lang="less">
#searchList{
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