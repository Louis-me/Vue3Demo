<template>
    <h2>watch监听ref定义的响应式数据</h2>
    <h2>姓名：{{userName}}</h2>
    <h2>年龄：{{age}}</h2>
    <button @click="userName+='!'">修改姓名</button>
    <button @click="age++">修改年龄</button>
    <hr>
    <h2>姓名：{{user.name}}</h2>
    <h2>年龄：{{user.age}}</h2>
    <button @click="user.name+='!'">修改姓名</button>
    <button @click="user.age++">修改年龄</button>
 </template>
 
 <script>
    import {ref,watch} from 'vue';
    export default {
        name: "watch_component01",
        setup(){
            let userName=ref('张三');
            let age=ref(18);
            let user=ref({
                name:'张三',
                age:21,
            })
            // watch监听ref定义的单个响应式数据
            watch(userName,(newValue,oldValue)=>{
                console.log(`userName发生了变化,新值是:${newValue},旧值是:${oldValue}`)
            });
            watch(age,(newValue,oldValue)=>{
                console.log(`age发生了变化,新值是:${newValue},旧值是:${oldValue}`);
            });
 
            // 如果需要监听多个ref定义的响应式数据的话，代码如下
            /**
             * newValue和oldValue都是数组的形式，其中数组的第n位表示监听位置的第n位
             * 例如：此例子中，监听属性的第一位是userName,那位newValue和oldValue对应的第一位也是
             * userName。
             * 如果有立即执行，那么最开始的值为[],而不是[undefined,undefined]
             */
            watch([userName,age],(newValue,oldValue)=>{
               console.log('userName或age中的其中一个发生了变化,',newValue,oldValue)
            })
            
            // watch监视ref定义的响应式对象数据
            watch(user.value,(newValue,oldValue)=>{
                console.log('person发生了变化',newValue,oldValue)
            })
            watch(user,(newValue,oldValue)=>{
                console.log('person发生了变化',newValue,oldValue);
            },{deep:false})
            
            return{
                userName,
                age,
                user
            }
        }
    }
 </script>
 
 <style scoped>
 
 </style>
 