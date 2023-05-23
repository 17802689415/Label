import { createApp, reactive } from 'vue'

import messageVue from '../components/MessageVue.vue'

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
        console.log('222')
        document.body.appendChild($message.$el)
        this.getShow()
    },
    getShow(){
            let isShow = setTimeout(() =>{
            msg.show = false
        },5000)
        return isShow
    },
    hide(){
        msg.show = false
        console.log('ooooo')
    }
}
export  { message }