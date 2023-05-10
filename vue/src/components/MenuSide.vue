<template>
  <el-menu
    default-active="4"
    :collapse="isCollapse"
  >
    <el-menu-item index="4">
      <el-icon><setting /></el-icon>
      <template #title>Navigator Four</template>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
    name:'menuSide',
    data(){
        return{
            isCollapse:true
        }
    }
}
</script>

<style scoped>

</style>