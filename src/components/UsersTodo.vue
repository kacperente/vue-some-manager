<template>
    <div class="about">
        <div class="page-header"><h1>User Todos</h1></div>
        <ul class="list-group">
            <li class="list-group-item" v-for="todo in todos">{{todo.title}}</li>
        </ul>
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
    }
  },
  created:function(){
    this.showTodos(this.$route.params.id);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

