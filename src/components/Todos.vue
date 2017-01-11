<template>
  <div class="todos">
  <div class="page-header"><h1>Users TODOs</h1></div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Website</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      <tr v-for="user in users">
        <td>{{user.name}}</td>
        <td>{{user.username}}</td>
        <td>{{user.email}}</td>
        <td>{{user.phone}}</td>
        <td>{{user.website}}</td>
        <td><router-link class="fa fa-list" aria-hidden="true" v-bind:to="'/user/'+user.id"></router-link></td>
        <td><router-link class="fa fa-newspaper-o" aria-hidden="true" v-bind:to="'/posts/'+user.id"></router-link></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'todos',
  data () {
    return {
      users:[]
    }
  },
  methods:{
    showUsers(){
      this.$http.get('https://jsonplaceholder.typicode.com/users')
        .then(function(response){
          this.users=response.body;
        });
    }
  },
  created:function(){
    this.showUsers();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
