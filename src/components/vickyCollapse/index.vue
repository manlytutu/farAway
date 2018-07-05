<template>
   <div class='vicky-collapse-group'>
        <div
        class="vicky-collapse-title"
        @click="clickTitleEvent"
        >{{title}}
        </div>

        <!--以下为两种写法，第二种写法最简单-->
        <!--<transition name="slideDown">
            <div v-show="tempGroupDatas.showItems" class="itemsGroup">
                <vicky-collapse-item :itemGroupDatas="tempGroupDatas.itemsRealDatas" @clickItem="clickItemEvent"></vicky-collapse-item>
            </div>
        </transition>-->
        <transition name="slideDown">
            <div v-show="tempGroupDatas.showItems" class="itemsGroup">
                <slot></slot>
            </div>
        </transition>
   </div>

</template>

<script>
export default {
  name: 'vicky-collapase',
  props: {
    title: String,
    groupDatas: {
      type: Object
    }
  },
  data () {
    return {
      tempGroupDatas: this.groupDatas
    }
  },
  methods: {
    clickTitleEvent (event) {
      this.tempGroupDatas.showItems = !this.tempGroupDatas.showItems
      this.$emit('clickTitle', event)
    }
    // ,
    // clickItemEvent (e) {
    //   this.$emit('clickItem', e)
    // }
  }
}
</script>

<style lang="stylus" scoped>
  .vicky-collapse-group
    width 100%
    overflow hidden
    box-shadow: 0 1px 1px 0 rgba(0,0,0,0.10)
    .vicky-collapse-title
        width 100%
        padding 0 10px
        line-height 48px
        font-size 16px
        background-color #fff
        text-align left
    .slideDown-enter-active,.slideDown-leave-active
        transition all 0.1s
    .slideDown-enter,.slideDown-leave-to
        transform translateY(-10px)
</style>
