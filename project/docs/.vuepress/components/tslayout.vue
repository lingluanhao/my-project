<template>
 <div class="test-warper">
   <div class="test-warper-left">

   </div>
   <div class="test-warper-top">

   </div>
   <div class="test-warper-bottom">
     <slot name="main"></slot>
   </div>
 </div>
</template>
<script>
export default {
  name: 'tslayout',
  
}
</script>

<style lang="less" scoped>
.test-warper{
    height: 600px;
    padding: 34px 0 0 100px;
    position: relative;
    background: #fafafa;
    overflow: hidden;
    border: 1px solid #fafafa;
  .test-warper-left{
    position: absolute;
    overflow: hidden;
    top: 0px;
    bottom: 0;
    left: 0;
    width: 80px;
    background: #222430;
  }
  .test-warper-top{
    position: absolute;
    overflow: hidden;
    top: 0px;
    left: 80px;
    right: 0;
    height: 40px;
    background: #fff;
    box-shadow: 0 2px 20px 0 rgba(15,12,70,.1);
  }
  .test-warper-bottom{
    position: absolute;
    overflow: hidden;
    top: 40px;
    bottom: 10px;
    left: 163px;
    right: 0;
  }
}
</style>
