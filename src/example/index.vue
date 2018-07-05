<template>
  <div id="example">
    <div class="header">
        <img class="logo" src="../assets/lolita-logo.jpeg"/>
        <br/>
        <p class="words">{{ msg }}</p>
        <div class="block">
            <!--<vicky-collapse :title="groupOne.title" :groupDatas="groupOne" @clickTitle="groupOneClickTitleEvent" @clickItem="groupOneClickItemEvent">
            </vicky-collapse>-->
             <vicky-collapse :title="groupOne.title" :groupDatas="groupOne">
                <template v-for="item in groupOne.itemsRealDatas">
                    <vicky-collapse-item :key="item.contentIndex">
                        <router-link :to="{path: item.content}">{{item.content}}</router-link>
                    </vicky-collapse-item>
                </template>
            </vicky-collapse>
        </div>
        <div class="block">
            <!--<vicky-collapse :title="groupTwo.title" :groupDatas="groupTwo" @clickTitle="groupTwoClickTitleEvent" @clickItem="groupTwoClickItemEvent">
            </vicky-collapse>-->
            <vicky-collapse :title="groupTwo.title" :groupDatas="groupTwo">
                <template v-for="item in groupTwo.itemsRealDatas">
                    <vicky-collapse-item :key="item.contentIndex" >
                        <router-link :to="{path: item.content}">{{item.content}}</router-link>
                    </vicky-collapse-item>
                </template>
            </vicky-collapse>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'UIExample',
  data () {
    return {
      groupOne: {
        // 基础组件
        title: '基础组件',
        showItems: false,
        itemsRealDatas: [
          {
            contentIndex: 'vickyCollapse - 折叠面板',
            content: 'vickyCollapse'
          },
          {
            contentIndex: 'vickyTabs - 标签导航',
            content: 'vickyTabs'
          },
          {
            contentIndex: 'vickySlider - 滑块',
            content: 'vickySlider'
          },
          {
            contentIndex: 'vickyProgress - 进度条',
            content: 'vickyProgress'
          },
          {
            contentIndex: 'vickyIcon - 字体图标',
            content: 'vickyIcon'
          },
          {
            contentIndex: 'vickyLoading - 加载提示',
            content: 'vickyLoading'
          },
          {
            contentIndex: 'vickyHeader - 头部',
            content: 'vickyHeader'
          },
          {
            contentIndex: 'vickyDialog - 对话框',
            content: 'vickyDialog'
          }]
      },
      groupTwo: {
        // 基础组件
        title: '表单组件',
        showItems: false,
        itemsRealDatas: [
          {
            contentIndex: 'vickyButton - 按钮',
            content: 'vickyButton'
          },
          {
            contentIndex: 'vickyCascader - 级联选择器',
            content: 'vickyCascader'
          },
          {
            contentIndex: 'vickyUpload - 文件上传',
            content: 'vickyUpload'
          },
          {
            contentIndex: 'vickySelector - 选择框',
            content: 'vickySelector'
          }]
      },
      msg: 'Lolita 移动端 Vue 组件库'
    }
  },
  mounted () {
  },
  methods: {
    // groupOneClickTitleEvent () {
    //   console.log('click title')
    // },
    // groupOneClickItemEvent (e) {
    //   this.groupOne.itemsRealDatas.forEach(function (item, index) {
    //     if (item.content === e.target.innerHTML) {
    //       this.$router.push({path: '/' + item.content})
    //     }
    //   }, this)
    // },
    // groupTwoClickTitleEvent () {
    //   console.log('click title')
    // },
    // groupTwoClickItemEvent (e) {
    //   this.groupTwo.itemsRealDatas.forEach(function (item, index) {
    //     if (item.content === e.target.innerHTML) {
    //       this.$router.push({path: '/' + item.content})
    //     }
    //   }, this)
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
#example {
  a {
    display: block;
  }
}

.header {
  text-align: center;
  margin: 20px 0;

  .logo {
    width: 50%;
    margin: 0 auto;
  }

  .words {
    margin: 8px 0;
    font-size: 14px;
    color: #456a64;
  }
  .eachItem{
      width:100%;
      height:50px;
      line-height:50px;
      font-size:16px;
      border-bottom:1px solid #ccc;
  }
  .block{
      margin-bottom 10px
  }
}
</style>
