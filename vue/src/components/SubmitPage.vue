<template>
  <div class="submit">
    <div class="select">
        <label class="sel">{{ $t('selectWorkCell') }}</label><br>
        <el-select v-model="workCell" :placeholder="$t('selectWorkCell')" class="sel">
            <el-option
            v-for="item in options"
            :key="item.id"
            :label="item.itemName"
            :value="item.itemName">
            </el-option>
        </el-select>
        <el-descriptions
            class="info"
            :column="2"
            size="small"
            :border="true"
        >
            <el-descriptions-item>
            <template #label>
                <div class="cell-item">
                    <el-icon><User /></el-icon>
                    {{ $t('username') }}
                </div>
            </template>
                {{ username }}
            </el-descriptions-item>
            <el-descriptions-item>
            <template #label>
                <div class="cell-item">
                    <el-icon><PriceTag /></el-icon>
                    {{ $t('empId') }}
                </div>
            </template>
                {{ empId }}
            </el-descriptions-item>
            <el-descriptions-item>
            <template #label>
                <div class="cell-item">
                    <el-icon><Timer /></el-icon>
                    {{ $t('applyDate') }}
                </div>
            </template>
            <el-date-picker
                v-model="applyDate"
                type="datetime"
                format="YYYY/MM/DD hh:mm:ss"
                :readonly="true"
            />
            </el-descriptions-item>
            <el-descriptions-item>
            <template #label>
                <div class="cell-item">
                    <el-icon><Position /></el-icon>
                    VA/WI
                </div>
            </template>
            <el-radio-group v-model="isHave" disabled class="ml-4">
                <el-radio :label="true" size="small">true</el-radio>
                <el-radio :label="false" size="small">false</el-radio>
            </el-radio-group>
            </el-descriptions-item>
        </el-descriptions>
    </div>

    <!-- 申请表 -->
    <div class="form" v-show="workCell!=''">
        
            <el-form :model="form"  ref="form">
                <el-row class="row" justify="center">
                    
                    
                        <el-form-item>
                            <label class="title" >{{ $t('labelApplyForm') }}</label>
                        </el-form-item>
                    
                    
                </el-row>
                <el-row class="row">
                    <el-col :span="10" :offset="1">
                        <el-form-item>
                            <label>{{ $t('labelType') }}</label>
                            <el-input v-model="form.labelType" size="small" class="input"/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="10" :offset="2">
                        <el-form-item>
                            <label>{{ $t('station') }}</label>
                            <el-input v-model="form.stance" size="small" class="input"/>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row class="row">
                    <el-col :span="10" :offset="1">
                        <el-form-item>
                            <label>{{ $t('productModel') }}</label>
                            <el-input v-model="form.productModel" size="small" class="input"/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="10" :offset="2">
                        <el-form-item>
                            <label>{{ $t('productVersion') }}</label>
                            <el-input v-model="form.productVersion" size="small" class="input"/>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row class="row">
                    <el-col :span="10" :offset="1">
                        <el-form-item>
                            <label>{{ $t('quantity') }}</label>
                            <el-input v-model="form.applyQuantity" size="small" class="input"/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="10" :offset="2">
                        <el-form-item>
                            <label>{{ $t('productDate') }}</label>
                            <el-input v-model="form.productDate" size="small" class="input"/>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row class="btnRow">
                    <el-col :span="10" :offset="1">
                        <el-form-item>
                            <el-button @click="submitForm()" class="btn" color="#1B9C85" id="btn1">{{ $t('submit') }}</el-button>
                        </el-form-item>
                    </el-col>
                    <el-col :span="10" :offset="2">
                        <el-form-item>
                            <el-button class="btn" color="#E06469" id="btn2" @click="cancel()">{{ $t('cancel') }}</el-button>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
            <!-- 选择打印类型 -->
            <el-dialog
                :title="$t('selectPrintType')"
                v-model="dialogVisible"
                width="30%"
                :before-close="beforeColse"
                >
               
                <el-dialog
                :title="$t('supplementaryInformation')"
                    v-model="dialogVisibleAg"
                    width="30%"
                    :before-close="beforeColseAg"
                    >
                    <label>{{ $t('originalLabel') }}</label><br>
                    <el-radio-group v-model="radio">
                        <el-radio label="YES">YES</el-radio>
                        <el-radio label="NO">NO</el-radio>
                    </el-radio-group>
                    <el-form v-model="suppleInfo" v-show="radio!=''">
                        <el-form-item :label="$t('labelNumber')"><el-input v-model="suppleInfo.labelNumber"></el-input></el-form-item>
                        <el-form-item :label="$t('printReason')"><el-input v-model="suppleInfo.printReason"></el-input></el-form-item>
                        <el-form-item :label="radio=='YES'?$t('uploadLabelImage'):$t('uploadRiskAssessmentForm')">
                            <el-upload
                                v-model:file-list="suppleInfo.fileList"
                                action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                                multiple
                                :limit="1"
                            >
                                <el-button type="primary">{{ $t('clickUpload') }}</el-button>
                            </el-upload>
                        </el-form-item>
                        <el-form-item :label="$t('recognizable')" v-show="radio=='YES'">
                            <el-switch
                            v-model="suppleInfo.isRecognize"
                            active-color="#13ce66"
                            inactive-color="#ff4949">
                            </el-switch>
                        </el-form-item>
                    </el-form>
                    <template #footer>
                        <span>
                            <el-button type="primary" @click="confirmFormAg">
                                {{ $t('confirm') }}
                            </el-button>
                        </span>
                    </template>
                </el-dialog>
                <span>
                    <el-tag class="tag" :color="tagColorAg" @click="printAgain">{{ $t('reprint') }}</el-tag>
                    <el-tag class="tag" :color="tagColorPl" @click="printPlan">{{ $t('planPrint') }}</el-tag>
                </span>
                <template #footer>
                    <span>
                        <el-button type="primary" @click="confirmForm">
                            {{ $t('confirm') }}
                        </el-button>
                    </span>
                </template>
            </el-dialog>
            
    </div>
    
        
    
    
  </div>
