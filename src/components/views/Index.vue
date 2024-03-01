<template>
    <div class="index">
      <h2>我是Index组件</h2>
      <!--写法一-->
      <my-slot>
        <!--插槽里面的内容-->
        <h2>传入的slot参数</h2>
        <h2>传入的slot参数</h2>
        <h2>传入的slot参数</h2>
        <h2>传入的slot参数</h2>
      </my-slot>
      <!--写法二-->
      <my-slot>
        <div slot="header">
         <span>我在header插槽中</span>
      </div>  
        
        <div slot="header">
         <span>我是footer附件</span>
      </div>  
      </my-slot>
    </div>
</template>

<script>
    import MySlot from "./MySlot.vue";
    export default {
        name: "Index",
      components: {MySlot}
    }
</script>

<style scoped>
  .index{
    padding: 10px;
    background: red;
  }
</style>

