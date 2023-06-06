<template>
  <div id="goTop">
    <div class="goTop" v-show="goTopShow" @click="goTop">
      <i class="iconfont icon-shang"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "goTop",
    
  data() {
    return {
      scrollTop: "",
      goTopShow: false,
    };
  },
  watch: {
    scrollTop( ) {
      if (this.scrollTop > 500) {
        this.goTopShow = true;
      } else {
        this.goTopShow = false;
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  
  methods: {
    handleScroll() {
      this.scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (this.scrollTop > 500) {
        this.goTopShow = true;
      }
    },
    goTop() {
      let timer = null,
        _that = this;
      cancelAnimationFrame(timer);
      timer = requestAnimationFrame(function fn() {
        if (_that.scrollTop > 0) {
          _that.scrollTop -= 150;
          document.body.scrollTop = document.documentElement.scrollTop =
            _that.scrollTop;
          timer = requestAnimationFrame(fn);
        } else {
          cancelAnimationFrame(timer);
          _that.goTopShow = false;
        }
      });
    },
  },
   destroyed() {
        window.removeEventListener("scroll", this.handleScroll);
}
};
</script>

<style lang="less">
.goTop {
    position: fixed;
    right: 20px;
    bottom: 60px;

    border-radius: 50%;
    background: #fff;
    padding: 10px;
    cursor: pointer;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
    opacity: .8;
    text-align: center;
    font-size: 15px;
}
.goTop:hover .goTopIcon {
    color: rgba(51, 153, 255, 1);
}
.goTopIcon {
    font-size: 20px;
    color: rgba(51, 153, 255, 0.8);
}
</style>