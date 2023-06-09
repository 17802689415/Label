import { createApp, reactive } from 'vue'

import loaderVue from '@/components/LoaderVue.vue'

const msg = reactive({
    show: false,
    title: ''
})

const $loading = createApp(loaderVue, {msg}).mount(document.createElement('div'))
// console.log($loading);
const load = {
    show(title) { // 控制显示loading的方法
        msg.show = true
        msg.title = title
        document.body.appendChild($loading.$el)
    },

    hide() { // 控制loading隐藏的方法
        msg.show = false
    }
}
export  { load }