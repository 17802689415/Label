<template>
 
        <el-tag v-show="msg.show" class="tag"  :type="msg.type" @click="handleClose">
            <span style="font-size: 30px;font-weight: 600;">{{ msg.title }}</span>
        </el-tag>
 
    
</template>
<script>
import {message} from '../request/message.js'
export default {
    name:'messageVue',
    props:{
        msg:Object
    },
    data(){
        return{
            
        }
        
    },
    methods:{
        handleClose(){
            message.hide()
        }
    }
}
</script>
<style scoped>
.tag{
    /* position: relative; */
    width: 900px;
    height: 60px;
    position: fixed;
    top: 0;
    left: 50%;
    margin: auto;

}
</style>