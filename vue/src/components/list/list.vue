<template >
  <div class="list">
    <Header></Header>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "../common/header";
import Footer from "../common/footer";
export default {
  data() {
    return {};
  },
  //   进入页面加载数据
  created() {},
  //   页面的方法
  mounted() {},
  components: {
    Header,
    Footer
  }
};
// 获取子组件信息
components: {
}
</script>
<style lang="less" scoped>
.list {
  .box {
    width: 1rem;
    height: 1rem;
    background-color: red;
  }
}
</style>
