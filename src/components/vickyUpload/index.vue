<template>
   <div class='vicky-upload-group'>
      <input
        type="file"
        :id="forId"
        ref="inputer"
        @change="handleFileChange"
      >
      <label
        :for="forId"
        ref="label"
      >点击上传</label>
      <div class="vicky-upload-imgBox" ref="imgbox">
        <span ref="text"></span>
        <img
          v-show="show"
          :src="dataUrl"
          :alt="imgInfo"
        >
      </div>
   </div>
</template>

<script>

export default {
  props: {
    value: {
      // 绑定默认的value prop
      default: undefined
    },
    imgInfo: {
      type: String,
      default: '图片走丢了'
    },
    defaultUrl: {
      type: String,
      default: ''
    },
    maxSize: {
      default: 8000,
      type: Number
    },
    size: {
      default: '',
      type: String
    },
    forId: String
  },
  data () {
    return {
      dataUrl: '', // 转base64之后的data字段
      show: false
    }
  },
  computed: {
    sizeHumanRead () {
      let rst = 0
      if (this.maxSize < 1024) {
        rst = this.maxSize + 'K'
      } else {
        rst = (this.maxSize / 1024).toFixed(this.maxSize % 1024 > 0 ? 2 : 0) + 'M'
      }
      return rst
    }
  },
  watch: {
    dataUrl (newVal) {
      this.$nextTick(function () {
        this.show = true
        this.$refs.text.innerHTML = ''
        this.dataUrl = newVal
      })
    }
  },
  methods: {
    imgPreview (file) {
      var self = this
      if (!file || !window.FileReader) {
        return
      }
      if (/^image/.test(file.type)) {
        var reader = new FileReader()// 创建一个reader
        reader.readAsDataURL(file)// 把图片转成base64格式
        reader.onloadend = function () {
          self.dataUrl = this.result
        }
      }
    },
    handleFileChange (e) {
      this.show = true
      var inputDom = e.target
      this.file = inputDom.files[0]
      var size = Math.floor(this.file.size / 1024)
      if (size > this.maxSize) { // 控制文件大小
        this.$refs.text.innerHTML = '文件超出最大限制' + this.sizeHumanRead
        this.$refs.text.style.color = 'red'
        this.show = false
        return
      }
      this.fileName = this.file.name
      this.onChange && this.onChange(this.file, inputDom.value)// 可以增加回调函数
      this.imgPreview(this.file)// 图片预览
      this.$emit('input', this.file)// 触发组件的input事件
    }
  }
}
</script>

<style lang="stylus" scoped>
    .vicky-upload-group
      position relative
      label
        z-index 10
        padding 10px
        width 60px
        height 30px
        border 1px solid #ccc
        text-align center
        line-height 30px
      input
        position absolute
        left -9999px
      .vicky-upload-imgBox
        margin-top 10px
        img
          width 100%
</style>
