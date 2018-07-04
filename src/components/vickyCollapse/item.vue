<template>
   <div class='vicky-collapse-container' >
      <div
        class="vicky-collapse-title"
        @click="emitClick"
      >{{title}}</div>
      <transition name="slideDown">
        <div
        ref="content"
        v-if="show"
        class="vicky-collapse-content"
        >{{content}}</div>
      </transition>
   </div>
</template>

<script>
export default {
  props: {
    datas: [Object, Array],
    title: String,
    content: String
  },
  data () {
    return {
      show: false
    }
  },
  watch: {

  },
  methods: {
    emitClick (event) {
      this.show = !this.show
      this.$emit('click', event)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .vicky-collapse-title
    width 100%
    padding 10px 5px
    line-height 20px
    font-size 16px
    background-color #ccc
    border-bottom 1px solid #fff
  .vicky-collapse-content
    background-color skyblue
    padding 10px 5px
    line-height 20px
  .slideDown-enter-active, .slideDown-leave-active
    transition all 0.2s

</style>
