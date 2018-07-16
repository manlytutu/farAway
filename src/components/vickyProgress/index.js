import VickyProgress from './index.vue'

/* istanbul ignore next */
VickyProgress.install = function (Vue) {
  Vue.component(VickyProgress.name, VickyProgress)
}

export default VickyProgress
