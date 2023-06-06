<template>
  <div id="login">
      <div class="logo">
          <img src="../logo.png" alt="">
      </div>
    <div class="toMy">
      <van-form @submit="onSubmit">
        <van-field v-model="username" name="用户名" label="用户名" placeholder="用户名"   :rules="[{ required: true, message: '请填写用户名' }]">
        </van-field>
        <van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码" :rules="[{ required: true, message: '请填写密码' }]" />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">提交</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },

  mounted() {},

  methods: {
    onSubmit(values) {
      console.log("submit", values);
      var Usename = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/;
      if(Usename.test(this.username)){
        this.$store.commit("loginFun",true);
        this.$router.push("/my")
      }else{
          alert("请输入正确的格式")
      }

    console.log(this.username);

    },
  },
  
};
</script>

<style lang="less">
#login{
    .logo{
        padding-top: 100px;
        padding-bottom: 40px;
        display: flex;
        justify-content: center;
        width: 100%;
        img{
            width: 50%;
        }
    }
}
</style>