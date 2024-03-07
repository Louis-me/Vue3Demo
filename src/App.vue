<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />

  <router-link to="/home">首页</router-link><br />
  <router-link to="/Vue2propsparent">Vue2prop应用</router-link><br />
  <router-link to="/Vue2slotindex">Vue2里面slot的使用</router-link><br />
  <router-link to="/myRef">Vue3里面Ref</router-link><br />
  <router-link to="/MyReactive">Vue3里面Reactive</router-link><br />
  <router-link to="/watchRef">Vue3里面watch监听Ref</router-link><br />
  <router-link to="/watchReactive">Vue3里面watchEffect监视ref和reactive定义的响应式数据f</router-link><br />
  <router-link to="/toRefs">toRef与toRefs</router-link><br />
  <router-link to="/provide">provide(祖)和inject（孙）交互</router-link>

  
   <!-- 声明路由的占位符 -->
   <router-view></router-view>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>
