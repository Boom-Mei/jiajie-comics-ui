<template>
  <div class="box">
    <div class="bottom_nav">
      <router-link tag="div" to="/Home">
        <i class="iconfont icon-tuijian " ></i>
        <p>推荐</p>
      </router-link>
      <router-link tag="div" to="/circle">
        <i class="iconfont icon-quanzi" ></i>
        <p>圈子</p>
      </router-link>
      <router-link tag="div" to="/bookshelf" >
        <i class="iconfont icon-Group" ></i>
        <p>书架</p>
      </router-link>
      <router-link tag="div" to="/my" >
        <i class="iconfont icon-wode1" ></i>
        <p>我的</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        con:1,
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="less">
.box {
  position: relative;
  .bottom_nav {
    background-color: #fff;
    z-index: 10;
    min-width: 320px;
    max-width: 750px;
    width: 100%;
    display: flex;
    align-items: center;
    height: 50px;
    position: fixed;
    bottom: 0;
    text-align: center;
    color: #666;
    font-size: 14px;
    div{
        flex: 1;
    }
    i{
        font-size: 20px;
    }
 .router-link-active{
        // color: lightseagreen;
        span{
            font-size: 16px;
        }
        i{
            font-size: 22px;
        }
    }
}
}
.router-link-active{
  color: lightseagreen;
}
</style>