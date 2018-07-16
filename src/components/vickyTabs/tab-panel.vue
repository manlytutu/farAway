<template>
   <div class='vicky-tabs-panel' ref="panel">
      <div class="vicky-tabs-top" :class="{isActive:active}">
        <div
          ref="nav"
          class="vicky-tabs-nav"
          :class="{isActive:active}"
          @click="clickNav"
        >
        {{title}}
        </div>
      </div>
   </div>
</template>

<style lang="stylus" scoped>
  .vicky-tabs-panel
    float left
    padding 0px 5px
    .vicky-tabs-top
      padding 0px 5px 5px 0
      &.isActive
        border-bottom 3px solid #409eff
      .vicky-tabs-nav
        font-size 14px
        &.isActive
          color #409eff

</style>

<script>
export default {
  name: 'vicky-tabs-panel',
  props: {
    title: String,
    active: {
      default: false,
      type: Boolean
    },
    content: String
  },
  data () {
    return {
      activeSiblings: [],
      realContent: this.content
    }
  },
  created () {

  },
  methods: {
    clickNav (e) {
      this.$parent.currentActive(this.realContent)
      e.target.classList.add('isActive')
      e.target.parentNode.classList.add('isActive')
      this.activeSiblings = this.$refs.panel.parentNode.children
      for (var i = 0, l = this.activeSiblings.length; i < l; i++) {
        if (this.activeSiblings[i] !== e.target.parentNode.parentNode) {
          this.activeSiblings[i].children[0].children[0].classList.remove('isActive')
          this.activeSiblings[i].children[0].classList.remove('isActive')
        }
      }
    }
  }
}
</script>
