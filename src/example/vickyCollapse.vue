<template>
   <div id='example'>
      <vicky-header fixed>
        <router-link :to="{path: '/'}" slot="leftPart">返回</router-link>
        <span slot="centerPart">Collapase - 折叠面板</span>
      </vicky-header>

      <div class="demo-block-title">
        <span>折叠面板 - 基础用法</span>
      </div>
      <vicky-collapse>
        <vicky-collapse-item title="标题1" content="内容1"></vicky-collapse-item>
        <vicky-collapse-item title="标题2" content="内容2"></vicky-collapse-item>
        <vicky-collapse-item title="标题3" content="内容3"></vicky-collapse-item>
        <vicky-collapse-item title="标题4" content="内容4"></vicky-collapse-item>
      </vicky-collapse>
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
