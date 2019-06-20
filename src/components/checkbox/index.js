import vCheckbox from './checkbox'

export default {
    install: Vue => {
        Vue.component(vCheckbox.name, vCheckbox)
    }
}

export {
    vCheckbox
}