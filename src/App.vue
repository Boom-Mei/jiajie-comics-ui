<template>
  <div id="app">
    <div class="main">
      <keep-alive  :include="cachePath">
        <router-view @shownavson="shownav" @hidenavson="hidenav"></router-view>
      </keep-alive>
      <!-- 脚部组件 -->
      <bottom-nav v-show="show"></bottom-nav>
      <!-- 回到顶部组件 -->
    <go-top></go-top>
    </div>
  </div>
</template>

<script>
import bottomNav from "./components/public/bottomNav.vue";
import goTop from './components/public/goTop.vue';
export default {
  data() {
    return {
      show: true,
      
    };
  },
  methods: {
    shownav() {
      this.show = true;
      // console.log(this);
    },
    hidenav() {
      this.show = false;
    },
  },

  components: {
    bottomNav,
    goTop,
  },
  computed: {
    cachePath() {
      return this.$store.state.cachePath;
    },
  },
};
</script>

<style lang="less" >
@import "./assets/css/index.css";
</style>