<template>
    <div id="example">
        <vicky-header fixed>
        <router-link :to="{path: '/'}" slot="leftPart">返回</router-link>
        <span slot="centerPart">vickyLoading-加载提示</span>
        </vicky-header>
        <div class="demo-block-title">
            <span>默认loading</span>
        </div>
        <vicky-button type="primary" @click="loading1">默认loading</vicky-button>

        <div class="demo-block-title">
            <span>带文字loading</span>
        </div>
        <vicky-button type="primary" @click="loading2">带文字loading</vicky-button>

        <vicky-loading :text="text" :showLoading="loadingStatus"></vicky-loading>
    </div>
</template>
<script>
export default{
  data () {
    return {
      text: '',
      loadingStatus: false
    }
  },
  methods: {
    loading1 () {
      this.text = ''
      this.loadingStatus = true
      setTimeout(() => {
        this.loadingStatus = false
      }, 1000)
    },
    loading2 () {
      this.text = '努力加载中努力加载中努力加载中努力加载中努力加载中'
      this.loadingStatus = true
      setTimeout(() => {
        this.loadingStatus = false
      }, 1000)
    }
  }
}
</script>
