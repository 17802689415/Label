<template>
  <el-descriptions
  class="des"
    title="Apply Info"
    direction="vertical"
    :column="4"
    :border="true"
  >
    <el-descriptions-item label="WorkCell">{{ applyData.workCell }}</el-descriptions-item>
    <el-descriptions-item label="Applicant">{{ applyData.applicant }}</el-descriptions-item>
    <el-descriptions-item label="LabelType">{{ applyData.labelType }}</el-descriptions-item>
    <el-descriptions-item label="Station">{{ applyData.stance }}</el-descriptions-item>
    <el-descriptions-item label="ProductModel">{{ applyData.productModel }}</el-descriptions-item>
    <el-descriptions-item label="ProductVersion">{{ applyData.productVersion }}</el-descriptions-item>
    <el-descriptions-item label="ApplyQuantity">{{ applyData.applyQuantity }}</el-descriptions-item>
    <el-descriptions-item label="ProductDate">{{ applyData.productDate }}</el-descriptions-item>
  </el-descriptions>
  <el-descriptions
  class="des"
    title="Supplement Info"
    direction="vertical"
    :column="4"
    :border="true"
    v-show="applyData.problemDescription=='须质量工程师及其leader进行风险评估'"
  >
    <el-descriptions-item label="LabelNumber">{{ printAgInfo.labelNumber }}</el-descriptions-item>
    <el-descriptions-item label="PrintReason">{{ printAgInfo.printReason }}</el-descriptions-item>
    <el-descriptions-item label="LabelImage">
        <img :src="require('../assets/'+printAgInfo.image)" height="60">
    </el-descriptions-item>
    <el-descriptions-item label="PrintReason">{{ printAgInfo.riskTable }}</el-descriptions-item>
  </el-descriptions>

  <el-descriptions
  class="des"
    title="Deal"
    direction="vertical"
    :column="2"
    :border="true"
  >
    <template #extra>
      <el-button @click="reject">Reject</el-button>
      <el-button @click="approve">Approve</el-button>
    </template>
    <el-descriptions-item label="Problem" width="50%">
        <el-select v-model="problem" placeholder="请选择问题类型">
            <el-option
            v-for="item in options"
            :key="item"
            :label="item"
            :value="item">
            </el-option>
        </el-select><br>
        <el-input v-model="problemInput" type="textarea" placeholder="请备注问题" v-show="problem=='其他'" style="margin-top: 10px;"></el-input>
        <el-button style="margin-top: 10px;" @click="submitProblem">submit</el-button>
    </el-descriptions-item>
    <el-descriptions-item label="Deal">
        <el-card class="box-card">
            <div v-for="o in problemList" :key="o" class="text item">
                <span>{{ o }}<el-button size="small" type="text" class="btn" @click="solve(o)"><el-icon><Close /></el-icon>solved</el-button></span>
            </div>
        </el-card>
    </el-descriptions-item>
  </el-descriptions>
  <el-dialog
    v-model="dialogVisible"
    title="Remarks Rejection Reason"
    :before-close="handleClose"
  >
    <el-input type="textarea" v-model="reason"></el-input>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
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
                alert('还有问题尚未处理')
            }
        },
        reject(){
            this.dialogVisible=true
        },
        handleClose(){
            this.reason=''
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
</style>