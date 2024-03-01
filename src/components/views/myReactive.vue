<template>
    <h2>reactive响应式数据</h2>
    <p>姓名：{{student.name}}</p>
    <p>年龄：{{student.age}}</p>
    <p>爱好：{{student.hobbies}}</p>
    <button @click="changeStuInfo">改变学生信息</button>
</template>

<script>
    import {reactive} from 'vue'
    export default {
        name: "reactiveComponent",
        setup(){
                // 数据
            let student=reactive({
                name:'张三',
                age:19,
                hobbies:['吃饭','睡觉','打豆豆']
            });
            console.log(student)
            // 方法
            function changeStuInfo() {
                student.name='李四';
                student.age=20;
                student.hobbies[0]='做家务'	
            }
            return{
                student,
                changeStuInfo,
            }
        }
    }
</script>

<style scoped>

</style>
