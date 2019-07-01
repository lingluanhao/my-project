---
title: icon
prev: false
next: false
---
<h3>icon</h3>
<p>为保持icon统一度，如无特殊样式，高宽即为列表中px，不做修改，且不允许重复上传虫洞</p>
<ClientOnly>
<div class='icon-warper'>
  <div class="icon-block" v-for='x in imglist' :key='x.index' :class='x.bg?"bg":""'>
   <div class='icon-img'  :style="{width:x.width + 'px',height:x.height + 'px'}"><img :src='x.url' /></div>
   <div class='icon-name'>{{x.name}}{{x.url.split('.')[x.url.split('.').length-1]}}</div>
   <div class='icon-name'>宽:{{x.width}}高:{{x.height}}</div>
  </div>
</div>
</ClientOnly>

````html
<!-- 暂未封装样式，如需使用直接复制链接 -->
````
<script>
export default {
    data(){
        return{
            imglist:[
              {name:'问号',width:'12',height:'12',url:'https://c.weimobwmc.com/static-resource/9600a8c4083f4c2cb473930883052a81.svg'},

              {name:'感叹号',width:'12',height:'12',url:'https://c.weimobwmc.com/static-resource/89bf3b8dc928401b889f0ddc239bbb8b.svg'},

              {name:'星号',width:'6',height:'6',url:'https://c.weimobwmc.com/static-resource/67083670bf2a459a9c0f70892e472013.svg'},

              {name:'新增1',width:'10',height:'10',url:'https://c.weimobwmc.com/static-resource/a9394750e6824463b3e203db0f563dfa.png'},

              {name:'新增',width:'15',height:'15',url:'https://c.weimobwmc.com/static-resource/b0bf23ab9ba1455caae3b2bef43d432a.svg'},

              {name:'添加',width:'15',height:'15',url:'https://c.weimobwmc.com/static-resource/720a2dbb0ca943f78880caaa055db8a5.svg'},

              {name:'新增',width:'15',height:'15',url:'https://c.weimobwmc.com/static-resource/d32fda4d97e14a00ad4b4bfa97348756.svg'},

              {name:'删除',width:'15',height:'15',url:'https://c.weimobwmc.com/static-resource/05272cab33164b5090a42f1c789dc015.svg'},

              {name:'编辑',width:'15',height:'15',url:'https://c.weimobwmc.com/static-resource/26f0db260f9a4410913c610a74cdbad1.svg'},

              {name:'编辑2',width:'10',height:'10',url:'https://c.weimobwmc.com/static-resource/8d34e4778b894c0a9b8fb813dd8206d4.svg'},

              {name:'查看',width:'17',height:'17',url:'https://c.weimobwmc.com/static-resource/e09fb51aee184106ae32ca557c5dda00.png',type:'png',bg:true},

              {name:'发布',width:'17',height:'17',url:'https://c.weimobwmc.com/static-resource/47859a2d3b5a4f1f85b201f3e09c7764.png',type:'png',bg:true},

              {name:'分享',width:'14',height:'14',url:'https://c.weimobwmc.com/static-resource/ffe6a439a0f14ee98e29eb188afa1b1f.svg'},
              
              {name:'点赞',width:'14',height:'14',url:'https://c.weimobwmc.com/static-resource/3fe1cd2eae0f4ea59bbec9c5a2c7a869.svg'},
              
              {name:'评论',width:'14',height:'14',url:'https://c.weimobwmc.com/static-resource/3522379fb2ca480d8c8bf7ce90264028.svg'},
              
              {name:'关闭',width:'30',height:'30',url:'https://c.weimobwmc.com/static-resource/15e4e18d077e4bc7af38d44902350e38.png'},
              
              {name:'拖拽',width:'12',height:'10',url:'https://c.weimobwmc.com/static-resource/7be27a2142704f92b0bb911dcc6ed8de.svg'},

              {name:'双箭头-右',width:'11',height:'8.5',url:'https://c.weimobwmc.com/static-resource/c78f359425bd478d8646f0a51b44422d.svg'},
              
              {name:'未开始',width:'6',height:'6',url:'https://c.weimobwmc.com/static-resource/ad6160192bfe45f1ab51c6cd326ccab3.svg'},

              {name:'进行中',width:'6',height:'6',url:'https://c.weimobwmc.com/static-resource/d4c52442bd6c46b0bb49afcfd2b708fb.svg'},
              
              {name:'更多',width:'3',height:'14',url:'https://c.weimobwmc.com/static-resource/5ec2397ce65641bbaf1b8e3efa148310.svg'},

              {name:'二维码',width:'16',height:'16',url:'https://c.weimobwmc.com/static-resource/7d9b2c4d4e124131a49cc614280cfb5a.png',type:'png'},

              {name:'皇冠小',width:'32',height:'32',url:'https://c.weimobwmc.com/static-resource/b95715ff3def44a38ccb8993bd44ac3a.svg'},

              {name:'皇冠大',width:'45',height:'45',url:'https://c.weimobwmc.com/static-resource/b95715ff3def44a38ccb8993bd44ac3a.svg'},

              {name:'导出',width:'14',height:'14',url:'https://c.weimobwmc.com/static-resource/52b220892a464632a4a799c723ae9718.svg'},

              {name:'日历',width:'17',height:'17',url:'https://c.weimobwmc.com/static-resource/7d6f643c2a10490bbec5bcaec2233c5b.svg'},
            ],
        }
    }
}
</script>
<style>
.icon-warper{
  overflow:hidden;
  margin-right:-20px;
}
.icon-block{
  width:100px;
  height:100px;
  border:1px solid #e3e2e5;
  display: flex;
  flex-direction: column;
  text-align: center;
  float:left;
  margin:0 20px 20px 0;
}
.icon-block.bg{
  background:#e3e3e3;
}
  .icon-img{
      display: flex;
      margin: auto;
  }
  .icon-name{
    line-height: 18px;
    font-size: 12px;
  }
</style>