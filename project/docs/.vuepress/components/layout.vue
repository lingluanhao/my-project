<template>
  <div class="vue-wrapper">
    <div class="wrapper-shell">
      <div class="head-title">
            <span v-for="x in headlist" :key="x.index" :class="x.active?'active':''" @click="router(x)">
              {{x.name}}
            </span>
        <span class="clearfix"></span>
      </div>
      <div class="vue-pos">
        <div class="vue-list">
          <!-- <div class="vue-content"> -->
              <slot name="content"></slot>
          <!-- </div> -->
        </div>
      </div>
    </div>
 </div>
</template>
<script>
export default {
    // name:展示名称
    // url:跳转链接
    // sates:跳转路由
    // json:路由带参
    // active:是否选中
    props:{
        // headlist:[
        //     {name:'产品',url:'',states:'',json:'',active:true},
        //     {name:'产品1',url:'',states:'',json:'',active:false},
        //     {name:'产品2',url:'',states:'',json:'',active:false},
        // ],
        headlist:'',
    },
    watch:{
      headlist(val){
        console.log(this.headlist)
        console.log(this.headlists)
      }
    },
  data(){
      return{

      }
  },
  methods:{
    router(x){//跳转路由
    this.headlist.length > 0&&this.headlist.forEach(e => {
      e.active = false
    });
      x.active = true;
    }
  },
  created(){

  },
  mounted(){

  }
}
</script>

<style lang="less" scoped>

</style>
