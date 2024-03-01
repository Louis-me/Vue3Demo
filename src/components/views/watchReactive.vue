<template>
    <h1>watchEffect监视ref和reactive定义的响应式数据</h1>
    <h2>当前求和：{{sum}}</h2>
    <button @click="sum++">点我加1</button>
    <hr>
    <h2>当前的信息:{{msg}}</h2>
    <button @click="msg+='!'">修改信息</button>
    <hr>
    <h2>姓名：{{person.name}}</h2>
    <h2>年龄：{{person.age}}</h2>
    <h2>薪资:{{person.job.j1.salary}}</h2>
    <button @click="person.name+='!'">修改姓名</button>
    <button @click="person.age++">修改年龄</button>
    <button @click="person.job.j1.salary++">涨薪</button>
 </template>
 
 <script>
    import {ref,reactive,watchEffect} from 'vue';
    export default {
        name: "watch_effect_component01",
        setup(){
            let sum=ref(0);
            let msg=ref('你好');
            let person=reactive({
                name:'张三',
                age:18,
                job:{
                    j1:{
                        salary:100,
                    }
                }
            });
            /**
             * 在watchEffect里面写需要监视的属性，默认会执行一次
             * 如果是监视ref定义的响应式书则需要.value
             * 如果是监视reactive定义的响应式数据则直接监视
             */
            watchEffect(()=>{
                let x1=sum.value;
                let x2=person.job.j1.salary;
                console.log('watchEffect所指定的回调函数执行了');
            })
 
            return{
                sum,
                msg,
                person
            }
        }
    }
 </script>
 
 <style scoped>
 
 </style>