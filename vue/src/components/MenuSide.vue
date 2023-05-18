<template>

        <el-menu
            class="menu"
            :collapse="this.$store.state.isCollapse"
            background-color="#212A3E"
            text-color="white"
            active-text-color="#559867"
            :router="isRouter"
            >
     
            <el-menu-item index="/submitPage">
                <el-icon><DocumentAdd /></el-icon>
                <template #title>{{ $t('submitPage') }}</template>
            </el-menu-item>
            <el-menu-item index="/dealCase">
                <el-icon><EditPen /></el-icon>
                <template #title>{{ $t('dealCase') }}</template>
            </el-menu-item>
            <el-menu-item index="/userPage">
                <el-icon><User /></el-icon>
                <template #title>{{ $t('userPage') }}</template>
            </el-menu-item>
        </el-menu>

</template>

<script>
export default {
    name:'menuSide',
    data(){
        return{
            isRouter:true
        }
    }
}
</script>

<style scoped>
.menu{
    height: 87vh;
    margin: 0px;
}
.menu:not(.el-menu--collapse){
    width: 200px;
}
</style>