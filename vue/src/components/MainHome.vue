<template>

    <el-container class="common-layout">
      <el-header>
        <headPage></headPage>
      </el-header>
      <el-container class="view">
        <el-aside class="side">
          <menuSide></menuSide>
        </el-aside>
        <el-main class="main">
            <router-view></router-view>
        </el-main>
      </el-container>
      <el-footer>
        <footerPage></footerPage>
      </el-footer>
    </el-container>

</template>

<script>
import menuSide from '../components/MenuSide.vue'
import headPage from '../components/HeadPage.vue'
import footerPage from '../components/FooterPage.vue'
export default {
    name:'mainHome',
    components:{
        menuSide,
        headPage,
        footerPage,
     
    }

}
</script>

<style scoped>
.common-layout{
    height: 100%;
    width: 100%;
    top: 0px;
    left: 0px;
    position: absolute;
}
.view{
  width: 100%;
  top:8vh;
  position: absolute;
}

.side{
  height: 100%;
  width: auto;
  display: flex;
}
.main{
  width: auto;
  /* display: flex; */
  background-color: #163e6a;
}

</style>