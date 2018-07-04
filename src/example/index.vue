<template>
  <div id="example">
    <div class="header">
        <img class="logo" src="../assets/lolita-logo.jpeg"/>
        <br/>
        <p class="words">{{ msg }}</p>
        <template v-for="item in routers.vicky">
            <p :key="item.text" class="eachItem">
                 <router-link :to="{ path: item.path}">{{item.text}}</router-link>
            </p>
        </template>
    </div>
  </div>
</template>
<script>
export default {
  name: 'UIExample',
  data () {
    return {
      routers: {
        // 基础组件
        vicky: [
          {
            text: 'vickyButton - 按钮',
            path: 'vickyButton'
          },
          {
            text: 'vickyCascader - 级联选择器',
            path: 'vickyCascader'
          },
          {
            text: 'vickyCollapse - 折叠面板',
            path: 'vickyCollapse'
          },
          {
            text: 'vickyTabs - 标签导航',
            path: 'vickyTabs'
          },
          {
            text: 'vickySlider - 滑块',
            path: 'vickySlider'
          },
          {
            text: 'vickyProgress - 进度条',
            path: 'vickyProgress'
          },
          {
            text: 'vickyUpload - 文件上传',
            path: 'vickyUpload'
          },
          {
            text: 'vickyIcon - 字体图标',
            path: 'vickyIcon'
          },
          {
            text: 'vickyLoading - 加载提示',
            path: 'vickyLoading'
          },
          {
            text: 'vickyHeader - 头部',
            path: 'vickyHeader'
          },
          {
            text: 'vickyDialog - 对话框',
            path: 'vickyDialog'
          },
          {
            text: 'vickySelector - 选择框',
            path: 'vickySelector'
          }]
      },
      msg: 'Lolita 移动端 Vue 组件库'
    }
  },
  mounted () {
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
}
</style>
