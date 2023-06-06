<template>
  <div id="circle">
    <van-tabs v-model="active" animated sticky title-active-color="#000" title-inactive-color="#999" swipeable color="#FFF">
      <van-tab title="关注">
        <!-- 评论 -->
        <div class="moments">
          <!-- 用户信息 -->
          <div class="usename">
            <!-- 头像 -->
            <div class="user">
              <div class="img">
                <img src="../assets/img/tx02.jpg" alt />
              </div>
              <div class="name">欧兜兜</div>
            </div>
          </div>
          <!-- 说说 -->
          <div class="tall">
            <p>
            灰色小兔  
            </p>
            <div class="Boximg">
            <div class="img">
              <img src="../assets/img/ss06.jpg" />
            </div>
            <div class="img">
              <img src="../assets/img/ss07.jpg" />
            </div>
              <div class="img">
              <img src="../assets/img/ss08.jpg" />
            </div>
              <div class="img">
              <img src="../assets/img/ss09.jpg" />
            </div>
              <div class="img">
              <img src="../assets/img/ss10.jpg" />
            </div>
              <div class="img">
              <img src="../assets/img/ss11.jpg" />
            </div>
            </div>
          </div>
           <!-- 评论点赞 -->
          <div class="nav_bottom">
            <!-- 浏览量 -->
            <div class="Views">浏览量 3268</div>
            <!-- 点赞评论 -->
            <div class="give_good">
              <div>
                <i class="iconfont icon-pinglun-"></i>
                <span>1</span>
              </div>
              <div>
                <i class="iconfont icon-dianzan"></i>
                <span>162</span>
              </div>
            </div>
          </div>
        </div>
        <!-- 评论 -->
        <div class="moments">
          <!-- 用户信息 -->
          <div class="usename">
            <!-- 头像 -->
            <div class="user">
              <div class="img">
                <img src="../assets/img/tx02.jpg" alt />
              </div>
              <div class="name">欧兜兜</div>
            </div>
          </div>
          <!-- 说说 -->
          <div class="tall">
            <p>
            灰色小兔  
            </p>
            <div class="Boximg">
            <div class="img">
              <img src="../assets/img/ss06.jpg" />
            </div>
            <div class="img">
              <img src="../assets/img/ss07.jpg" />
            </div>
              <div class="img">
              <img src="../assets/img/ss08.jpg" />
            </div>
              <div class="img">
              <img src="../assets/img/ss09.jpg" />
            </div>
              <div class="img">
              <img src="../assets/img/ss10.jpg" />
            </div>
              <div class="img">
              <img src="../assets/img/ss11.jpg" />
            </div>
            </div>
          </div>
           <!-- 评论点赞 -->
          <div class="nav_bottom">
            <!-- 浏览量 -->
            <div class="Views">浏览量 3268</div>
            <!-- 点赞评论 -->
            <div class="give_good">
              <div>
                <i class="iconfont icon-pinglun-"></i>
                <span>1</span>
              </div>
              <div>
                <i class="iconfont icon-dianzan"></i>
                <span>162</span>
              </div>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="推荐">
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
        <!-- 评论 -->
        <div class="moments">
          <!-- 用户信息 -->
          <div class="usename">
            <!-- 头像 -->
            <div class="user">
              <div class="img">
                <img src="../assets/img/tx01.jpg" alt />
              </div>
              <div class="name">伶仃傜</div>
            </div>
            <div class="like" @click="guan" v-show="!guanzhu">关注</div>
            <div class="like" @click="guan" v-show="guanzhu">已关注</div>
          </div>
          <!-- 说说 -->
          <div class="tall">
            <p>
              角色 : 蕾姆 : 纵夏
              <br />
              <br />今天是你的绵羊吗?
            </p>
            <div class="Boximg">
            <div class="img">
              <img src="../assets/img/ss01.jpg" />
            </div>
            <div class="img">
              <img src="../assets/img/ss02.jpg" />
            </div>
              <div class="img">
              <img src="../assets/img/ss03.jpg" />
            </div>
              <div class="img">
              <img src="../assets/img/ss04.jpg" />
            </div>
              <div class="img">
              <img src="../assets/img/ss05.jpg" />
            </div>
            </div>
          </div>
          <!-- 评论点赞 -->
          <div class="nav_bottom">
            <!-- 浏览量 -->
            <div class="Views">浏览量 8306</div>
            <!-- 点赞评论 -->
            <div class="give_good">
              <div>
                <i class="iconfont icon-pinglun-"></i>
                <span>6</span>
              </div>
              <div>
                <i class="iconfont icon-dianzan"></i>
                <span>277</span>
              </div>
            </div>
          </div>
        </div>
        <!-- 评论 -->
        <div class="moments">
          <!-- 用户信息 -->
          <div class="usename">
            <!-- 头像 -->
            <div class="user">
              <div class="img">
                <img src="../assets/img/tx02.jpg" alt />
              </div>
              <div class="name">欧兜兜</div>
            </div>
            <div class="like">已关注</div>
          </div>
          <!-- 说说 -->
          <div class="tall">
            <p>
            灰色小兔
            </p>
            <div class="Boximg">
            <div class="img">
              <img src="../assets/img/ss06.jpg" />
            </div>
            <div class="img">
              <img src="../assets/img/ss07.jpg" />
            </div>
              <div class="img">
              <img src="../assets/img/ss08.jpg" />
            </div>
              <div class="img">
              <img src="../assets/img/ss09.jpg" />
            </div>
              <div class="img">
              <img src="../assets/img/ss10.jpg" />
            </div>
              <div class="img">
              <img src="../assets/img/ss11.jpg" />
            </div>
            </div>
          </div>
           <!-- 评论点赞 -->
          <div class="nav_bottom">
            <!-- 浏览量 -->
            <div class="Views">浏览量 3268</div>
            <!-- 点赞评论 -->
            <div class="give_good">
              <div>
                <i class="iconfont icon-pinglun-"></i>
                <span>1</span>
              </div>
              <div>
                <i class="iconfont icon-dianzan"></i>
                <span>162</span>
              </div>
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 1,
      guanzhu:null
    };
  },

  mounted() {},

  methods: {
    guan(){
      
      this.guanzhu = !this.guanzhu
      this.$store.commit('guanFun', this.guanzhu);
    }
  },
  created() {
    this.guanzhu = this.$store.state.guan
  },
};
</script>

