<template>
   <div id='example'>
      <vicky-header fixed>
        <router-link :to="{path: '/'}" slot="leftPart">返回</router-link>
        <span slot="centerPart">upload-文件上传</span>
      </vicky-header>
      <div class="demo-block-title">
          <span>upload-文件上传基础用法</span>
      </div>
      <vicky-upload v-model="target1" forId="uploadOne"></vicky-upload>

      <div class="demo-block-title">
          <span>upload-限制上传文件大小</span>
      </div>
      <vicky-upload :maxSize="3000" v-model="target2" forId="uploadTwo"></vicky-upload>
   </div>
</template>

<style lang="stylus" scoped>

</style>

<script>

export default {
  data () {
    return {
      target1: {},
      target2: {}
    }
  },
  created () {

  },
  methods: {
  }
}
</script>
