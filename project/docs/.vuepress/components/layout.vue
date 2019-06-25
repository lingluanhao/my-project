<template>
  <div class="vue-wrapper">
    <div class="wrapper-shell">
      <div class="head-title">
            <!-- <span class="active">企业产品</span>
            <span>产品分类</span>
            <span>产品列表样式</span>
            <span>产品详情菜单</span> -->
            <span v-for="x in headlist" :key="x.index" :class="x.active?'active':''" @click="router(x.states)">
              {{x.name}}
            </span>
        <span class="clearfix"></span>
      </div>
      <div class="vue-pos">
        <div class="vue-list">
          <div class="vue-content">
          </div>
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
        headlist:[
            {name:'产品',url:'',states:'',json:'',active:true},
            {name:'产品1',url:'',states:'',json:'',active:false},
            {name:'产品2',url:'',states:'',json:'',active:false},
        ]
    },
    watch:{
      headlist(val){
        console.log(val)
      }
    },
  data(){
      return{
        headlists:[
        ]

      }
  },
  methods:{
    router(url,states){//跳转路由
      this.$$ngGlobal.$state.go(states);
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