<style lang="less">
#circle {
  padding-bottom: 50px;
  .van-tab--active {
    font-size: 16px;
  }
  //轮播图
  .Rotation {
    margin-top: 10px;
    padding-bottom: 20px;
    border-bottom: 5px solid #f2f2f2;
    .my-swipe .van-swipe-item {
      img {
        width: 92%;
        margin: auto;
        border-radius: 10px;
      }
      color: #fff;
      font-size: 20px;
      line-height: 140px;
      text-align: center;
    }
  }
  //评论
  .moments {
    width: 92%;
    padding: 0 15px;
    border-bottom: 5px solid #f2f2f2;
    //用户信息
    .usename {
      padding: 20px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .user {
        display: flex;
        align-items: center;
        .img {
          width: 36px;
          height: 36px;
          padding-right: 10px;
          img {
            width: 100%;
            border-radius: 50%;
          }
        }
      }
      .like {
        border: 1px solid #000;
        padding: 2px 10px;
        border-radius: 15px;
        font-size: 14px;
      }
    }
    //评论的话
    .tall {
      width: 100%;
      p {
        line-height: 25px;
      }
      .Boximg{
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        padding: 10px 0;
      .img {
        height: 110px;
        width: 32%;
        overflow: hidden;
        position: relative;
        margin-bottom: 4px;
        margin-right: 1.33%;
        img {
          position: absolute;
          width: 100%;
          float: left;
          transform: translate3d(-50%, -50%, 0px) scale(1.5);
          top: 50%;
          left: 50%;
        }
      }
      }
    }
    //底部导航栏
    .nav_bottom{
      font-size: 12px;
      align-items: center;
      display: flex;
      justify-content: space-between;
      color: #666;
      padding: 10px 0;
      .give_good{
        display: flex;
        justify-content: space-between;
        div{
          display: flex;
          align-items: center;
          margin-left: 20px;
          span{
            margin-left: 3px;
          }
        }
      }
    }
  }
}
</style>