<template>
   <div class="container3">
       about1{{test}}
       <h1 ref="leave" v-for="(item,index) in data" :key="index">{{item.title}}{{item.updatedAt}}</h1>
       <img src="~/assets/img/test.jpg">
       <img src="/test.jpg">

       <ul>
         <li v-for="todo in todos" :key="todo">
            <input type="checkbox" :checked="todo.done" @change="toggle(todo)">
            <span :class="{ done: todo.done }">{{ todo.text }}</span>
         </li>
         <li><input placeholder="What needs to be done?" @keyup.enter="addTodo"></li>
      </ul>
   </div>
</template>
<script>
import { mapMutations } from 'vuex'
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
   computed: {
      todos () {
         return this.$store.state.todos.list
      }
   },
   created:function(){
      this.$nextTick(function(){
         if (process.client) {
            console.log(this.$refs.leave)
            console.log(document.cookie)
         }  
         
      })
   },
   methods:{
      addTodo (e) {
         this.$store.commit('todos/add', e.target.value)
         e.target.value = ''
      },
      ...mapMutations({
         toggle: 'todos/toggle'
      })
   }
}
</script>
<style>

.done {
  text-decoration: line-through;
}

</style>
