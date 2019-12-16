<template>
   <div class="container2">
     <el-button type="primary" @click="login">登录</el-button>
   </div>
</template>
<script>
// import Logo from '~/components/Logo.vue'
import {requestGet} from '~/assets/js/server'
export default {
  components: {
      
  },
  methods:{
    login(){
      window.localStorage.setItem('token','testtoken')
      this.$router.push('/')
    }
  }
}
</script>
<style lang="less" scoped>

</style>
