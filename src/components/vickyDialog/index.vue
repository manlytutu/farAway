<template>
    <transition name="transform">
        <div class="vicky-dialog-group" v-if="isShow">
            <div class="mask"></div>
            <div class="dialog-container">
                <h2 class="dialog-title" v-if="title">{{title}}</h2>
                <div class="dialog-content">
                <!--如果指定name属性，用的时候必须用slot=name，如果不写，则没有效果不会展示内容-->
                <!--<slot name="content">{{text}}</slot>-->
                <!--所以如果只有一个slot的时候，可以不用指定name属性，用的时候直接插入文本即可-->
                    <slot>{{text}}</slot>
                </div>
                <div class="dialog-bottomBtn"  :class="{'isTwo':isTwo}">
                    <button class="btn leftBtn" @click="hide(false)">取消</button>
                    <button class="btn rightBtn" @click="hide(true)">确认</button>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
export default{
  name: 'vicky-dialog',
  props: {
    showDialog: Boolean,
    isTwo: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    text: String
  },
  data () {
    return {
      isShow: this.showDialog
    }
  },
  watch: {// 监听传进来的showDialog,因为它本身不是data里原有的值，所以它变化之后isShow数据不能同步，因此必须监听
    showDialog (newVal, oldVal) {
    //   console.log(newVal);//true
    //   console.log(oldVal);//false
      this.isShow = newVal
    },
    showTitle (newVal) {
      this.showTitle = newVal
    }
  },
  methods: {
    hide (isConfirm) {
      this.isShow = false
      // 这个地方是把子组件的值传递出去，子组件数据isShow变化之后父组件的showDialog值跟着变化
      // isConfirm传递参数 区分是哪个按钮的点击事件 false 取消 / true 确定
      this.$emit('click', isConfirm)
    }
  }
}
</script>
<style lang="stylus" scoped>
.transform-enter-active,.transform-leave-active
    transition all 0.3s
.transform-enter,.transform-leave-to
    opacity 0
   .vicky-dialog-group
        position fixed
        left 0
        top 0
        width 100%
        height 100%
        .mask
            width 100%
            height 100%
            position fixed
            background-color rgba(0,0,0,0.6)

        .dialog-container
            position absolute
            width 220px
            height 160px
            border 2px solid #fff
            background-color #fff
            left 50%
            top 50%
            transform translate(-50%,-50%)
            color #000
            text-align center
            border-radius 5px
            .dialog-title
                font-size 16px
                width 100%
                height 30px
                line-height 30px
                text-align center
            .dialog-content
                padding 10px 0
                font-size 16px
                width 100%
            .dialog-bottomBtn
                width 100%
                display flex
                border-top 1px solid #999
                position fixed
                bottom 0
                .btn
                    flex 1
                    font-size 16px
                    line-height 20px
                    padding 13px 30px
                    background-color #fff
                    border-radius 0
                    border none
                    &:focus//button点击后出现边框
                        outline 0
                .leftBtn
                    border-right 1px solid #999
                    display none
                &.isTwo
                    .leftBtn
                        display block
</style>
