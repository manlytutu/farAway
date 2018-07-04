<template>
    <div id="example">
        <vicky-header fixed>
            <router-link :to="{path: '/'}" slot="leftPart">返回</router-link>
            <span slot="centerPart">header - 头部</span>
        </vicky-header>
        <div class="demo-block-title">
        <span>默认头部样式</span>
        </div>
        <vicky-header :fixed="false">
            <span slot="centerPart">固定在顶部</span>
        </vicky-header>

        <div class="demo-block-title">
            <span>左边有文字</span>
        </div>
        <vicky-header :fixed="false">
            <span slot="leftPart">返回</span>
            <span slot="centerPart">左边有文本</span>
        </vicky-header>

        <div class="demo-block-title">
            <span>左边可点击</span>
        </div>
        <vicky-header :fixed="false">
            <router-link to="/" slot="leftPart" >返回</router-link>
            <span slot="centerPart">左边可点击</span>
        </vicky-header>

        <div class="demo-block-title">
            <span>右边有文字</span>
        </div>
        <vicky-header :fixed="false">
            <span slot="rightPart">右边文本</span>
            <span slot="centerPart">右边有文本</span>
        </vicky-header>

        <div class="demo-block-title">
            <span>文字超出隐藏</span>
        </div>
        <vicky-header :fixed="false">
            <span slot="leftPart">返回</span>
            <span slot="centerPart">文字超出部分隐藏顶部固定在顶部固定在顶部固定在顶部</span>
            <span slot="rightPart">右边文本</span>
        </vicky-header>

    </div>
</template>
<script>
export default{
  methods: {
  }
}
</script>
