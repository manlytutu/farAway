<template>
   <div id='example'>
      <vicky-header fixed>
        <router-link :to="{path: '/'}" slot="leftPart">返回</router-link>
        <span slot="centerPart">Button - 按钮</span>
      </vicky-header>

      <div class="demo-block-title">
        <span>按钮 - 基础用法</span>
      </div>
      <div class="container">
        <vicky-button>默认按钮</vicky-button>
        <vicky-button type="primary">主要按钮</vicky-button>
        <vicky-button type="success">成功按钮</vicky-button>
        <vicky-button disabled>禁用按钮</vicky-button>
      </div>

   </div>
</template>

<style lang="stylus" scoped>
  #example .button
    margin 10px 0

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
