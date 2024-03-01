<template>
    <h2>setup和配置项混用</h2>
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <h2>性别：{{sex}}</h2>
    <button @click="sayHello">sayHello（Vue3里面的方法）</button>
    <button @click="sayWelcome">sayWelcome（Vue2里面的方法）</button>
    <br>
    <br>
    <button @click="test01">测试Vue2里面调用Vue3里面的属性和方法</button>
    <br>
    <br>
    <button @click="test02">测试Vue3setup里面调用Vue2里面的属性和方法</button>
    <br>
    <h2>sum的值是：{{sum}}</h2>
</template>

<script>
    export default {
        name: "setup01_component",
        data(){
          return{
            sex:'男',
            sum:0,
          }
        },
        methods:{
            sayWelcome(){
                console.log(`sayWelcome`)
            },
            test01(){
                console.log(this.sex);  // Vue2里面的属性(data里面的属性)
                // setup里面的属性
                console.log(this.name);
                console.log(this.age);
                // setup里面的方法
                this.sayHello();
            }
        },
        setup(){
            let sum=100;
            let name='张三';
            let age=18;
            function sayHello() {
                console.log(`我叫${name}，今年${age}`)
            }
            function test02() {
                // setup里面的属性
                console.log(name);
                console.log(age);
				
                // data里面的属性
                console.log(this.sex);
                console.log(this.sayWelcome);
            }
            return{
                name,
                age,
                sayHello,
                test02,
                sum
            }
        }
    }
</script>

<style scoped>

</style>
