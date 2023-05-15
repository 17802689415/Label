<template>
    <el-menu
        class="head"
        mode="horizontal"
        @select="handleSelect"
        background-color="black"
        text-color="#fff"
        active-text-color="#ffd04b"
        :router="isrouter">
        <el-menu-item index="1" @click="change" class="item">
            <el-tooltip
                effect="light"
                content="Expand Menu"
                placement="right"
            >
                <el-button  size="small" class="btn"><el-icon><Expand /></el-icon></el-button>
            </el-tooltip>
        </el-menu-item>
        <el-menu-item index="3" class="item"><el-tooltip
                effect="light"
                content="logout"
                placement="right"
            >
                <el-button  size="small" class="btn" @click="logout"><el-icon><User /></el-icon>User</el-button>
            </el-tooltip></el-menu-item>
    </el-menu>
</template>

<script>
export default {
    name:'headPage',
    data(){
        return{
            isrouter:false
        }
    },
    methods:{
        change(){
            this.$store.state.isCollapse=!this.$store.state.isCollapse
        },
        handleSelect(){
            
        },
        logout(){
            this.$router.push('submitPage')
        }
    }
}
</script>

<style scoped>
.head{
    top: 0px;
    left: 0px;
    height: 8vh;
    width: 100%;
    position: absolute;
    /* background-color: black; */
    margin: auto;
}
.item.is-active{
    background-color: black !important;
}
.item:hover{
    background-color: black !important;
}
.item{
    background-color: black !important;
    border-bottom-color: black !important;;
}

.user{
    right: 0px;
}

</style>