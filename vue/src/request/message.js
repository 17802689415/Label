import { createApp, reactive } from 'vue'

import messageVue from '@/components/MessageVue.vue'

const msg = reactive({
    show: false,
    title: '',
    type:'info'
})

const $message = createApp(messageVue, {msg}).mount(document.createElement('div'))

const message = {
    show(title,type) { 
        msg.show = true
        msg.title = title
        msg.type = type
        document.body.appendChild($message.$el)
        this.getShow()
    },
    getShow(){
            let isShow = setInterval(() =>{
            msg.show = false
        },5000)
        return isShow
    },
}
export  { message }