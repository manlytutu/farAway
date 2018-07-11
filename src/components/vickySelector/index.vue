<template>
    <div class="vicky-selector-container">
        <transition name="show">
            <div class="mask" v-if="selectorDatas.showMask"></div>
         </transition>
        <transition name="fade">
            <div class="vicky-selector-group" v-if="selectorDatas.showSelector">
                <div class="selector-header">
                    <vicky-header :fixed="false" @cancleBtn="cancelBtnEvent(false)"  @confirmBtn="confirmBtnEvent(true)">
                        <span slot="leftPart">取消</span>
                        <span slot="centerPart">请选择</span>
                        <span slot="rightPart">确定</span>
                    </vicky-header>
                </div>
                <div class="selector-items-group">
                     <vicky-selector-item :selectorItemsLists="selectorDatas.ItemDatas" @checkedItem="checkedItemStatus"></vicky-selector-item>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
import vickyHeader from '../vickyHeader/index'
import vickySelectorItem from './item'
export default{
  name: 'vicky-selector',
  components: {
    'vicky-header': vickyHeader,
    'vicky-selector-item': vickySelectorItem
  },
  props: {
    selectorDatasLists: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      selectorDatas: this.selectorDatasLists
    }
  },
  methods: {
    cancelBtnEvent () {
      this.selectorDatas.showSelector = false
      this.selectorDatas.showMask = false
    },
    confirmBtnEvent () {
      if (this.selectorDatas.chooseItem.content) {
        this.selectorDatas.chooseItem.status = true
        this.selectorDatas.showSelector = false
        this.selectorDatas.showMask = false
      } else {
        alert('请至少选择一项')
        this.selectorDatas.showSelector = true
        this.selectorDatas.showMask = true
      }
    },
    checkedItemStatus (selectedItem) {
      this.selectorDatas.chooseItem.content = selectedItem
    }
  }
}
</script>
<style lang="stylus" scoped>
.vicky-selector-container
    .show-enter-active,.show-leave-active
        transition opacity 0.3s
    .show-enter,.show-leave-to//之前用的show-leave 离开时没有效果
        opacity 0
    .mask
        position fixed
        width 100%
        height 100%
        left 0
        top 0
        background-color rgba(0,0,0,0.6)
        z-index 100
    .fade-enter-active,.fade-leave-active
        transition all 0.3s
    .fade-enter,.fade-leave-to
        transform translateY(300px)
    .vicky-selector-group
        width 100%
        height 300px
        border 1px solid #ccc
        background-color #fff
        position fixed
        bottom 0px
        left 0
        z-index 101
        .selector-header
            position absolute
            top 0
            left 0
            width 100%
            height 40px
            line-height 40px
            font-size 16px
            background-color #fff
            div
                background-color #fff
        .selector-items-group
            margin-top 50px
            padding 0px 10px
            display block
            width 100%
            height 100%

</style>
