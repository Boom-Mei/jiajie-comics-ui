<template>
  <div id="bookshelf">
    <!-- 头部导航栏 -->
    <div class="nav">
      <div class="nav_left">
        <van-tabs v-model="active" animated sticky title-active-color="#000" title-inactive-color="#999" swipeable color="#FFF">
          <van-tab title="漫画">
            <!-- 书架 -->
            <div class="bookshelf">
              <!-- 书本 -->
              <div class="book" v-for="(item,index) in bookShelfList" :key="index" >
                <div class="img">
                  <div class="del" v-show="del" @click="dels(index)">
                <i class="iconfont icon-shanchu1"></i>
                  </div>
                  <img :src="item.img" alt @click="$router.push({name:'adetails',query:{img:item}})" />
                </div>
                <div class="book_name">
                  <p>{{item.name}}</p>
                  <p class="number" style="letter-spacing:3px">共{{item.imglist.length}}话</p>
                </div>
              </div>
            </div>
            <!-- 删除按钮 -->
            <div class="delButton" @click="delState"> 
              <i class="iconfont icon-shanchu"></i>
            </div>
          </van-tab>
          <van-tab title="动画">
            <div class="kong">
            <img src="../assets/img/kong.png" alt="">
            <p>书架空空哟,快点把它填满吧</p>
            </div>
          </van-tab>
          <van-tab title="小说">
            <div class="kong">
            <img src="../assets/img/kong.png" alt="">
            <p>书架空空哟,快点把它填满吧</p>
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      bookShelfList:null,
      del:null
    };
  },

  mounted() {},

  methods: {
    //刪除状态
    delState(){
      this.del = !this.del
    },
    //删除
    dels(index){
      console.log(index);
      this.$store.commit("delFun",index)
    }
  },
  created() {
    this.bookShelfList = this.$store.state.bookShelfList
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
#bookshelf {
  padding-bottom: 50px;
  .van-tab--active {
    font-size: 16px;
  }
  
  //书架
  .bookshelf {
    width: 100%;
    padding: 10px 15px;
    padding-top: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    .book {
      width: 29%;
      padding-right: 2.5%;
      padding-bottom: 2%;
      
      .img {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        .del{
          width: 100%;
          height: 100%;
          position: absolute;
            background-color: rgba(143, 140, 140, 0.253);
            display: flex;
            justify-content:center ;
            align-items: center;
            z-index: 20;
          i{
          z-index: 10;
          font-size: 30px;
          color: #fff;
        }
        }
        img {
          width: 100%;
          border-radius:5px ;
        }
      }
      .book_name{
        margin-top: 5px;
        font-size: 12px;
        color: #000;
        .number{
          font-size: 0.6rem;
          color: #666;
        }
      }
    }
  }
  //删除按钮
  .delButton{
    position: absolute;
    text-align: center;
    top: 0px;
    right: 20px;
    i{
      font-size: 20px;
      color: #ccc;
    }
  }
  //动画
  .kong{
    position: relative;
    height: 50vh;
    img{
      width: 40%;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
    }
    p{
      text-align: center;
      line-height: 85vh;
    }
  }
}
</style>