<template>
   <div class="container">
      <nuxt-link class="a" to="/home">index</nuxt-link>
      <nuxt-link class="a" to="/home/about">关于</nuxt-link>
      <nuxt-link class="a" to="/home/about/list">关于-列表</nuxt-link>
      <nuxt-link  class="a" to="/home/user/one">用户</nuxt-link>
      <nuxt-child/>
   </div>
</template>
<script>
// import Logo from '~/components/Logo.vue'
export default {
   mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
   },
   components: {
      
   }
}
</script>
<style lang="less" scoped>

.container {
   padding-top: 20px;
   .a {
      color:blue;
      font-size: 20px;
      border-right:1px solid red;
      padding:5px;
   }
}

</style>
