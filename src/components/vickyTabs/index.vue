<template>
    <div class="vicky-tabs-group ">
      <div class="vicky-tabs-panelGroup"><slot></slot></div>
      <div class="vicky-tabs-content">{{realContent}}</div>
    </div>

</template>

<style lang="stylus" scoped>
  .vicky-tabs-group
    border 1px solid #ccc
    padding 10px 0
    .vicky-tabs-panelGroup
      height 20px
      width 100%
    .vicky-tabs-content
      width 100%
      height 50px
      padding 10px 5px
      border-top 1px solid #ccc
      text-align left
</style>

<script>

export default {
  props: {
    content: String
  },
  data () {
    return {
      realContent: this.content
    }
  },
  created () {

  },
  methods: {
    currentActive (text) {
      var children = this.$children
      children.forEach(function (el, i) {
        this.realContent = text
      }, this)
    }
  }
}
</script>
