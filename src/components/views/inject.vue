<template>
    <h2>我是孙组件</h2>
    <h3>汽车信息</h3>
    <p>名称：{{name}}</p>
    <p>价格：{{price}}</p>
</template>

<script>
    import {inject,toRefs,ref} from 'vue'
    export default {
        name: "inject_component",
        setup(){
            let car=inject("car");	//使用inject接收
            return{
                ...toRefs(car)
            }
        }
    }
</script>

<style scoped>

</style>
