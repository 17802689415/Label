<template>
    <div class="head">
        <div class="btnExp">
            <el-tooltip
                effect="light"
                content="Expand Menu"
                placement="right"
            >
                <el-button @click="change" circle><el-icon size="large"><Expand /></el-icon></el-button>
                <!-- <expandBtn></expandBtn> -->
            </el-tooltip>
        </div>
        <div style="position: absolute;margin-left: 60%;margin-top: -4vh;">
            <el-button type="text" class="text"><el-icon color="#F8F6F4" size="20px"><Switch /></el-icon><span style="color: #F8F6F4;">English</span></el-button>
        </div>
        
        
        <div class="user">
            <span style="color: white;">zhanglei</span>
            
        </div>
        <div class="logo">
            <el-avatar fit="fill" :size="40" >
              <img src="../assets/jabilimages.png">
              
            </el-avatar>
        </div>
        <div style="position: absolute;margin-top: -4vh;margin-left: 30%;width:26vw">
            <img src="../assets/homelogo.png" height="60" >
            <p style="color: white;font-weight: 700;font-size: 40px;margin-top: -6vh;margin-left: 35%;">Label TE SR</p>
            
        </div>
        
            
        
            
        
    </div>
</template>

<script>
// import expandBtn from '../components/tool/ExpandBtn.vue'
export default {
    name:'headPage',
    components:{
        // expandBtn
    },
    data(){
        return{
            
        }
    },
    methods:{
        change(){
            this.$store.state.isCollapse=!this.$store.state.isCollapse
        },
        handleSelect(){
            
        },
        logout(){
            this.$router.push('loginPage')
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
    background-color: black;
    margin: auto;
}
.user{
    height: 2vh;
    width: 1vw;
    margin-right: 3vw;
    float: right;
}
.btnExp{
    height: 2vh;
    width: 5vw;
    margin-top: 3vh;
    margin-left: 1vw;
}
.logo{
    height: 2vh;
    width: 1vw;
    margin-top: -3vh;
    margin-right: 2vw;
    float: right;
}
.btn1{
    height: 2vh;
    width: 6vw;
    margin-top: -2vh;
    margin-left: 7vw;
}
.btn2{
    height: 2vh;
    width: 6vw;
    margin-top: -2vh;
    margin-left: 5vw;
}
.text:hover{
    background-color: burlywood;
    
}
</style>