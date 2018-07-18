<template>
    <div class="vicky-collapse-itemsGroup">
        <!--<div
        class="vicky-collapse-eachItems"
        v-for="item in itemGroupDatas"
        :key="item.contentIndex"
        @click="emitClick"
        >{{item.content}}</div>-->

        <div class="vicky-collapse-eachItems" @click="emitClick">
            <slot>{{ItemText}}</slot>
        </div>
    </div>
    <!--刚开始用了component内置组件，动态绑定:is="tag"，
    然后在props中 直接写了 tag:'div'，没有写成对象形式，结果item组件渲染不出来
    不知道是什么原因
    -->
</template>

<script>

export default {
  name: 'vicky-collapse-item',
  props: {
    // itemGroupDatas: {
    //   type: Array
    // },
    ItemText: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  },
  created () {

  },
  methods: {
    emitClick (e) {
      this.$emit('clickItem', e)
    }
  }
}
</script>

<style lang="stylus" scoped>
    .vicky-collapse-eachItems
        padding 0 10px
        font-size 14px
        line-height 48px
        border-bottom 1px solid #e5e5e5
        background-color #fff
        text-align left
        &:last-child
            border-bottom 0
        &:first-child
            border-top 1px solid #e5e5e5
        a
            display block
            width 100%
            height 100%
</style>
