<template>
    <component :is="tag">
        <div
            class="selector-each"
            v-for="item in selectorItemsLists"
            :key="item.index"
         >
            <input
                type="radio"
                name="selector-inp"
                class="selector-item-btn"
                :id="item.index"
            >
            <label
                :for="item.index"
                class="selector-item-for"
                @click="chooseEvent"
            >{{item.textContent}}</label>
        </div>
    </component>
</template>
<script>
export default{
  name: 'vicky-selector-item',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    selectorItemsLists: {
      type: Array
    }
  },
  watch: {
  },
  data () {
    return {
      choose: false,
      chooseResult: ''
    }
  },
  methods: {
    chooseEvent (e) {
      this.choose = !this.choose
      this.chooseResult = e.target.innerHTML
      this.$emit('checkedItem', this.chooseResult)
    }
  }
}
</script>
<style lang="stylus" scoped>
        .selector-each
            width 48%
            height 35px
            line-height 35px
            float left
            margin-bottom 10px
            &:nth-child(odd)
                margin-right 4%

        .selector-item-btn
            display inline
            outline 0
            margin 0
            appearance none
            &:checked
              &+label
                border 1px solid #0469c8
                color #0469c8
        .selector-item-for
            display block
            width 100%
            height 100%
            text-align center
            background-color #fff
            border 1px solid #ccc
            border-radius 5px

</style>
