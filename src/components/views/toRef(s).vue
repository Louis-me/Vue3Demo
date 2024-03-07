<template>
    <h2>toRef与toRefs</h2>
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <!-- <h2>薪水：{{salary}}k</h2> -->
    <h2>薪水：{{job.salary}}k</h2>

    <button @click="name+='!'">修改姓名</button>
    <button @click="age++">修改年龄</button>
    <!-- <button @click="salary++">涨点薪资</button> -->
    <button @click="job.salary++">涨点薪资a</button>

</template>

<script>
    import {reactive,toRef, toRefs} from 'vue'
    export default {
        name: "toRef_component",
        setup(){
            let person=reactive({
                name:'二郎神杨杨戬',
                age:18,
                job:{
                    salary:20
                }
            })
            // return{
            //     name:toRef(person,'name'),
            //     age:toRef(person,'age'),
            //     salary:toRef(person.job,'salary')
            // }
            return {
                ...toRefs(person)
            }
        }
    }
</script>

<style scoped>

</style>