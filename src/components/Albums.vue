<template>
        <div class="albums">
            <div class="page-header"><h1>{{user.name}} album</h1></div>
            <ul class="albums-list">
                <li class="album well" v-for="album in albums">
                    <img src="../assets/empty-album.png" alt="Nature" style="width:100%">
                    <div class="caption">
                        <router-link class="album-title" v-bind:to="'/album/'+user.id">{{album.title}}</router-link>
                    </div>
                </li>
            </ul>
        </div>
</template>

<script>
export default {
  name: 'albums',
  data () {
    return {
        albums:[],
        user:''
    }
  },
  methods:{
    showAlbums(userId){
        this.$http.get('http://jsonplaceholder.typicode.com/users/'+userId+'/albums')
        .then(function(response){
          this.albums=response.body;
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
    this.getUser(this.$route.params.userId);
    this.showAlbums(this.$route.params.userId);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.albums-list{
  padding: 0;
  margin: 0;
  list-style: none;

  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;

  -webkit-flex-flow: row wrap;
  justify-content: space-around;
}
.album{
    padding: 10px;
    width: 250px;
    height: 300px;
    margin-top: 10px;
}
.album>img{
    margin-bottom:15px;
}
.caption{
    text-align:center;
}
.caption>a{
    color:black;
}
</style>

