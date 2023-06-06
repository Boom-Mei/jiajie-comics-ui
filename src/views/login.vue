<template>
  <div>
    <login></login>
  </div>
</template>

<script>
import login from "../components/public/login.vue";
export default {
  components: { login },
  data() {
    return {};
  },
  mounted() {},
  created() {
    this.$emit("hidenavson");
  },
  beforeDestroy() {
    this.$emit("shownavson");
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
</style>