</template>

<script>
import {message} from '@/request/message.js'

export default {
    name:'submitPage',
    data(){
        return{
            workCell:'',
            options:[
                {
                    id:1,
                    itemName:'test'
                }
            ],
            form:{
                labelType:'',
                stance:'',
                productModel:'',
                productVersion:'',
                applyQuantity:0,
                productDate:''
            },
            printType:'',
            suppleInfo:{
                labelNumber:'',
                printReason:'',
                fileList:[],
                isRecognize:true
            },
            dialogVisible:false,
            dialogVisibleAg:false,
            tagColorAg:'',
            tagColorPl:'',
            radio:'',
            applyDate:this.getTime(),
            username:'zhanglei',
            empId:'3554536',
            isHave:false

        }
    },
    created(){
        
    },
   
    methods:{
        //申请时间
        getTime(){
                let time = setInterval(() =>{
                this.applyDate=new Date()
            },1000)
            return time
        },

        //选择打印类型的取消按钮
        beforeColse(){
            this.tagColorPl=''
            this.tagColorAg=''
            this.printType=''
            this.dialogVisible=!this.dialogVisible
        },
         //填写重新打印补充信息的取消按钮
        beforeColseAg(){
            this.suppleInfo.labelNumber=''
            this.suppleInfo.printReason=''
            this.suppleInfo.fileList=[]
            this.suppleInfo.isRecognize=true
            this.tagColorAg=''
            this.printType=''
            this.dialogVisibleAg=!this.dialogVisibleAg
        },

        //提交申请表
        submitForm(){
            this.dialogVisible=!this.dialogVisible
        },
        //提交打印类型
        confirmForm(){
            console.log(this.printType)
            if(this.printType==''){
                message.show('请选择打印类型','danger')
            }else{
                this.dialogVisible=!this.dialogVisible
                this.tagColorPl=''
                this.tagColorAg=''
                message.show('提交完成','success')
                this.$router.push('dealCase')
            }    
        },

        //选择重新打印类型
        printAgain(){
            this.tagColorAg='#FCFFB2'
            this.tagColorPl=''
            this.printType='printAgain'
            this.dialogVisibleAg=!this.dialogVisibleAg
            console.log(this.printType)
        },
        //选择计划打印类型
        printPlan(){
            this.tagColorPl='#FCFFB2'
            this.tagColorAg=''
            this.printType='planPrint'
            console.log(this.printType)
        },
        //提交重新打印补充信息
        confirmFormAg(){
            this.dialogVisibleAg=!this.dialogVisibleAg
            this.dialogVisible=!this.dialogVisible
            let prblemDescription = '须质量工程师及其leader进行风险评估'
            if(this.radio=='NO'){
                
               message.show(prblemDescription,'success')
               this.$router.push('dealCase')
            }
            if(!this.isRecognize){
                
                message.show(prblemDescription,'success')
                this.$router.push('dealCase')
            }
        },

        cancel(){
            this.form.labelType=''
            this.form.stance=''
            this.form.productModel=''
            this.form.productVersion=''
            this.form.applyQuantity=0
            this.form.productDate=''
        },
        
    }
}
</script>

<style scoped>
.submit{
    width: 100%;
    /* display: flex; */
}
.sel{
    margin-top: 10px;
    margin-left: 20px;
}

.select{
    height: 80px;
    width: 60%;
    background-color: aliceblue;
    /* position: absolute; */
    
    left: 0;
    right: 0;
    margin: auto;
    padding: 10px;
    border-radius: 50px;
}
.form{
    width: 800px;
    height: 450px;
    border: 1px solid white;
    
    margin: auto;
    margin-top: 50px;
    background-color: aliceblue;
}

.row{
    top:10px;

}
.btnRow{
    top: 40px;
    
}
.btn{
    width: 100%;
}
#btn2:hover{
    background-color: #B04759;
}
#btn1:hover{
    background-color: #227C70;
}
.title{
    font-weight: 700;
    font-size: 30px;
    
}

.tag{
    margin-left: 10px;
}
.tag:hover{
    background-color: #FCFFB2;
}

.info{
   float: right;
   width: 60%;
   margin-top: -20px;
   margin-right: 20px;
}


</style>