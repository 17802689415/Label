<template>

    <el-container class="common-layout">
        <el-aside class="side">
            <menuSide></menuSide>
        </el-aside>

        
        <el-container class="view">
          <el-header class="head">
            <headPage></headPage>
          </el-header>
          
          <el-main class="main">
              <router-view></router-view>
          </el-main>
        </el-container>
      
    </el-container>

</template>

<script>

import menuSide from '../components/MenuSide.vue'
import headPage from '../components/HeadPage.vue'
export default {
    name:'mainHome',
    components:{
        menuSide,
        headPage,
        
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
  /* width: auto; */
  height: 100%;
}

.head{
  height: 60px;
  background-color: #537188;
}
.side{
  width: auto;
  height: 100%;
  top: 0;
  left: 0;
}
.main{
  /* width: auto; */
  height: 100%;
  background-color: #F8F6F4;
}

</style>