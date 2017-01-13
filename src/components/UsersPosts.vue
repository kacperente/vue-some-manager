<template>
    <div class="usersposts">
        <div class="page-header"><h1>Posts of {{user.name}}</h1></div>
        <div class="panel panel-default" v-for="post in posts">
            <div class="panel-heading">{{post.title}}</div>
            <div class="panel-body">{{post.body}}</div>
            <div class="panel-footer">
                <i class="fa fa-trash" v-on:click="deletePost(post.id,post.userId)"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'usersposts',
  data () {
    return {
        user:[],
        posts:[]
    }
  },
  methods:{
    showPosts(id){
        this.$http.get('https://jsonplaceholder.typicode.com/posts?userId='+id)
        .then(function(response){
          this.posts=response.body;
        });
    },
    deletePost(id,userId){
        this.$http.delete('https://jsonplaceholder.typicode.com/posts/'+id)
        .then(function(){
            this.$router.push({path:'/posts/'+userId});
        });
    },
    getUser(id){
        this.$http.get('https://jsonplaceholder.typicode.com/users/'+id)
        .then(function(response){
            this.user=response.body;
        });
    }
  },
  created:function(){
    this.getUser(this.$route.params.id);
    this.showPosts(this.$route.params.id);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>