<template>
    <!-- <div class="card" v-show="msg.show" ref="card"> -->
        
        <!-- <el-button><el-icon><Close /></el-icon></el-button> -->
        <el-tag class="card" :type="msg.type" closable v-show="msg.show">{{ msg.title }}</el-tag>
        <!-- <p></p> -->
    <!-- </div> -->
    
</template>
<script>

export default {
    name:'messageVue',
    props:{
        msg:Object
    },
    
}
</script>
<style scoped>
.card{
    width: 24vw;
    height: 8vh;
    background-color:aliceblue;
    border-radius: 20px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
}






</style>