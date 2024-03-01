<template>
    <div class="child">
      <h2>我是子组件</h2>
      <p>父组件传递过来的消息是:{{msg}}</p>
      <p>父组件传递过来的消息是:{{name}}</p>
      <button @click="sendMsg">向父组件的传递信息</button>
    </div>
</template>
<script>
    export default {
        name: "Child",
        props:{
          msg:{
            type:String,
            default:''
          },
          name:{
            type:String,
            default:''
          }
        },
        mounted(){
          console.log(this);
        },
        methods:{
          sendMsg(){
            this.$emit("sendParentMsg",'通知父组件更新123')
          }
        }
    }
</script>
<style scoped>
  .child{
    padding: 10px;
    background-color: orange;
  }
</style>

