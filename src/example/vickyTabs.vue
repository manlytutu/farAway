<template>
   <div id='example'>
      <vicky-header fixed>
        <router-link :to="{path: '/'}" slot="leftPart">返回</router-link>
        <span slot="centerPart">tabs-标签页</span>
      </vicky-header>
     <div class="demo-block-title">
        <span>tabs - 标签页</span>
      </div>
      <vicky-tabs content="1" @click="clickEvent">
        <vicky-tabs-panel :active="true" title="用户管理" content="1"></vicky-tabs-panel>
        <vicky-tabs-panel title="配置管理" content="2"></vicky-tabs-panel>
        <vicky-tabs-panel title="角色管理" content="3"></vicky-tabs-panel>
        <vicky-tabs-panel title="定时任务补偿" content="4"></vicky-tabs-panel>
      </vicky-tabs>
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
    clickEvent (event) {
      console.log(event)
    }
  }
}
</script>
