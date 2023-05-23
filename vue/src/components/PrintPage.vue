<template>
    <el-scrollbar >
    <div class="start">
        <el-descriptions
            :title="$t('startLabelInfo')"
            direction="vertical"
            :column="4"
            :border="true"
            v-show="isShow"
        >
            <el-descriptions-item :label="$t('blankLabelModel')">{{ form.blankLabelModel }}</el-descriptions-item>
            <el-descriptions-item :label="$t('ribbonModel')">{{ form.ribbonModel }}</el-descriptions-item>
            <el-descriptions-item :label="$t('labelNumber')">{{ form.labelNumber }}</el-descriptions-item>
            <el-descriptions-item :label="$t('printerNumber')">{{ form.printerNumber }}</el-descriptions-item>
            <el-descriptions-item :label="$t('image')">
                <!-- <img :src="require('../assets/'+form.fileList[1])"> -->
            </el-descriptions-item>
        </el-descriptions>
            <el-form :model="form" label-width="120px" v-show="!isShow">
                <el-row class="row">
                    <el-col :span="24">
                        <el-form-item>
                            <label class="title">{{ $t('startLabelInfo') }}</label>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row class="row">
                    <el-col :span="10">
                        <el-form-item>
                            <label>{{ $t('blankLabelModel') }}</label>
                            <el-input v-model="form.blankLabelModel" size="small"/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="10" :offset="2">
                        <el-form-item>
                            <label>{{ $t('ribbonModel') }}</label>
                            <el-input v-model="form.ribbonModel" size="small"/>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row class="row">
                    <el-col :span="10">
                        <el-form-item>
                            <label>{{ $t('labelNumber') }}</label>
                            <el-input v-model="form.labelNumber" size="small"/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="10" :offset="2">
                        <el-form-item>
                            <label>{{ $t('printerNumber') }}</label>
                            <el-input v-model="form.printerNumber" size="small"/>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row class="row">
                    <el-col :span="10">
                        <el-form-item>
                            <label style="margin-right: 2vw;">{{ $t('image') }}</label>
                            <el-upload
                                v-model:file-list="form.fileList"
                                class="upload-demo"
                                action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                                multiple
                                :limit="1"
                                
                            >
                                <el-button type="primary">{{ $t('clickUpload') }}</el-button>
                            </el-upload>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row class="btnRow">
                    <el-col :span="10">
                        <el-form-item>
                            <el-button @click="submitForm">{{ $t('submit') }}</el-button>
                        </el-form-item>
                    </el-col>
                    <el-col :span="10" :offset="2">
                        <el-form-item>
                            <el-button>{{ $t('cancel') }}</el-button>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
    </div>
    <el-descriptions
    class="des"
        :title="$t('deal')"
        direction="vertical"
        :column="3"
        :border="true"
        
    >
        <template #extra>
        <el-button @click="approve" color="#1B9C85">{{ $t('noticeReceiver') }}</el-button>
        </template>
        <el-descriptions-item :label="$t('isQualified')" width="30%" >
            <el-radio-group v-model="radio" v-show="isShow">
                <el-radio :label="1">{{ $t('upTostandard') }}</el-radio>
                <el-radio :label="0">{{ $t('belowStandard') }}</el-radio>
            </el-radio-group><br>
            <el-button style="margin-top: 10px;" @click="submit">{{ $t('submit') }}</el-button>
        </el-descriptions-item>
        <el-descriptions-item :label="$t('endLabel')" width="30%">
            <div v-show="radio=='1'">
                <el-row>
                <el-col :span="10">
                    <label>{{ $t('labelNumber') }}</label>
                    <el-input v-model="end"></el-input>
                </el-col>
                <el-col :span="10" :offset="4">
                    <label>{{ $t('printQuantity') }}</label>
                    <el-input v-model="quantity"></el-input>
                </el-col>
            </el-row>
            
            
            <el-button style="margin-top: 10px;" @click="submitEnd">{{ $t('submit') }}</el-button>
            </div>
            
        </el-descriptions-item>
    </el-descriptions>
</el-scrollbar>
</template>

<script>
export default {
    name:'printPage',
    data(){
        return{
            form:{
                blankLabelModel:'test',
                ribbonModel:'test',
                labelNumber:'test',
                printerNumber:'test',
                // fileList:['homelogo.png']
            },
            
            radio:'',
            end:'',
            quantity:0,
            isShow:true
        }
    },
    methods:{
        submitForm(){

        },
        approve(){

        },
        submit(){
            console.log(this.radio)
        },
        submitEnd(){

        }
    }
}
</script>

<style scoped>
.des{
    margin-top: 15px;
}
.start{
    padding-bottom: 1vh;
    background-color: aliceblue;
}
.row{
    top:1vh;

}
.btnRow{
    top: 2vh;
}
.title{
    font-weight: 700;
    font-size: 45px;
}
</style>