<template>
    <div class="parent">
      我是父组件
      <child msg="传递信息" name="张三" @sendParentMsg="getMsg"/>
    </div>
</template>
<script>
    import Child from "./child.vue";
    export default {
        name: "Parent",
      components: {Child},
      methods:{
        getMsg(msg){
          console.log(msg)
        }
      }
    }
</script>
<style scoped>
  .parent{
    padding: 10px;
    background-color: red;
  }
</style>
