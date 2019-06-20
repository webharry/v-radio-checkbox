import Vue from 'vue'
import App from './App.vue'
import { vRadio, vCheckbox } from '../src/index'

Vue.config.productionTip = false

Vue.use(vRadio)
Vue.use(vCheckbox)

new Vue({
    el: "#app",
    components: { App },
    template: '<App/>'
})
