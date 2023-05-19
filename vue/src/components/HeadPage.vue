<template>
    <div class="head" style="background-color: blanchedalmond;">
   
        <div style="display: inline-block;height: 8vh;width: 5%;">
            <el-tooltip
                effect="light"
                :content="$t('expand')"
                placement="right"
            >
                <el-button @click="expandMenu" circle style="margin-bottom:6vh;margin-left:1vw" color="#A4D0A4">
                    <el-icon size="large"><Expand /></el-icon>
                </el-button>

            </el-tooltip>
        </div>
            

            <div style="display: inline-block;height: 8vh;width: 35%;">
                <img src="../assets/homelogo.png" height="60" style="float: right;margin-top:2vh">
                
            </div>
            
            <div style="display: inline-block;height: 8vh;width: 20%;">
                <span style="color: black;font-weight: 700;font-size: 3vw;float: right;margin-top: 5%;">Label TE SR</span>
            </div>
            
            <div style="display: inline-block;height: 8vh;width: 20%;">
                <el-button type="text" class="text" @click="changeLanguage" style="float: right;margin-left: 5%;padding: 2%;">
                    <el-icon color="black" size="20px"><Switch /></el-icon>
                    <span style="color: black;" class="language">{{ $t('language') }}</span>
                </el-button>
                <el-button type="text" class="text" @click="logout" style="float: right;margin-left: 5%;padding: 2%;">
                    <el-icon color="black" size="20px"><SwitchButton /></el-icon>
                    <span style="color: black;" class="language">{{ $t('logout') }}</span>
                </el-button>
            </div>
            
        
            

            

            <div style="display: inline-block;height: 8vh;width: 15%;">
                <el-avatar fit="fill" :size="40" style="float: right;margin-top: 2vh;">
                    <img src="../assets/jabilimages.png">
                
                </el-avatar>
            </div>
            <div style="display: inline-block;height: 8vh;width: 5%;">
                <span style="color: black;float: left;margin-top: 5vh;margin-left: 1vw;">zhanglei</span>
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
        expandMenu(){
            this.$store.state.isCollapse=!this.$store.state.isCollapse
        },
        logout(){
            this.$router.push('loginPage')
        },
        changeLanguage(){
            if(this.$i18n.locale == 'en'){
            this.$i18n.locale = 'zh'
            }else{
                this.$i18n.locale = 'en'
            }
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
.text:hover{
    border: 1px black solid;
    
}


</style>