import { createRouter,createWebHashHistory } from "vue-router";

import submitPage from '../components/SubmitPage.vue'
import userPage from '../components/UserPage.vue'
import dealCase from '../components/DealCase.vue'
import checkApply from '../components/CheckApply.vue'
import printPage from '../components/PrintPage.vue'
import mainHome from '../components/MainHome.vue'

const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {name:'mainHome',path:'/mainHome',component:mainHome,children:[
            {name:'submitPage',path:'/submitPage',component:submitPage},
            {name:'userPage',path:'/userPage',component:userPage},
            {name:'dealCase',path:'/dealCase',component:dealCase},
            {name:'checkApply',path:'/checkApply',component:checkApply},
            {name:'printPage',path:'/printPage',component:printPage},
            
        ]},
        
        {path:'/',redirect:'/loginPage'},
    ]

})


export default router