<template>
    <div class="photos">
        <ul class="photos-list">
            <li class="photo" v-for="photo in photos"><a :href="photo.url"><img :src="photo.thumbnailUrl"></a></li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'photos',
  data () {
    return {
        photos:[],
        user:''
    }
  },
  methods:{
       getPhotos(albumId){
            this.$http.get('http://jsonplaceholder.typicode.com/albums/'+albumId+'/photos')
            .then(function(response){
              this.photos=response.body;
            });
       }
  },
  created:function(){
      this.getPhotos(this.$route.params.albumId);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.photos-list{
  list-style: none;

  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;

  -webkit-flex-flow: row wrap;
  align-content:flex-start;
}
</style>
