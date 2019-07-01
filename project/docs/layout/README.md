---
title: 布局分类
prev: false
next: false
---
<h3>基础布局</h3>
<p>最基本的布局</p>
<ClientOnly>
  <tslayout>
    <layout slot="main" :headlist='msg'>
      <div slot='content'>
      这里是内容
      </div>
    </layout>
  </tslayout>
</ClientOnly>


````html
<!-- 整体边距10px,圆角4px -->
  <div class="vue-wrapper">
    <div class="wrapper-shell">
    <!-- 灰色底#F2F2F6 -->
      <div class="head-title">
      <!-- 标题字号12px,颜色#595961灰色,#2589ff蓝 -->
            <span class='active'>
              企业产品
            </span>
            <span class='active'>
              个人产品
            </span>
        <span class="clearfix"></span>
      </div>
      <div class="vue-pos">
        <div class="vue-list">
           这里是内容
        </div>
      </div>
    </div>
 </div>
````
<h4></h4>
<p>内容层上下分为上下两部分，一般下部分为表格,带翻页</p>
<ClientOnly>
  <tslayout>
  <div class="vue-wrapper" slot="main">
    <div class="wrapper-shell">
      <div class="head-title">
            <span class='active'>
              企业产品
            </span>
            <span>
              个人产品
            </span>
        <span class="clearfix"></span>
      </div>
      <div class="vue-pos v-table v-flex">
        <div class="top-block">
        top-block
        </div>
        <div class="bot-block">
        bot-block
        </div>
      </div>
    </div>
    <div class="footer">
    footer
    </div>
 </div>
  </tslayout>
</ClientOnly>


````html
  <div class="vue-wrapper" slot="main">
    <div class="wrapper-shell">
      <div class="head-title">
            <span class='active'>
              企业产品
            </span>
            <span>
              个人产品
            </span>
        <span class="clearfix"></span>
      </div>
      <div class="vue-pos v-table v-flex">
        <div class="top-block">
        <!-- 左右边距20px,上下10px高度自适应，无滚动条 -->
        </div>
        <div class="bot-block">
        <!-- 内容部分，无固定边距，超出滚动 -->
        </div>
      </div>
    </div>
    <div class="footer">
      <!-- 这里是翻页，圆角10px，固定在页面下方 -->
    </div>
 </div>
````

<script>
export default {
    data(){
        return{
            msg:[
              {name:'企业产品',url:'',states:'',json:'',active:true},
              {name:'个人产品',url:'',states:'',json:'',active:false}
            ],
        }
    }
}
</script>

