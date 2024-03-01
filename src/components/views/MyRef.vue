<template>
    <h1>ref</h1>
    <h2>ref定义基本数据类型</h2>
    <p>姓名：{{name}}</p>
    <p>年龄：{{age}}</p>
    <p>婚否：{{isMarry}}</p>
    <h2>ref定义对象类型</h2>
    <p>爱好：{{hobby}}</p>
    <p>证件类型：{{user.idCard}}</p>
    <p>国籍：{{user.nation}}</p>
    <button @click="changeName">修改信息</button>
</template>

<script>
    import {ref} from 'vue'
    export default {
        name: "refComponent",
        setup(){
            // 使用基本数据类型 number,string,boolean,
            let name=ref('张三');
            let age=ref(18);
            let isMarry=ref(false);
            // 使用ref定义数组
            let hobby=ref(['吃饭','睡觉','打豆豆']);
            // 使用ref定义对象
            let user=ref({
                idCard:'身份证',
                nation:['中国','美国','英国','俄罗斯']
            })
            function changeName() {
                //  修改基本数据数据类型
                name.value='李四';    // ref定义的响应式数据修改数据时必需要.value
                age.value=20;
                isMarry.value=true;
                //  修改对象数据类型
                hobby.value[0]='玩游戏';
                user.value.idCard='港澳台居民身份证';
                user.value.nation[0]='挪威';
            }
            return{
                name,
                age,
                isMarry,
                changeName,
                user,
                hobby
            }
        }
    }
</script>

<style scoped>

</style>
