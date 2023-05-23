<template>
    <div class="box">
        <label class="sel">{{ $t('step') }}</label>
        <el-select v-model="stepSelect" placeholder="Please Select" @change="selectStep">
            <el-option
            v-for="item in stepOptions"
            :key="item"
            :label="item"
            :value="item">
            </el-option>
        </el-select>
        <label class="sel">{{ $t('status') }}</label>
        <el-select v-model="statusSelect" placeholder="Please Select" @change="selectStatus">
            <el-option
            v-for="item in statusOptions"
            :key="item"
            :label="item"
            :value="item">
            </el-option>
        </el-select>
        
    </div>
 
    <el-table :data="tableData" class="tab">
        <el-table-column :label="$t('id')" prop="id" />
        <el-table-column :label="$t('step')" prop="step" />
        <el-table-column :label="$t('status')" prop="status" />
        <el-table-column :label="$t('problemDescription')" prop="problemDescription" />
        <el-table-column >
        <template #header> 
            <el-select v-model="workCell" :placeholder="$t('workCellToSearch')" size="small" @change="selectWorkCell">
                <el-option
                v-for="item in options"
                :key="item.id"
                :label="item.itemName"
                :value="item.itemName">
                </el-option>
            </el-select>
        </template>
        <template #default="scope">
            <el-button
            size="small"
            type="danger"
            @click="handleDeal(scope.row)"
            >{{ $t('deal') }}</el-button
            >
        </template>
        </el-table-column>
    </el-table>


    <div >
        <el-pagination
        class="pag"
            v-model:current-page="currentPage"
            v-model:page-size="pageSize"
            :page-sizes="[10, 15, 20, 25]"
            :small="small"
            :background="background"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
        />
    </div>

    <el-dialog
        v-model="dialogVisible"
        :title="$t('steps')"
        :before-close="handleClose"
    >
    <el-steps align-center :active="activeStep" :process-status="processStatus" finish-status="success">
        <el-step v-for="o in step" :key="o.id" :title="o.step" :description="o.status" @click="goPage(o.step)"></el-step>
    </el-steps>
    <el-dialog
        v-model="innerVisible"
        :title="$t('confirm')"
      >
      <el-button @click="receive">{{ $t('receive') }}</el-button>
    </el-dialog>
    <el-dialog
        v-model="innerVisibleAg"
        :title="$t('reconciliationOfAccounts')"
        :before-close="closeScrap"
      >
      <label>{{ $t('scrapQuantity') }}</label>
      <el-input v-model="scrapQuantity" style="margin-bottom: 10px;"></el-input>
      <label>{{ $t('scrapReason') }}</label>
      <el-input v-model="scrapReason" type="textarea" style="margin-bottom: 10px;"></el-input>
      <label>{{ $t('scrapForm') }}</label>
      <el-upload
          v-model:file-list="fileList"
          class="upload-demo"
          action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
          multiple
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          :limit="3"
          :on-exceed="handleExceed"
      >
          <el-button type="primary">{{ $t('clickUpload') }}</el-button>
          <template #tip>
          <div class="el-upload__tip">
              jpg/png files with a size less than 500KB.
          </div>
          </template>
      </el-upload>
      <el-button @click="submitScrap">{{ $t('submit') }}</el-button>
    </el-dialog>
      
    </el-dialog>


</template>

