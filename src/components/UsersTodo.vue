<template>
    <div class="about">
        <div class="page-header"><h1>User Todos</h1></div>

            <div class="alert alert-success" v-for="todo in todos" v-if="todo.completed">
                <a class="close" v-on:click="deleteTodo(todo.id,todo.userId)"><i class="fa fa-times" aria-hidden="true"></i></a>
                <strong>Complete! </strong>{{todo.title}}
            </div>
            <div class="well" v-for="todo in todos" v-if="!todo.completed">
                <a class="submit"><i class="fa fa-check" aria-hidden="true"></i></a>
                {{todo.title}}
            </div>

    </div>
</template>

<script>
export default {
  name: 'userstodo',
  data () {
    return {
        todos:[]
    }
  },
  methods:{
    showTodos(id){
        this.$http.get('https://jsonplaceholder.typicode.com/todos?userId='+id)
        .then(function(response){
          this.todos=response.body;
        });
    },
    deleteTodo(id,userId){
        this.$http.delete('https://jsonplaceholder.typicode.com/todos/'+id)
        .then(function(){
            this.$router.push({path:'/user/'+userId});
        });
    }
  },
  created:function(){
    this.showTodos(this.$route.params.id);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.submit{
    float: right;
    font-size: 21px;
    font-weight: 700;
    line-height: 1;
    color: #000;
    text-shadow: 0 1px 0 #fff;
    filter: alpha(opacity=20);
    opacity: .2;
}
</style>

