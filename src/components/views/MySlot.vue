<template>
    <div class="slot">
      <h2>我是MySlot组件1</h2>
      <slot></slot>
      <br>
      <slot name="header"></slot>
      <br>
      <slot name="footer"></slot>
    </div>
</template>

<script>
    export default {
        name: "MySlot",
        mounted(){
            console.log(111);

          console.log(this);
        }
    }
</script>

<style scoped>
  .slot{
    padding: 10px;
    background: orange;
  }
</style>

