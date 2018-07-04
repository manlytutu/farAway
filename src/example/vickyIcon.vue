<template>
    <div id="example">
        <vicky-header fixed>
        <router-link :to="{path: '/'}" slot="leftPart">返回</router-link>
        <span slot="centerPart">vickyIcon-字体图标</span>
        </vicky-header>

            <div class="iconGroup">
             <template v-for="(item,index) in iconNameGroup">
                <div class="content" :key="index">
                    <vicky-icon :icon="item"></vicky-icon>
                    <p>{{item}}</p>
                </div>
                </template>
            </div>
    </div>
</template>
<script>
export default{
  data () {
    return {
      iconNameGroup: [
        'back', 'cart', 'category', 'close', 'comments', 'cry', 'delete', 'edit', 'email', 'favorite', 'form', 'help', 'information',
        'less', 'moreunfold', 'more', 'pic', 'qrcode', 'refresh', 'rfq', 'search', 'selected', 'set', 'smile', 'success',
        'survey', 'training', 'viewgallery', 'viewlist', 'warning', 'wrong', 'account', 'add', 'atm', 'clock', 'remind', 'calendar',
        'attachment', 'discount', 'service', 'print', 'box', 'process', 'beauty', 'electrical', 'home', 'electronics', 'gifts',
        'lights', 'sports', 'toys', 'auto', 'jewelry', 'trade-assurance', 'browse', 'rfqqm', 'rfqquantity', 'atmaway', 'rfq1', 'scanning', 'compare',
        'filter', 'pin', 'history', 'link', 'cut', 'navlist', 'imagetext', 'text', 'move', 'dollar', 'office', 'icondownload', 'share',
        'code', 'color'
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
.iconGroup
    width 100%
    text-align center
    .content
        width 25%
        height 100%
        text-align center
        display inline-block
        padding-bottom 10px

</style>
