---
title: icon
prev: false
next: false
---
<ClientOnly>
  <tslayout>
    <layout slot="main" ></layout>
  </tslayout>
</ClientOnly>
{{msg}}

````html
  <tslayout>
    <layout slot="main"></layout>
  </tslayout>
````
<script>
export default {
    data(){
        return{
            msg:'输出',
        }
    }
}
</script>
