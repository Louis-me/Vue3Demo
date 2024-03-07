<template>
    <h2>我是祖组件</h2>
    <h3>汽车信息</h3>
    <p>名称：{{name}}</p>
    <p>价格：{{price}}</p>
    <inject_component></inject_component>
</template>

<script>
    import {reactive,toRefs,provide} from 'vue'
    import inject_component from "./inject.vue"

    export default {
        name: "provide_component",
        setup(){
            let car=reactive({
                name:'宝马',
                price:'40w'
            });
            provide('car',car);	// 提供provide
            return{
                ...toRefs(car)
            }
        },
        components:{
            inject_component
        }
    }
</script>

<style scoped>

</style>