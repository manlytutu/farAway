<template>
   <div id='example'>
      <vicky-header fixed>
        <router-link :to="{path: '/'}" slot="leftPart">返回</router-link>
        <span slot="centerPart">Slider - 滑块</span>
      </vicky-header>

      <div class="demo-block-title">
        <span>滑块 - 基础用法</span>
      </div>
      <vicky-slider v-model="value1"></vicky-slider>
      {{value1}}

      <div class="demo-block-title">
        <span>滑块 - 隐藏进度提示</span>
      </div>
      <vicky-slider v-model="value2" :messageIsShow="messageIsShow" :value="value2"></vicky-slider>
      {{value2}}
      <div class="demo-block-title">
        <span>滑块 - 自定义进度</span>
      </div>
      <vicky-slider v-model="value3" :value="value3"></vicky-slider>
      {{value3}}
   </div>
</template>

<style lang="stylus" scoped>
#example
  .demo-block-title
    margin-bottom 15px
</style>

<script>

export default {
  data () {
    return {
      messageIsShow: false,
      value1: '',
      value2: 30,
      value3: 60
    }
  },
  created () {

  },
  methods: {

  }
}
</script>
