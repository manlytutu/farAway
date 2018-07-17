<template>
   <div class='vicky-cascader-group'>
      <!--<input
        class="vicky-cascader-results"
        @click="emitClick"
      >-->
      <div class="vicky-cascader-content">
        <select v-model="selectedProvince" class="vicky-cascader-level1" ref="levelone">
          <option
            v-for="item in dicDatas"
            :key="item.code"
            class="vicky-cascader-item"
          >{{item.name}}
          </option>
        </select>
        <select v-model="selectedCity" class="vicky-cascader-level2" ref="leveltwo">
           <option
            v-for="item in cities"
            :key="item.code"
            class="vicky-cascader-item"
          >{{item.name}}
          </option>
        </select>
        <select v-model="selectedDistrict" class="vicky-cascader-level3" ref="levelthree">
          <option
            v-for="item in districts"
            :key="item.code"
            class="vicky-cascader-item"
          >{{item.name}}
          </option>
        </select>
      </div>
   </div>
</template>

<script>

export default {
  name: 'vicky-cascader',
  props: {
    itemsShow: {
      type: Boolean,
      default: false
    },
    dicDatas: [Array, Object, String],
    placeholder: {
      type: String,
      default: '请选择省/市/区'
    }
  },
  data () {
    return {
      itemsStatus: this.itemsShow,
      selectedProvince: '',
      selectedCity: '',
      selectedDistrict: '',
      cities: '',
      provinces: '',
      districts: ''
    }
  },
  created () { // 数据初始化,默认选中北京市
    this.selectedProvince = this.dicDatas[0].name
    this.selectedCity = this.dicDatas[0].data[0].name
    this.selectedDistrict = this.dicDatas[0].data[0].data[0].name
  },
  computed: {
    info () {
      return {
        province: this.selectedProvince,
        city: this.selectedCity,
        district: this.selectedDistrict
      }
    }
  },
  watch: {
    selectedProvince (newval, oldval) {
      this.dicDatas.forEach(function (ele, i) {
        if (ele.name === this.selectedProvince) {
          this.cities = ele.data
        }
        this.$emit('input', this.info)
      }, this)
    },
    selectedCity (newval, oldval) {
      this.cities.forEach(function (ele, i) {
        if (ele.name === this.selectedCity) {
          this.districts = ele.data
        }
      }, this)
      this.$emit('input', this.info)
    },
    selectedDistrict (newval, oldval) {
      this.$emit('input', this.info)
    }
  },
  methods: {

  }
}
</script>

<style lang="stylus" scoped>
.vicky-cascader-group
  position relative
  .vicky-cascader-results
    width 218px
    height 38px
    border 1px solid #ccc
    outline none
    text-indent 5px
    font-size 16px
    &:focus
      border-color #409eff
 .vicky-cascader-content
    // position absolute
    // top 50px
    // left 0
    width 100%
    height 30px
    display flex
    justify-content start
    .vicky-cascader-level1
      width 33%
      border 1px solid #ccc
      display block
      margin-right 5px
      .vicky-cascader-item
        padding 5px
        line-height 18px
        font-size 14px
        color #666
        &:hover
          background-color skyblue
    .vicky-cascader-level2
      width 33%
      border 1px solid #ccc
      // display none
      margin-right 5px
      .vicky-cascader-item
        padding 5px
        line-height 18px
        font-size 14px
        color #666
        &:hover
          background-color skyblue
    .vicky-cascader-level3
      width 33%
      border 1px solid #ccc
      // display none
      .vicky-cascader-item
        padding 5px
        line-height 18px
        font-size 14px
        color #666
        &:hover
          background-color skyblue

</style>
