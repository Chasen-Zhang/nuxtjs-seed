<template>
   <div class="container2">
      <nuxt-link class="a" to="/">首页another</nuxt-link>
      <nuxt-link class="a" to="/about">关于nother</nuxt-link>
      <nuxt-link class="a" to="/about/list">关于-列表nother</nuxt-link>
      <nuxt-link class="a" to="/user/one">用户nother</nuxt-link>
      <el-button type="primary" @click="getArtical">获取一条文章</el-button>
      <van-button type="danger">危险按钮</van-button>
      <h1 v-for="(item,index) in data" :key="index">{{item.updatedAt}}</h1>
     
      <div>{{oneWenzhang}}</div>
      <nuxt-child></nuxt-child>
   </div>
</template>
<script>
// import Logo from '~/components/Logo.vue'
import Vue from 'vue';
import { Notify } from 'vant';

Vue.use(Notify);
import {requestGet} from '~/assets/js/server'
export default {
    layout: 'blog',
    async asyncData ({req, res}) {
      let data = await requestGet('http://localhost:3001/getAll',{});
      if(data.code==200){
        return { data: data.data}
      }
    },
    data(){
      return {
        oneWenzhang:''
      }
    },
    components: {
        
    },
    methods:{
      async getArtical(){
        let data = await requestGet('http://localhost:3001/article/1');
        if(data.code==200){
          this.oneWenzhang = data.data;
            Notify({
              message: '自定义颜色',
              color: '#ad0000',
              background: '#ffe1e1'
            });
        }
      }
    }
   
}
</script>
<style lang="less" scoped>

.container2 {
   padding-top: 20px;
   .a {
      color:blue;
      font-size: 10px;
      border-right:1px solid red;
      padding:1px;
   }
}

</style>
