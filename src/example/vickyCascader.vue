<template>
   <div id='example'>
      <vicky-header fixed>
        <router-link :to="{path: '/'}" slot="leftPart">返回</router-link>
        <span slot="centerPart">Cascader - 级联选择器</span>
      </vicky-header>

      <div class="demo-block-title">
        <span>级联选择器 - 基础用法</span>
      </div>
      <vicky-cascader v-model="cityInfo" :dicDatas='options'></vicky-cascader><br/>

      {{cityInfo}}
   </div>
</template>

<style lang="stylus" scoped>

</style>

<script>
import DICdata from './DICdata.json'
// console.log(DICdata.options);
export default {
  data () {
    return {
      options: DICdata.options,
      cityInfo: ''
    }
  },
  created () {

  },
  methods: {

  }
}
</script>
