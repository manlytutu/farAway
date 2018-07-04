<template>
   <div id='example'>
    <vicky-header fixed>
      <router-link :to="{path: '/'}" slot="leftPart">返回</router-link>
      <span slot="centerPart">Progress - 进度条</span>
    </vicky-header>

    <div class="demo-block-title">
      <span>进度条 - 基础用法</span>
    </div>
    <vicky-progress showOutterText></vicky-progress>

    <div class="demo-block-title">
      <span>进度条 - 自定义进度和颜色</span>
    </div>
    <vicky-progress :persentage="50" color="#409eff" showOutterText ></vicky-progress>

    <div class="demo-block-title">
      <span>进度条 - 进度条内部显示百分比</span>
    </div>
    <vicky-progress showInnerText :persentage="70" color="#8e71c7"></vicky-progress>

    <div class="demo-block-title">
      <span>进度条 - 不显示百分比</span>
    </div>
    <vicky-progress :persentage="40" ></vicky-progress>

    <div class="demo-block-title">
      <span>进度条 - 环形</span>
    </div>
    <vicky-progress :persentage="30" showOutterText type="circle"></vicky-progress>

    <div class="demo-block-title">
      <span>进度条 - 自定义宽度和颜色</span>
    </div>
    <vicky-progress :width="95" :persentage="80" strokeColor="#8e71c7" showOutterText type="circle"></vicky-progress>

   </div>
</template>

<style lang="stylus" scoped>

</style>

<script>

export default {
  data () {
    return {

    }
  },
  created () {

  },
  methods: {

  }
}
</script>
