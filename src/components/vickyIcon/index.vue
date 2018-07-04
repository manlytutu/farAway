<template>
    <i
        class="iconfont"
        :class="'icon-'+icon"
    >
    </i>
</template>
<script>
export default {
  name: 'vicky-Icon',
  props: {
    icon: {
      type: String
    }
  }
}
</script>
<style lang="stylus" scoped>
    i
      width 30px
      height 30px
      display block
      line-height 30px
      text-align center
      margin 0 auto
      font-size 20px
</style>
