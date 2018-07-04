<template>
    <div
    class="vicky-header-group"
    :class="{headerFixed:fixed}"
    >
        <div class="header-left" @click="leftPart(false)">
            <slot name="leftPart"></slot>
        </div>
        <div class="header-center">
            <slot name="centerPart"></slot>
        </div>
        <div class="header-right" @click="rightPart(true)">
            <slot name="rightPart"></slot>
        </div>
    </div>
</template>
<script>
export default{
  name: 'vicky-header',
  props: {
    fixed: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    leftPart (confirmStatus) {
      this.$emit('cancleBtn', confirmStatus)
    },
    rightPart (confirmStatus) {
      this.$emit('confirmBtn', confirmStatus)
    }
  }
}
</script>
<style lang="stylus" scoped>
    .vicky-header-group
        width 100%
        height 50px
        line-height 50px
        background-color #fcfcfc
        display flex
        overflow hidden
        &.headerFixed
            position fixed
            top 0
            left 0
        .header-left,.header-center,.header-right
            overflow hidden
            text-overflow ellipsis
            white-space nowrap//规定文本不换行
            font-size inherit
            line-height 46px
        .header-left
            flex 1
            text-align left
            padding-left 15px
        .header-center
            flex 2
            text-align center
        .header-right
            flex 1
            text-align right
            padding-right 15px
</style>
