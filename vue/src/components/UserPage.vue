<template>
<div>
        <label class="sel">Role</label>
        <el-select v-model="roleSelect" placeholder="Please Select">
            <el-option
            v-for="item in stepOptions"
            :key="item"
            :label="item"
            :value="item">
            </el-option>
        </el-select>
        <label class="sel">Status</label>
        <el-select v-model="statusSelect" placeholder="Please Select">
            <el-option
            v-for="item in statusOptions"
            :key="item"
            :label="item"
            :value="item">
            </el-option>
        </el-select>
    </div>
 
    <el-table :data="tableData" class="tab">
        <el-table-column label="Id" prop="id" />
        <el-table-column label="Username" prop="username" />
        <el-table-column label="EmpId" prop="empId" />
        <el-table-column label="Email" prop="email" />
        <el-table-column label="Role" prop="role" />
        <el-table-column >
        <template #header> 
            <el-select v-model="workCell" placeholder="WorkCell to search" size="small">
                <el-option
                v-for="item in options"
                :key="item"
                :label="item"
                :value="item">
                </el-option>
            </el-select>
        </template>
        <template #default="scope">
            <el-button
            size="small"
            type="danger"
            @click="handleDeal(scope.row)"
            >Deal</el-button
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
</template>

<script>
export default {
    name:'userPage',
    data(){
      return{
            currentPage:1,
            pageSize:10,
            total:0,
            small:true,
            background:true,
            tableData:[
                {
                    id:0,
                    username:'zhanglei',
                    empId:'3554536',
                    email:'LeiZhang@jabil.com',
                    role:'admin'
                },
                
            ],
            workCell:'',
            options:[
                'test'
            ],
            roleSelect:'',
            statusSelect:'',
            roleOptions:['role'],
            statusOptions:['status']
      }
    }
}
</script>

<style scoped>
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