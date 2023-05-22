<template>

        <el-menu
            class="menu"
            :collapse="this.$store.state.isCollapse"
            background-color="#212A3E"
            text-color="white"
            active-text-color="#559867"
            :router="isRouter"
            default-active="1"
            >

            
                <div style="margin: auto;width: 2vw;height: 5vh;margin-top: 1vh;">
                    <el-tooltip
                        effect="light"
                        :content="$t('expand')"
                        placement="right"
                    >
                        <el-button @click="expandMenu" circle color="#A4D0A4">
                            <el-icon size="large"><Expand /></el-icon>
                        </el-button>

                    </el-tooltip>
                </div> 

              
                    <div style="margin: auto;width: auto;height: 12vh;margin-top: 1vh;background-color: aliceblue;" v-show="!this.$store.state.isCollapse" ref="exp">
                        <div style="text-align: center;">
                            <p style="font-size: 2vh;font-weight: 600;">zhanglei</p>
                        </div>
                        <div>
                            <el-row>
                                <el-col :span="6" :offset="2">
                                    <el-link :underline="false" @click="changeLanguage" style="margin: auto;width: 1vw;height: 3vh;">
                                        <el-icon color="#025464" size="20px"><Switch /></el-icon>
                                    </el-link>
                                    <p class="text">{{ $t('language') }}</p>
                                </el-col>
                                <el-col :span="6" :offset="2">
                                    <el-link :underline="false" @click="logout" style="margin: auto;width: 1vw;height: 3vh;">
                                        <el-icon color="#025464" size="20px"><SwitchButton /></el-icon>
                                    </el-link>
                                    <p class="text">{{ $t('logout') }}</p>
                                </el-col>
                                <el-col :span="6" :offset="2">
                                    <el-link :underline="false" @click="logout" style="margin: auto;width: 1vw;height: 3vh;">
                                        <el-icon color="#025464" size="20px"><Link /></el-icon>
                                    </el-link>
                                    <p class="text">{{ $t('guidance') }}</p>
                                </el-col>
                            </el-row>
                        </div>
                    </div>
                
                    
                
                
                
            
              
     
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
            isRouter:true,
        }
    },
    methods:{
        expandMenu(){
            this.$store.state.isCollapse=!this.$store.state.isCollapse
            if(this.$store.state.isCollapse){
                this.$refs.exp.style.opacity='0'
            }
            
        },
        changeLanguage(){
            if(this.$i18n.locale == 'en'){
            this.$i18n.locale = 'zh'
            }else{
                this.$i18n.locale = 'en'
            }
        },
        logout(){
            this.$router.push('loginPage')
        },
    }
}
</script>

<style scoped>
.menu{
    float: left;
    height: 100%;
}
.menu:not(.el-menu--collapse){
    width: 250px;
}
.text{
    font-size: 1.5vh;
    font-weight: 600;
}
</style>