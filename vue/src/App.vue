<template>
  <div class="box">
    <!-- <loginPage></loginPage> -->
    <router-view></router-view>
  </div>

</template>

<script>
// import mainHome from './components/MainHome.vue'
// import loginPage from './components/LoginPage.vue'

export default {
  name: 'App',
  components: {
    // loginPage
  }
}
</script>

<style scoped>

.box{
  -webkit-user-select: none;
  user-select: none;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
</style>
