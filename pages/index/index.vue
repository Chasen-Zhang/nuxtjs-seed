<template>
   <div class="container">
      index {{name}}
   </div>
</template>
<script>
export default {
   //需要注意的是，在任何 Vue 组件的生命周期内， 
   //只有 beforeCreate 和 created 这两个方法会在 客户端和服务端被调用。其他生命周期函数仅在客户端被调用。
   
   //layout: '',//自定义布局
   //loading:false,//是否显示loading，可以手动控制，参考https://zh.nuxtjs.org/api/configuration-loading
   //transition:'test' name='test' https://zh.nuxtjs.org/api/pages-transition
   //scrollToTop: false,
   /*validate ({ params }) {
      // 必须是number类型
      return /^\d+$/.test(params.id)
   },*/
   //middleware: 'console',//指定页面中间件
   asyncData (context) {
      // called every time before loading the component
      return { name: 'World' }
   },
   /*async fetch ({ store, params }) { //填充应用的状态树
      let { data } = await axios.get('http://my-api/stars')
      store.commit('setStars', data)
   },*/
   head () {
      // Set Meta Tags for this Page
   },
   components: {
      
   },
   created(){
   }
}
</script>
<style>

.container {
   
}

</style>
