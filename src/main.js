// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import Todos from './components/Todos'
import UsersTodo from './components/UsersTodo'
import UsersPosts from './components/UsersPosts'
import Albums from './components/Albums'
import Photos from './components/Photos'
import About from './components/About'


Vue.use(vueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/',component:Todos},
    {path: '/about',component:About},
    {path: '/user/:id',component:UsersTodo},
    {path: '/posts/:id',component:UsersPosts},
    {path: '/albums/:userId',component:Albums},
    {path: '/photos/:albumId',component:Photos}
  ]

})
/* eslint-disable no-new */
new Vue({
  router,
  template: `
  <div id="app">
        <nav class="navbar navbar-inverse">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link class="navbar-brand" to="/">Some Manager</router-link>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li><router-link to="/">Users</router-link></li>
            <li><router-link to="/about">About</router-link></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
  `
}).$mount('#app')
