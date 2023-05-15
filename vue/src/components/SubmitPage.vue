<template>
  <div class="submit">
    <div class="select">
        <label style="margin-right: 10px;">Select WorkCell</label>
        <el-select v-model="workCell" placeholder="Please Select">
            <el-option
            v-for="item in options"
            :key="item.id"
            :label="item.itemName"
            :value="item.itemName">
            </el-option>
        </el-select>
    </div>
    <div class="form" v-show="workCell!=''">
        
            <el-form :model="form" label-width="120px">
                <el-row class="row">
                    <el-col :span="24">
                        <el-form-item>
                            <label class="title">Label Apply Form</label>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row class="row">
                    <el-col :span="10">
                        <el-form-item>
                            <label>Label Type</label>
                            <el-input v-model="form.labelType" size="small"/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="10" :offset="2">
                        <el-form-item>
                            <label>Stance</label>
                            <el-input v-model="form.stance" size="small"/>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row class="row">
                    <el-col :span="10">
                        <el-form-item>
                            <label>ProductModel</label>
                            <el-input v-model="form.productModel" size="small"/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="10" :offset="2">
                        <el-form-item>
                            <label>ProductVersion</label>
                            <el-input v-model="form.productVersion" size="small"/>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row class="row">
                    <el-col :span="10">
                        <el-form-item>
                            <label>Quantity</label>
                            <el-input v-model="form.applyQuantity" size="small"/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="10" :offset="2">
                        <el-form-item>
                            <label>ProductDate</label>
                            <el-input v-model="form.productDate" size="small"/>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row class="btnRow">
                    <el-col :span="10">
                        <el-form-item>
                            <el-button @click="submitForm">Submit</el-button>
                        </el-form-item>
                    </el-col>
                    <el-col :span="10" :offset="2">
                        <el-form-item>
                            <el-button>Cancel</el-button>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
            <el-dialog
                title="Select Print Type"
                v-model="dialogVisible"
                width="30%"
                :before-close="beforeColse"
                >
                <el-dialog
                    title="Supplementary Information"
                    v-model="dialogVisibleAg"
                    width="30%"
                    >
                    <label>Whether to provide the original label</label><br>
                    <el-radio-group v-model="radio">
                        <el-radio label="YES">YES</el-radio>
                        <el-radio label="NO">NO</el-radio>
                    </el-radio-group>
                    <el-form v-model="suppleInfo" v-show="radio!=''">
                        <el-form-item label="LabelNumber"><el-input v-model="suppleInfo.labelNumber"></el-input></el-form-item>
                        <el-form-item label="PrintReason"><el-input v-model="suppleInfo.printReason"></el-input></el-form-item>
                        <el-form-item :label="radio=='YES'?'Upload LabelImage':'Upload RiskAssessmentForm'">
                            <el-upload
                                v-model:file-list="suppleInfo.fileList"
                                action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                                multiple
                                :on-preview="handlePreview"
                                :on-remove="handleRemove"
                                :before-remove="beforeRemove"
                                :on-exceed="handleExceed"
                                :limit="1"
                            >
                                <el-button type="primary">Click to upload</el-button>
                            </el-upload>
                        </el-form-item>
                        <el-form-item label="Recognizable or not" v-show="radio=='YES'">
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
                                Confirm
                            </el-button>
                        </span>
                    </template>
                </el-dialog>
                <span>
                    <el-tag class="tag" :color="tagColorAg" @click="printAgain">Print Again</el-tag>
                    <el-tag class="tag" :color="tagColorPl" @click="printPlan">Plan Print</el-tag>
                </span>
                <template #footer>
                    <span>
                        <el-button type="primary" @click="confirmForm">
                            Confirm
                        </el-button>
                    </span>
                </template>
            </el-dialog>
            
    </div>
    
        
    
    
  </div>
</template>

<script>
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

        }
    },
    created(){
        this.init()
    },
    methods:{
        init(){
            console.log(this.labelItemValue)
        },
        beforeColse(){
            this.tagColorPl=''
            this.tagColorAg=''
            this.dialogVisible=!this.dialogVisible
        },
        submitForm(){
            this.dialogVisible=!this.dialogVisible
        },
        confirmForm(){
            this.dialogVisible=!this.dialogVisible
            this.tagColorPl=''
            this.tagColorAg=''
        },
        printAgain(){
            this.tagColorAg='#FCFFB2'
            this.tagColorPl=''
            this.printType='printAgain'
            this.dialogVisibleAg=!this.dialogVisibleAg
            console.log(this.printType)
        },
        printPlan(){
            this.tagColorPl='#FCFFB2'
            this.tagColorAg=''
            this.printType='planPrint'
            console.log(this.printType)
        },
        confirmFormAg(){
            this.dialogVisibleAg=!this.dialogVisibleAg
            this.dialogVisible=!this.dialogVisible
            let prblemDescription = '须质量工程师及其leader进行风险评估'
            if(this.radio=='NO'){
                
                alert(prblemDescription)
            }
            if(!this.isRecognize){
                alert(prblemDescription)
            }
        }
    }
}
</script>

<style scoped>
.submit{
    width: 100%;
    display: flex;
}

.select{
    height: 6vh;
}
.form{
    width: 900px;
    height: 40vh;
    border: 1px solid white;
    margin: auto;
    background-color: aliceblue;
}
.row{
    top:10px;

}
.btnRow{
    top: 20px;
    bottom: 0px;
}
.title{
    font-weight: 700;
    font-size: 45px;
}
.tag{
    margin-left: 10px;
}
.tag:hover{
    background-color: #FCFFB2;
}

</style>