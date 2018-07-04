<template>
    <div id="example">
        <vicky-header>
            <router-link to="/" slot="leftPart">返回</router-link>
            <span slot="centerPart">测试头部</span>
        </vicky-header>

        <div class="demo-block-title">
            <span>一个按钮</span>
        </div>
        <vicky-button type="primary" @click="oneBtnDialog">一个按钮</vicky-button>
        <vicky-dialog :showDialog="oneBtnStatus" @click="oneBtnEvent">文本内容1</vicky-dialog>

        <div class="demo-block-title">
            <span>两个按钮</span>
        </div>
        <vicky-button type="primary" @click="twoBtnDialog">两个按钮</vicky-button>
        <vicky-dialog :showDialog="twoBtnStatus" @click="twoBtnEvent" isTwo>文本内容2文本内容2文本内容2文本内容2文本内容2</vicky-dialog>

        <div class="demo-block-title">
            <span>展示标题</span>
        </div>
        <vicky-button type="primary" @click="hasTitleDialog">展示标题</vicky-button>
        <vicky-dialog :showDialog="titleStatus" @click="titleBtnEvent" isTwo :title="titleContent">文本内容1</vicky-dialog>
    </div>
</template>
<script>
export default{
  data () {
    return {
      oneBtnStatus: false,
      twoBtnStatus: false,
      titleStatus: false,
      titleContent: '自定义标题'
    }
  },
  methods: {
    oneBtnDialog () {
      this.oneBtnStatus = true
    },
    twoBtnDialog () {
      this.twoBtnStatus = true
    },
    hasTitleDialog () {
      this.titleStatus = true
    },
    oneBtnEvent (isConfirm) {
      this.oneBtnStatus = false
      if (isConfirm) {
        console.log('点击确定按钮')
      }
    },
    twoBtnEvent (isConfirm) {
      this.twoBtnStatus = false
      if (isConfirm) {
        console.log('点击确定按钮')
      } else {
        console.log('点击取消按钮')
      }
    },
    titleBtnEvent (isConfirm) {
      this.titleStatus = false
      if (isConfirm) {
        console.log('点击确定按钮')
      }
    }
  }
}
</script>
