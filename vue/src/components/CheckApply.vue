<template>
<el-scrollbar >
  <el-descriptions
  class="des"
    :title="$t('applyInfo')"
    direction="vertical"
    :column="4"
    :border="true"
  >
    <el-descriptions-item :label="$t('workCell')">{{ applyData.workCell }}</el-descriptions-item>
    <el-descriptions-item :label="$t('applicant')">{{ applyData.applicant }}</el-descriptions-item>
    <el-descriptions-item :label="$t('labelType')">{{ applyData.labelType }}</el-descriptions-item>
    <el-descriptions-item :label="$t('station')">{{ applyData.stance }}</el-descriptions-item>
    <el-descriptions-item :label="$t('productModel')">{{ applyData.productModel }}</el-descriptions-item>
    <el-descriptions-item :label="$t('productVersion')">{{ applyData.productVersion }}</el-descriptions-item>
    <el-descriptions-item :label="$t('applyQuantity')">{{ applyData.applyQuantity }}</el-descriptions-item>
    <el-descriptions-item :label="$t('productDate')">{{ applyData.productDate }}</el-descriptions-item>
  </el-descriptions>
  <el-descriptions
  class="des"
    :title="$t('supplementaryInformation')"
    direction="vertical"
    :column="4"
    :border="true"
    v-show="applyData.problemDescription=='须质量工程师及其leader进行风险评估'"
  >
    <el-descriptions-item :label="$t('labelNumber')">{{ printAgInfo.labelNumber }}</el-descriptions-item>
    <el-descriptions-item :label="$t('printReason')">{{ printAgInfo.printReason }}</el-descriptions-item>
    <el-descriptions-item :label="$t('labelImage')">
        <img :src="require('../assets/'+printAgInfo.image)" height="60">
    </el-descriptions-item>
    <el-descriptions-item :label="$t('riskAssessmentTable')">{{ printAgInfo.riskTable }}</el-descriptions-item>
  </el-descriptions>

  <el-descriptions
  class="des"
    :title="$t('deal')"
    direction="vertical"
    :column="2"
    :border="true"
  >
    <template #extra>
      <el-button @click="reject" id="btn2" color="#E06469">{{ $t('reject') }}</el-button>
      <el-button @click="approve" id="btn1" color="#1B9C85">{{ $t('approve') }}</el-button>
    </template>
    <el-descriptions-item :label="$t('problem')" width="50%">
        <el-select v-model="problem" :placeholder="$t('selectProblem')" class="select">
            <el-option 
            v-for="item in options"
            :key="item"
            :label="item"
            :value="item">
            </el-option>
        </el-select><br>
        <el-input v-model="problemInput" type="textarea" :placeholder="$t('remarkProblem')" v-show="problem=='其他'" style="margin-top: 10px;"></el-input>
        <el-button style="margin-top: 10px;" @click="submitProblem">{{ $t('submit') }}</el-button>
    </el-descriptions-item>
    <el-descriptions-item :label="$t('dealProblem')">
        <el-card class="box-card">
            <div v-for="o in problemList" :key="o" class="text item">
                <span>{{ o }}<el-button size="small" type="text" class="btn" @click="solve(o)"><el-icon><Close /></el-icon>solved</el-button></span>
            </div>
        </el-card>
    </el-descriptions-item>
  </el-descriptions>
  <el-dialog
    v-model="dialogVisible"
    :title="$t('rejectionReason')"
    :before-close="handleClose"
  >
    <el-input type="textarea" v-model="reason"></el-input>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">
          {{ $t('confirm') }}
        </el-button>
      </span>
    </template>
  </el-dialog>
</el-scrollbar>
</template>

<script>
import { message } from '@/request/message.js'
export default {
    name:'checkApply',
    data(){
        return{
            reason:'',
            dialogVisible:false,
            problem:'',
            problemInput:'',
            options:["存在申请错误或不符合作业指导文件等问题","存在系统问题或MES问题","其他"],
            problemList:[],
            id:0,
            applyData:
                {
                    workCell:'test',
                    applicant:'test',
                    labelType:'test',
                    stance:'test',
                    productModel:'test',
                    productVersion:'test',
                    applyQuantity:0,
                    productDate:'test',
                    problemDescription:'须质量工程师及其leader进行风险评估'
                }
            ,
            printAgInfo:{
                labelNumber:'test',
                printReason:'test',
                image:'logo.png',
                riskTable:'test'
            }
        }
    },
    created(){
        this.init()
    },
    methods:{
        init(){
            this.id=JSON.parse(this.$route.query.id)
            if(this.applyData.problemDescription=='须质量工程师及其leader进行风险评估'){
                this.problemList.push(this.applyData.problemDescription)
            }
        },
        submitProblem(){
            if(this.problem!='其他'){
                this.problemList.push(this.problem)
                this.problem=''
            }else{
                this.problemList.push(this.problemInput)
                this.problemInput=''
            }
            
        },
        solve(problem){
            
            this.problemList.splice(this.problemList.indexOf(problem),1)
        },
        approve(){
            if(this.problemList.length>0){
                // alert('还有问题尚未处理')
                message.show('还有问题尚未处理','danger')
            }
        },
        reject(){
            this.dialogVisible=true
        },
        handleClose(){
            this.reason=''
            this.dialogVisible=false
        }
    }
}
</script>

<style scoped>
.des{
    margin-top: 15px;
}
.btn{
    color: #FF6969;
}
.btn:hover{
    color: #87CBB9;
}

#btn2:hover{
    background-color: #B04759;
}
#btn1:hover{
    background-color: #227C70;
}
.select{
    transform: scale(0.8);
}
</style>