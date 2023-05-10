<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <menuSide></menuSide>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import menuSide from '../components/MenuSide.vue'
export default {
    name:'mainHome',
    components:{
        menuSide
    }

}
</script>

<style>

</style>