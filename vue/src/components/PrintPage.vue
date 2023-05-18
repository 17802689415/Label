<template>
    <el-scrollbar height="80vh">
    <div class="start">
        <el-descriptions
            title="Start Label Info"
            direction="vertical"
            :column="4"
            :border="true"
            v-show="isShow"
        >
            <el-descriptions-item label="Blank Label Model">{{ form.blankLabelModel }}</el-descriptions-item>
            <el-descriptions-item label="Ribbon Model">{{ form.ribbonModel }}</el-descriptions-item>
            <el-descriptions-item label="Label Number">{{ form.labelNumber }}</el-descriptions-item>
            <el-descriptions-item label="Printer Number">{{ form.printerNumber }}</el-descriptions-item>
            <el-descriptions-item label="Image">
                <!-- <img :src="require('../assets/'+form.fileList[1])"> -->
            </el-descriptions-item>
        </el-descriptions>
            <el-form :model="form" label-width="120px" v-show="!isShow">
                <el-row class="row">
                    <el-col :span="24">
                        <el-form-item>
                            <label class="title">Start Label</label>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row class="row">
                    <el-col :span="10">
                        <el-form-item>
                            <label>Blank Label Model</label>
                            <el-input v-model="form.blankLabelModel" size="small"/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="10" :offset="2">
                        <el-form-item>
                            <label>Ribbon Model</label>
                            <el-input v-model="form.ribbonModel" size="small"/>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row class="row">
                    <el-col :span="10">
                        <el-form-item>
                            <label>Label Number</label>
                            <el-input v-model="form.labelNumber" size="small"/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="10" :offset="2">
                        <el-form-item>
                            <label>Printer Number</label>
                            <el-input v-model="form.printerNumber" size="small"/>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row class="row">
                    <el-col :span="10">
                        <el-form-item>
                            <label style="margin-right: 2vw;">Start Label Image</label>
                            <el-upload
                                v-model:file-list="form.fileList"
                                class="upload-demo"
                                action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                                multiple
                                :limit="1"
                                
                            >
                                <el-button type="primary">Click to upload</el-button>
                            </el-upload>
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
    </div>
    <el-descriptions
    class="des"
        title="Deal"
        direction="vertical"
        :column="3"
        :border="true"
        
    >
        <template #extra>
        <el-button @click="approve" color="#1B9C85">Notice Receiver</el-button>
        </template>
        <el-descriptions-item label="Whether the first check result is qualified" width="30%" >
            <el-radio-group v-model="radio" v-show="isShow">
                <el-radio :label="1">Up to standard</el-radio>
                <el-radio :label="0">Below standard</el-radio>
            </el-radio-group><br>
            <el-button style="margin-top: 10px;" @click="submit">submit</el-button>
        </el-descriptions-item>
        <el-descriptions-item label="End Label" width="30%">
            <div v-show="radio=='1'">
                <el-row>
                <el-col :span="10">
                    <label>Label Number</label>
                    <el-input v-model="end"></el-input>
                </el-col>
                <el-col :span="10" :offset="4">
                    <label>Print Quantity</label>
                    <el-input v-model="quantity"></el-input>
                </el-col>
            </el-row>
            
            
            <el-button style="margin-top: 10px;" @click="submitEnd">submit</el-button>
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
                blankLabelModel:'',
                ribbonModel:'',
                labelNumber:'',
                printerNumber:'',
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