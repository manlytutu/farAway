// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible.js'

import VickyButton from '@/components/vickyButton/index'
import VickyCascader from '@/components/vickyCascader/index'
import VickyCollapse from '@/components/vickyCollapse/index'
import VickyCollapseItem from '@/components/vickyCollapse/vickyCollapseItem/item'
import VickyTabs from '@/components/vickyTabs/index'
import VickyTabsPanel from '@/components/vickyTabs/VickyTabPanel/tab-panel'
import VickySlider from '@/components/vickySlider/index'
import VickyProgress from '@/components/vickyProgress/index'
import VickyUpload from '@/components/vickyUpload/index'
import VickyIcon from '@/components/vickyIcon/index'
import VickyLoading from '@/components/vickyLoading/index'
import VickyHeader from '@/components/vickyHeader/index'
import VickyDialog from '@/components/vickyDialog/index'
import VickySelector from '@/components/vickySelector/index'
import VickySelectorItem from '@/components/vickySelector/item'
import '../static/iconfont/iconfont.css'

Vue.config.productionTip = false
Vue.component('vicky-button', VickyButton)
Vue.component('vicky-cascader', VickyCascader)
Vue.component('vicky-collapse', VickyCollapse)
Vue.component('vicky-collapse-item', VickyCollapseItem)
Vue.component('vicky-tabs', VickyTabs)
Vue.component('vicky-tabs-panel', VickyTabsPanel)
Vue.component('vicky-slider', VickySlider)
Vue.component('vicky-progress', VickyProgress)
Vue.component('vicky-upload', VickyUpload)
Vue.component('vicky-icon', VickyIcon)
Vue.component('vicky-loading', VickyLoading)
Vue.component('vicky-header', VickyHeader)
Vue.component('vicky-dialog', VickyDialog)
Vue.component('vicky-selector', VickySelector)
Vue.component('vicky-selector-item', VickySelectorItem)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