<script>
export default {
    name:'dealCase',
    data(){
        return{
            applyId:0,
            description:'',
            step:[
            {
                    id:0,
                    step:'提交申请',
                    status:'',
                },
                {
                    id:1,
                    step:'审核申请',
                    status:''
                },
                {
                    id:2,
                    step:'打印',
                    status:''
                },
                {
                    id:3,
                    step:'领用',
                    status:''
                },
                {
                    id:4,
                    step:'对账',
                    status:''
                },
                {
                    id:5,
                    step:'END',
                    status:''
                },
            ],
            processStatus:'process',
            activeStep:0,
            currentPage:1,
            pageSize:10,
            total:0,
            small:true,
            background:true,
            tableData:[
                {
                    id:0,
                    step:'审核申请',
                    problemDescription:'须质量工程师及其leader进行风险评估',
                    status:'待审核'
                },
                {
                    id:1,
                    step:'审核申请',
                    problemDescription:'存在申请错误或不符合作业指导文件等问题',
                    status:'审核中'
                },
                {
                    id:2,
                    step:'打印',
                    problemDescription:'',
                    status:'待打印'
                },
                {
                    id:3,
                    step:'领用',
                    problemDescription:'',
                    status:'待领用'
                },
                {
                    id:4,
                    step:'对账',
                    problemDescription:'',
                    status:'提交报废信息'
                },
                {
                    id:5,
                    step:'END',
                    problemDescription:'No Problem',
                    status:'已完结'
                },
            ],
            workCell:'',
            options:[
                {
                    id:1,
                    itemName:'test'
                }
            ],
            dialogVisible:false,
            innerVisible:false,
            innerVisibleAg:false,
            stepValue:'',
            scrapQuantity:0,
            scrapReason:'',
            fileList:[],
            stepSelect:'',
            stepOptions:['step'],
            statusSelect:'',
            statusOptions:['status']
        }
    },
    created(){
        this.init()
    },
    methods:{
        init(){
            
        },
        selectStep(val){
            console.log(val)
        },
        selectStatus(val){
            console.log(val)
        },
        selectWorkCell(val){
            console.log(val)
        },
        handleSizeChange(){
            
        },
        handleCurrentChange(){

        },
        handleClose(){
            this.processStatus ='process'
            this.activeStep = 0
            this.step=[
            {
                    id:0,
                    step:'提交申请',
                    status:'',
                },
                {
                    id:1,
                    step:'审核申请',
                    status:''
                },
                {
                    id:2,
                    step:'打印',
                    status:''
                },
                {
                    id:3,
                    step:'领用',
                    status:''
                },
                {
                    id:4,
                    step:'对账',
                    status:''
                },
                {
                    id:5,
                    step:'END',
                    status:''
                },
            ],
            this.dialogVisible=!this.dialogVisible
        },
        handleDeal(row){
            this.applyId=row.id
            this.stepValue=row.step
            this.dialogVisible=!this.dialogVisible
            console.log(row)
            let that = this
            this.step.forEach(element => {
                if(row.step==element.step){
                    that.activeStep=element.id
                    that.step[element.id].status=row.problemDescription
                    if(row.problemDescription!='No Problem'&&row.problemDescription!=''){
                        that.processStatus='finish'
                    }
                    if(row.problemDescription=='No Problem'){
                        that.processStatus='success'
                    }
                    if(row.problemDescription==''){
                        that.processStatus='process'
                    }
                }
            });
        },
        goPage(step){
            if(step=='审核申请'&&this.stepValue=='审核申请'){
                this.$router.push({name:'checkApply',query:{id:JSON.stringify(this.applyId)}})
            }
            if(step=='打印'&&this.stepValue=='打印'){
                this.$router.push({name:'printPage',query:{id:JSON.stringify(this.applyId)}})
            }
            if(step=='领用'&&this.stepValue=='领用'){
                this.innerVisible=true
            }
            if(step=='对账'&&this.stepValue=='对账'){
                this.innerVisibleAg=true
            }
        },
        receive(){
            this.activeStep=4
            this.innerVisible=false
        },
        submitScrap(){
            console.log(this.fileList)
        },
        closeScrap(){
            this.scrapQuantity=0
            this.scrapReason=''
            this.fileList=[]
            this.innerVisibleAg=false
        }
    }
}
</script>

<style scoped>

.box{
   
    width: auto;
}
.tab{
    margin-top: 20px;
}
.pag{
    background-color: white;
}
.sel{
    margin-left: 20px;
    margin-right: 15px;
    color: black;
}
</style>