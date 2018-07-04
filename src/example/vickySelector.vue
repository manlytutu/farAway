<template>
    <div id="example">
        <vicky-header>
            <router-link to="/" slot="leftPart">返回</router-link>
            <span slot="centerPart">头部</span>
        </vicky-header>
        <div class="demo-block-title">
            <span>选择器 - 基础用法</span>
        </div>

        <input type="text" placeholder="请选择" @click="inputFocus" :value="selectorGroupDatas.chooseItem.status?selectorGroupDatas.chooseItem.content:'请选择'">
        <vicky-selector :selectorDatasLists="selectorGroupDatas"></vicky-selector>
    </div>
</template>
<script>
export default{
  data () {
    return {
      selectorGroupDatas: {
        chooseItem: {
          status: false, // 是否点击确定按钮
          content: ''// input value
        }, // 选择之后替换掉input的value值
        showSelector: false, // 是否显示底部selector
        showMask: false, // 是否展示蒙层
        ItemDatas: [// selector 选项列表
          {index: 0, textContent: '小学'},
          {index: 1, textContent: '初中'},
          {index: 2, textContent: '高中'},
          {index: 3, textContent: '大专'},
          {index: 4, textContent: '本科'},
          {index: 5, textContent: '硕士'},
          {index: 6, textContent: '博士'},
          {index: 7, textContent: '其他'}
        ]
      }
    }
  },
  methods: {
    inputFocus () {
      this.selectorGroupDatas.showSelector = !this.selectorGroupDatas.showSelector
      this.selectorGroupDatas.showMask = !this.selectorGroupDatas.showMask
      this.selectorGroupDatas.chooseItem.status = false
    }
  }
}
</script>
<style lang="stylus" scoped>
    input
        width 100%
        padding 13px 0
        line-height 24px
        font-size 16px
        text-indent 10px
        border none
        border-bottom 1px solid #ccc
        background-color #fff
        &:focus
            outline 0
</style>
