import vRadio from './radio'

export default {
    install: Vue => {
        Vue.component(vRadio.name, vRadio)
    }
}

export {
    vRadio
}