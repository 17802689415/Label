<template>
  <div class="box">
    <!-- <loginPage></loginPage> -->
    <router-view></router-view>
  </div>

</template>

<script>
// import mainHome from './components/MainHome.vue'
// import loginPage from './components/LoginPage.vue'
import devicePixelRatio from '@/util/devicePixelRatio.js'
export default {
  name: 'App',
  components: {
    // loginPage
  },
  created() {
    new devicePixelRatio().init(); // 初始化页面比例
  },

}
</script>

<style scoped>

.box{
  -webkit-user-select: none;
  user-select: none;
}
</style>
