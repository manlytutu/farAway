import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/example/index'
import VickyButton from '@/example/vickyButton'
import VickyCascader from '@/example/vickyCascader'
import VickyCollapse from '@/example/vickyCollapse'
import VickyTabs from '@/example/vickyTabs'
import VickySlider from '@/example/vickySlider'
import VickyProgress from '@/example/vickyProgress'
import VickyUpload from '@/example/vickyUpload'
import VickyIcon from '@/example/vickyIcon'
import VickyLoading from '@/example/vickyLoading'
import VickyHeader from '@/example/vickyHeader'
import VickyDialog from '@/example/vickyDialog'
import VickySelector from '@/example/vickySelector'
Vue.use(Router)

export default new Router({
  mode: 'history', // 去掉url中的#号
  routes: [{
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/vickyButton',
    name: 'VickyButton',
    component: VickyButton
  },
  {
    path: '/vickyCascader',
    name: 'vickyCascader',
    component: VickyCascader
  },
  {
    path: '/vickyCollapse',
    name: 'vickyCollapse',
    component: VickyCollapse
  },
  {
    path: '/vickyTabs',
    name: 'vickyTabs',
    component: VickyTabs
  },
  {
    path: '/vickySlider',
    name: 'vickySlider',
    component: VickySlider
  },
  {
    path: '/vickyProgress',
    name: 'vickyProgress',
    component: VickyProgress
  },
  {
    path: '/vickyUpload',
    name: 'vickyUpload',
    component: VickyUpload
  },
  {
    path: '/vickyIcon',
    name: 'vickyIcon',
    component: VickyIcon
  },
  {
    path: '/vickyLoading',
    name: 'vickyLoading',
    component: VickyLoading
  },
  {
    path: '/vickyHeader',
    name: 'vickyHeader',
    component: VickyHeader
  },
  {
    path: '/vickyDialog',
    name: 'vickyDialog',
    component: VickyDialog
  },
  {
    path: '/vickySelector',
    name: 'vickySelector',
    component: VickySelector
  }]
})
