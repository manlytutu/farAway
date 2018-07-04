<template>
    <div class='vicky-progress-group'>
      <div v-if="type=='line'" class="vicky-progress-bar">
        <div class="vicky-progress-bar__outer">
          <div class="vicky-progress-bar__inner" :style="barStyle">
            <div
              v-if="showInnerText"
              class="vicky-progress-bar__innerText"
            >{{persentage}}%</div>
          </div>
        </div>
      </div>

      <div v-else class="vicky-progress-circle">
        <svg viewBox="0 0 100 100">
          <path class="el-progress-circle__track" d="M 50 50 m 0 -47 a 47 47 0 1 1 0 94 a 47 47 0 1 1 0 -94" stroke="#dadada" :stroke-width="relativeStrokeWidth" fill="none"></path>
          <path class="el-progress-circle__path" d="M 50 50 m 0 -47 a 47 47 0 1 1 0 94 a 47 47 0 1 1 0 -94"
            :style="circlePathStyle"
            stroke-linecap="round"
            :stroke="strokeColor"
            :stroke-width="relativeStrokeWidth"
            :stroke-dashoffset="circlePathStyle"
            style="stroke-dasharray: 299.08px, 299.08px; transition: stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease;"
            fill="none"
          ></path>
        </svg>
      </div>

      <div
        class="vicky-progress-bar__outterText"
        :class="type=='line'?'':'circleText'"
        v-if="showOutterText"
      >{{persentage}}%</div>
    </div>
</template>

<script>

export default {
  props: {
    type: {
      type: String,
      default: 'line'
    },
    persentage: {
      type: [Number, String],
      default: 0,
      validator: val => val >= 0 && val <= 100
    },
    color: {
      type: String,
      default: '#67c23a'
    },
    showInnerText: {
      type: Boolean,
      default: false
    },
    showOutterText: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 126
    },
    strokeWidth: {
      type: Number,
      default: 6
    },
    strokeColor: {
      type: String,
      default: '#13ce66'
    }
  },
  data () {
    return {
    }
  },
  created () {

  },
  computed: {
    barStyle () {
      var style = {}
      if (this.persentage > 100 || this.persentage < 0) { alert('百分比设置错误'); return }
      style.width = this.persentage + '%'
      style.backgroundColor = this.color
      return style
    },
    relativeStrokeWidth () {
      return (this.strokeWidth / this.width * 100).toFixed(1)
    },
    circlePathStyle () {
      var dashoffset = 300 * (1 - this.persentage / 100) + 'px'
      return dashoffset
    }
  },
  methods: {

  }
}
</script>

<style lang="stylus" scoped>
  .vicky-progress-group
    width 90%
    position relative
    .vicky-progress-bar
      width 90%
      height 12px
      border-radius 6px
      background-color #dadada
      .vicky-progress-bar__inner
        border-radius 6px
        height 12px
        position relative
        .vicky-progress-bar__innerText
          font-size 12px
          color #fff
          position absolute
          right 0
          top 0
    .vicky-progress-bar__outterText
      position absolute
      width 10%
      font-size 14px
      right 0px
      top 0
      &.circleText
        left 12%
        top 40%
    .vicky-progress-circle
      width 100px
      height 100px

</style>
