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
        <!-- <div>边框圆角4px</div>
        <div>边距10px</div>
        <div>边距10px</div> -->
      </div>
    </layout>
  </tslayout>
</ClientOnly>


````html
<!-- 整体边距10px,圆角4px -->
  <div class="vue-wrapper">
    <div class="wrapper-shell">
      <div class="head-title">
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
<h4>基础布局</h4>
<p>最基本的布局</p>
<ClientOnly>
  <tslayout>
    <layout slot="main" :headlist='msg'>
      <div slot='content'>
        <!-- <div>边框圆角4px</div>
        <div>边距10px</div>
        <div>边距10px</div> -->
      </div>
    </layout>
  </tslayout>
</ClientOnly>


````html
<!-- 整体边距10px,圆角4px -->
  <div class="vue-wrapper">
    <div class="wrapper-shell">
      <div class="head-title">
      <!-- 标题色号 -->
            <span class='active'>
              企业产品
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

