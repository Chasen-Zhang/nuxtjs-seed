<template>
   <div class="container3">
       about1{{test}}
       <h1 ref="leave" v-for="(item,index) in data" :key="index">{{item.title}}{{item.updatedAt}}</h1>
       <img src="~/assets/img/test.jpg">
       <img src="/test.jpg">
   </div>
</template>
<script>

import axios from 'axios'
export default {
   data(){
      return{
         test:'tdddsest'
      }
   },
   asyncData ({ params }) {
      return axios.get(`http://localhost:3001/getAll`)
         .then((res) => {
            return { data: res.data.data }
         })
   },
   components: {
      //https://chasen.shop/koa2/article/1
   },
   created:function(){
      this.$nextTick(function(){
         if (process.client) {
            console.log(this.$refs.leave)
            console.log(document.cookie)
         }  
         
      })
   }
}
</script>
<style>

.container3 {
   
}

</style>
