<template>
    <div class="photos">
        <ul class="photos-list">
            <li class="photo" v-for="photo in photos">
                <img :src="photo.thumbnailUrl" @click="showModal(photo.url,photo.title)">
            </li>
        </ul>

        <transition name="modal">
            <div class="modal-mask" v-if="show" @click="show=false">
                <div class="modal-wrapper">
                    <div class="modal-container">
                        <img :src="photoUrl"/>
                        <div class="title">{{photoTitle}}</div>
                    </div>
                </div>
            </div>
        </transition>

    </div>
</template>

<script>
export default {
  name: 'photos',
  data () {
    return {
        photos:[],
        user:'',
        show:false,
        photoUrl:'',
        photoTitle:''
    }
  },
  methods:{
       getPhotos(albumId){
            this.$http.get('http://jsonplaceholder.typicode.com/albums/'+albumId+'/photos')
            .then(function(response){
              this.photos=response.body;
            });
       },
       showModal(url,title){
        this.photoUrl=url;
        this.photoTitle=title;
        this.show=true;
       }
  },
  created:function(){
      this.getPhotos(this.$route.params.albumId);
  },
  components:{

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
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-container {
  width:640px;
  margin: 0px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}
.title{
    padding-top:20px;
    text-align:center;
}
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
