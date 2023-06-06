<template>
  <div id="header">
    <div class="back">
      <i class="iconfont icon-left" @click="add()"></i>
    </div>
    <div class="give">
      <i class="iconfont icon-xiazai"></i>
      <i class="iconfont icon-fenxiang"></i>
    </div>
  </div>
</template>

<script>
export default {
  name:'headerNav',
  data() {
    return {};
  },

  mounted() {},

  methods: {
    add(){
      this.$router.back(-1)
      // localStorage.removeItem("loglevel:webpack-dev-server")
      // this.$destroy(this.$options.name);
    }
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
      margin-right: 15px;
      font-size: 25px;
      position: relative;
      z-index: 9999;
    }
  }
}
</style>