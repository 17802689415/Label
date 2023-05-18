<template>
    <div class="head" style="background-color: blanchedalmond;">
   
        <div style="display: inline-block;height: 8vh;width: 5%;">
            <el-tooltip
                effect="light"
                :content="$t('expand')"
                placement="right"
            >
                <el-button @click="expandMenu" circle style="float: right;margin-top: 20%;margin-right: 20%;"><el-icon size="large"><Expand /></el-icon></el-button>

            </el-tooltip>
        </div>
            

            <div style="display: inline-block;height: 8vh;width: 35%;">
                <img src="../assets/homelogo.png" height="60" style="float: right;">
                
            </div>
            
            <div style="display: inline-block;height: 8vh;width: 20%;">
                <span style="color: white;font-weight: 700;font-size: 3vw;float: right;margin-top: 5%;">Label TE SR</span>
            </div>
            
            <div style="display: inline-block;height: 8vh;width: 20%;">
                <el-button type="text" class="text" @click="changeLanguage" style="float: right;margin-left: 5%;padding: 2%;">
                    <el-icon color="#F8F6F4" size="20px"><Switch /></el-icon>
                    <span style="color: #F8F6F4;" class="language">{{ $t('language') }}</span>
                </el-button>
                <el-button type="text" class="text" @click="logout" style="float: right;margin-left: 5%;padding: 2%;">
                    <el-icon color="#F8F6F4" size="20px"><SwitchButton /></el-icon>
                    <span style="color: #F8F6F4;" class="language">{{ $t('logout') }}</span>
                </el-button>
            </div>
            
        
            

            

            <div style="display: inline-block;height: 8vh;width: 10%;">
                <el-avatar fit="fill" :size="40" style="float: right;margin-top: 1%;">
                    <img src="../assets/jabilimages.png">
                
                </el-avatar>
            </div>
            <div style="display: inline-block;height: 8vh;width: 10%;">
                <span style="color: white;float: left;margin-top: 15%;margin-left: 5%;">zhanglei</span>
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
    border: 1px white solid;
    
}


</style>