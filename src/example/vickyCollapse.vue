<template>
   <div id='example'>
      <vicky-header fixed>
        <router-link :to="{path: '/'}" slot="leftPart">返回</router-link>
        <span slot="centerPart">Collapase - 折叠面板</span>
      </vicky-header>

      <div class="demo-block-title">
        <span>折叠面板 - 基础用法</span>
      </div>
      <!--<vicky-collapse :title="groupOne.title" :groupDatas="groupOne" @clickTitle="clickTitleEvent" @clickItem="clickItemEvent"></vicky-collapse>-->
      <vicky-collapse :title="groupOne.title" :groupDatas="groupOne" @clickTitle="clickTitleEvent">
            <template v-for="item in groupOne.itemsRealDatas">
                 <vicky-collapse-item :ItemText="item.content" :key="item.contentIndex" @clickItem="clickItemEvent"></vicky-collapse-item>
            </template>
      </vicky-collapse>

       <div class="demo-block-title">
        <span>折叠面板 - 默认展开</span>
       </div>
       <!--<vicky-collapse :title="groupTwo.title" :groupDatas="groupTwo" @clickTitle="clickTitleEvent" @clickItem="clickItemEvent"></vicky-collapse>-->
      <vicky-collapse :title="groupTwo.title" :groupDatas="groupTwo" @clickTitle="clickTitleEvent">
             <template v-for="item in groupTwo.itemsRealDatas">
                 <vicky-collapse-item :ItemText="item.content" :key="item.contentIndex" @clickItem="clickItemEvent"></vicky-collapse-item>
            </template>
      </vicky-collapse>

       <div class="demo-block-title">
        <span>折叠面板 - 添加路由</span>
       </div>
      <vicky-collapse :title="groupThree.title" :groupDatas="groupThree" @clickTitle="clickTitleEvent">
             <template v-for="item in groupThree.itemsRealDatas">
                 <vicky-collapse-item :key="item.contentIndex"  @clickItem="clickItemEvent">
                     <router-link :to="{path: '/'}">{{item.content}}</router-link>
                 </vicky-collapse-item>
            </template>
      </vicky-collapse>
   </div>
</template>

<style lang="stylus" scoped>

</style>

<script>

export default {
  data () {
    return {
      groupOne: {
        title: '标题1',
        itemsRealDatas: [
          {
            contentIndex: 0,
            content: '内容0'
          },
          {
            contentIndex: 1,
            content: '内容1'
          },
          {
            contentIndex: 2,
            content: '内容2'
          }, {
            contentIndex: 3,
            content: '内容3'
          }

        ],
        showItems: false
      },
      groupTwo: {
        title: '标题2',
        itemsRealDatas: [
          {
            contentIndex: 0,
            content: '内容0'
          },
          {
            contentIndex: 1,
            content: '内容1'
          },
          {
            contentIndex: 2,
            content: '内容2'
          }, {
            contentIndex: 3,
            content: '内容3'
          }

        ],
        showItems: true
      },
      groupThree: {
        title: '标题3',
        itemsRealDatas: [
          {
            contentIndex: 0,
            content: '内容0'
          },
          {
            contentIndex: 1,
            content: '内容1'
          },
          {
            contentIndex: 2,
            content: '内容2'
          }, {
            contentIndex: 3,
            content: '内容3'
          }

        ],
        showItems: true
      }
    }
  },
  created () {

  },
  methods: {
    clickTitleEvent () {
      console.log('click title')
    },
    clickItemEvent () {
      console.log('click item')
    }
  }
}
</script>
