<template>
    <div class="back">
            <div class="form-container">
                <p class="title">Login</p>
                <el-form class="form" v-model="form">
                    <el-form-item class="input-group">
                        <label>Username</label>
                        <el-input placeholder="" v-model="form.username" class="input"></el-input>
                    </el-form-item>
                    <el-form-item class="input-group">
                        <label>Password</label>
                        <el-input placeholder="" v-model="form.password" class="input"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button @click="login" class="sign">Sign in</el-button>
                        <p v-show="isShow">sign in after one minute</p>
                    </el-form-item>
                </el-form>
                <div class="social-message">
                    <div class="line"></div>
                    <p class="message">Made Possible.Made Better</p>
                    <div class="line"></div>
                </div>
            </div>
        </div>
    
    
    

</template>

<script>
export default {
    name:'loginPage',
    data(){
        return{
            form:{
                username:'',
                password:''
            },
            index:0,
            isShow:false
            
        }
    },
    methods:{
        login(){
            
            if(this.form.username=='admin'&&this.form.password=='123456'){
                this.$router.push('mainHome')
            }else{
               
                let that = this
                localStorage.setItem('time',new Date().getTime())
                localStorage.setItem('count',++this.index)
                if(localStorage.getItem('count')==3){
                    this.isShow=true
                    setTimeout(function(){
                        that.isShow=false
                    } ,5000)
                }
            }
        },
        // sleep(time){
        //     let timeStamp = new Date().getTime()
        //     let end = time+timeStamp
        //     while(true){
        //         if(new Date().getTime()>end){
        //             return
        //         }
        //     }
        // }
    }
}
</script>

<style scoped>
.back{
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    background-color: #163e6a;
}
.form-container {
  width: 320px;
  border-radius: 0.75rem;
  background-color: rgba(17, 24, 39, 1);
  padding: 2rem;
  color: rgba(243, 244, 246, 1);
  margin: auto;
  transform: translate(50%,50%);
}

.title {
  text-align: center;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
}

.form {
  margin-top: 1.5rem;
}

.input-group {
  margin-top: 0.25rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.input-group label {
  display: block;
  color: rgba(156, 163, 175, 1);
  margin-bottom: 4px;
}



.sign {
  display: block;
  width: 100%;
  background-color: rgba(167, 139, 250, 1);
  padding: 0.75rem;
  text-align: center;
  color: rgba(17, 24, 39, 1);
  border: none;
  border-radius: 0.375rem;
  font-weight: 600;
}

.social-message {
  display: flex;
  align-items: center;
  padding-top: 1rem;
}

.line {
  height: 1px;
  flex: 1 1 0%;
  background-color: rgba(55, 65, 81, 1);
}

.social-message .message {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: rgba(156, 163, 175, 1);
}

.social-icons {
  display: flex;
  justify-content: center;
}

.social-icons .icon {
  border-radius: 0.125rem;
  padding: 0.75rem;
  border: none;
  background-color: transparent;
  margin-left: 8px;
}




</style>