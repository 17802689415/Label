<template>
    <div class="back">
            <div class="form-container">
              <div class="img">
                <el-avatar fit="fill" :size="80">
                  <img src="../assets/jabilLogo.png">
                </el-avatar>
              </div>
              
                <p class="title">Label TE SR Login</p>
                <el-form class="form" v-model="form">
                    <el-form-item class="input-group" >
                        <label ref="user">Username</label>
                        <el-input placeholder="" v-model="form.username" class="input" @blur="user()" >
                            <template #prefix>
                                <img src="../assets/person-outline.svg" height="20">
                            </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item class="input-group">
                        <label ref="pass">Password</label>
                        <el-input placeholder="" v-model="form.password" class="input" type="password" @blur="pass()" >
                            <template #prefix>
                                <img src="../assets/key-outline.svg" height="20">
                            </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button @click="login" class="sign" :disabled="dis">Sign in</el-button>
                        <p v-show="isShow">sign in after one minute</p>
                        <!-- <p v-show="userRule">{{userMsg}}</p>
                        <p v-show="passRule">{{passMsg}}</p> -->
                    </el-form-item>
                </el-form>
                <div class="social-message">
                    <div class="line"></div>
                    <p class="message">Made Possible.Made Better.</p>
                    <div class="line"></div>
                </div>
            </div>
        </div>
    
    
    

</template>

<script>
import {message} from '@/request/message.js'
import {getToken} from '@/request/token.js'
export default {
    name:'loginPage',
    data(){
        return{
            form:{
                username:'',
                password:''
            },
            index:0,
            isShow:false,
            dis:false,
        }
    },
    created(){
      if(getToken()){
        this.init()
      }
      
    },
    methods:{
        async init(){
          
          await this.$axios.get('/admin/protected',{
            headers:{
              'accept':'application/json'
            }
          }).then((res) => {
            console.log(res)
            this.$router.push('dealCase')
          })
        },
        async login(){
            
          await this.$axios.post('/admin/token',{
            username:this.form.username,
            password:this.form.password
          },{
            headers:{
              'Content-Type':'application/x-www-form-urlencoded'
            }
          }).then((res) => {
            console.log(res)
            if(res.status==200){
              localStorage.setItem('user',this.form.username)
              localStorage.setItem('token',res.data.access_token)
              this.$router.push('dealCase')
            }else{
                  localStorage.setItem('time',new Date().getTime())
                  localStorage.setItem('count',++this.index)
                  if(localStorage.getItem('count')==3){
                      this.isShow=true
                      this.dis=true
                      setTimeout(() => {
                          this.isShow=false
                          this.dis=false
                          this.index=0
                      } ,5000)
                  }
            }
          })
        },
        user(){
          if(this.form.username.length!=7){
            message.show('Please enter a seven digit account','danger')
            this.$refs.user.style.color='#E57C23'
          }else{
            this.$refs.user.style.color='#F8F1F1'
          }
        },
        pass(){
          if(this.form.password.length==0){
            message.show('Please enter password','danger')
            this.$refs.pass.style.color='#E57C23'
          }else{
            this.$refs.pass.style.color='#F8F1F1'
          }
        }
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

.img{
  width: 100px;
  margin: auto;
}
.form-container {
  width: 320px;
  height: 450px;
  border-radius: 0.75rem;
  background-color: rgba(17, 24, 39, 1);
  padding: 2rem;
  color: rgba(243, 244, 246, 1);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
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
  color: #F8F1F1;
  margin-bottom: 4px;
}



.sign {
  display: block;
  width: 100%;
  background-color: #408E91;
  padding: 0.75rem;
  text-align: center;
  color: rgba(17, 24, 39, 1);
  border: none;
  border-radius: 0.375rem;
  font-weight: 600;
}

.sign:hover{
  color: burlywood;
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






</style>