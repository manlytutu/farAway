<template>
    <component
        :is="tag"
        class='v-btn'
        :type="type"
        :disabled="disabled"
        :class="[
          type?'v-btn-'+type:'',
          disabled?'v-btn-disabled':''
        ]"
        @click = "triggerClick"
    >
          <slot></slot>
    </component>
</template>

<style lang="stylus" scoped>
  .v-btn
    padding 10px
    line-height 28px
    border-radius 6px
    background-color #fff
    font-size 18px
    box-sizing border-box
    outline none
    border none
    display block
    // margin 20px 0
  .v-btn-default
    background-color #666
  .v-btn-primary
    background-color #66b1ff
  .v-btn-success
    background-color #85ce61
  .v-btn-disabled
    background-color #ccc
    color #999
</style>

<script>

export default {
  name: 'vicky-button',
  props: {
    tag: {
      type: String,
      default: 'button'
    },
    type: {
      type: [String],
      default: 'default'
    },
    disabled: {
      type: [Boolean],
      default: false
    }
  },
  data () {
    return {
    }
  },
  created () {

  },
  methods: {
    triggerClick (event) {
      this.$emit('click', event)
    }
  }
}
</script>
