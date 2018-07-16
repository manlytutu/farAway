import VickyButton from './components/vickyButton/index.js'
import VickyCascader from './components/vickyCascader/index.js'
import VickyCollapse from './components/vickyCollapse/index.js'
import VickyDialog from './components/vickyDialog/index.js'
import VickyHeader from './components/vickyHeader/index.js'
import VickyIcon from './components/vickyIcon/index.js'
import VickyLoading from './components/vickyLoading/index.js'
import VickyProgress from './components/vickyProgress/index.js'
import VickySelector from './components/vickySelector/index.js'
import VickySlider from './components/vickySlider/index.js'
import VickyTabs from './components/vickyTabs/index.js'
import VickyUpload from './components/vickyUpload/index.js'
// ...如果还有的话继续添加

const components = [
  VickyButton,
  VickyCascader,
  VickyCollapse,
  VickyDialog,
  VickyHeader,
  VickyIcon,
  VickyLoading,
  VickyProgress,
  VickySelector,
  VickySlider,
  VickyTabs,
  VickyUpload
  // ...如果还有的话继续添加
]

const install = function (Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

module.exports = {
  install,
  VickyButton,
  VickyCascader,
  VickyCollapse,
  VickyDialog,
  VickyHeader,
  VickyIcon,
  VickyLoading,
  VickyProgress,
  VickySelector,
  VickySlider,
  VickyTabs,
  VickyUpload
  // ...如果还有的话继续添加
}
module.exports.default = module.exports
