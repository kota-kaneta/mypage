<template id="body">
  <div id="app">
    <router-link to="/" class="top-title">mypage</router-link>
    <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet">
    <div id="pc-nav">
      <v-tabs>
        <v-tab to="/">Home</v-tab>
        <v-tab to="/about">About</v-tab>
        <v-tab to="/skillset">Skillset</v-tab>
        <v-tab to="/works">Works</v-tab>
        <v-tab to="/contact">Contact</v-tab>
      </v-tabs>
    </div>
    <transition name="sp">
    <nav class="sp-nav" v-show="nav_sp" @click="close">
      <ul>
        <li @click="close"><router-link to="/">Home</router-link></li>
        <li @click="close"><router-link to="/about">About</router-link></li>
        <li @click="close"><router-link to="/skillset">Skillset</router-link></li>
        <li @click="close"><router-link to="/show">Works</router-link></li>
        <li @click="close"><router-link to="/contact">CONTACT</router-link></li>
        <li @click="close"><p class="close"><i class="fas fa-times"></i> 閉じる</p></li>
      </ul>
     </nav>
    </transition>
    <div class="wrapper">
      <span class="list" @click="open">
        <i class="fas fa-list"></i>
      </span>
    </div>
    <router-view/>
    <p class="sp-bottom-nav">
    © 2021 Kota Kaneta All rights reserved.
    <span class="seo">金田浩太</span>
    </p>
  </div>
</template>

<style lang="scss">
#app {
  font-family: global-variable-exists($name: a);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  text-shadow: 1px 1px 3px #808080;
  height: 100vh;
  position: relative;
  background-color: #fefef7;
}
.top-title{
  position: absolute;
  top: 0;
  right: 30px;
  color: rgb(164, 188, 204);
  text-shadow: 2px 2px 6px #808080;
  font-size: 35px;
  font-family: 'Kaushan Script', cursive;
  line-height: 1.1;
  -webkit-box-reflect: below -15px -webkit-linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0) 10%,rgba(0, 0, 0, 0.4));
}
#pc-nav,
#sp-nav{
  font-size: 1.3em;
  font-weight: bold;
  background-color:black;
}
@media screen and (max-width: 767px) {
  #pc-nav,
  .bottom-nav{
    display: none;
  }
  #sp-nav{
    display: flex;
  }
}
@media screen and (max-width: 900px) {
  .top-title{
    left: 30px;
  }
}
@media screen and (min-width: 768px){
  #sp-nav,
  .wrapper,
  .sp-bottom-nav,
  .sp-blank{
    display: none;
  }
}
.theme--light.v-tabs > .v-tabs-bar {
  color: rgb(22, 22, 22);
  background-color: rgb(22, 22, 22);
}
.v-tabs { 
  display: flex; 
  justify-content: center;
  background-color:rgb(22, 22, 22);
  border: 2px solid rgba(56, 56, 56, 0.769);
  font-family: 'Kaushan Script', cursive;
}
#pc-nav a,
#sp-nav a {
  font-weight: bold;
  color: #b8c6d5;
  padding: 0 20px;
  font-size: 18px;
  background-color:rgb(22, 22, 22);
}
.v-tabs-slider{
  color: #b8c6d5;
}
.bottom-nav{
  font-family: 'Kaushan Script', cursive;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding-top: 15px;
  font-size: 18px;
  background-color: rgb(16, 16, 16);
  color: #d7e4f1;
  height: 60px;
  z-index: 30;
}
.sp-bottom-nav{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding-top: 15px;
  font-size: 18px;
  background-color: rgb(16, 16, 16);
  color: #d7e4f1;
  height: 60px;
  font-family: 'Kaushan Script', cursive;
}
.seo{
  position: absolute;
  right: 3ch;
  text-shadow: none;
  color: rgb(16, 16, 16);
  font-size: 1px;
}
.sp-blank{
  height: 100px;
}
.router-link{
  color: whitesmoke;
}
.sp-nav {
  z-index: 100;
  font-size: 38px;
  position: fixed;
  top: -50px;
  left: 0;
  width: 100%;
  height: 110vh;
  display: block;
  width: 100%;
  background: rgba(24, 24, 24, 0.8);
  transition: all .2s ease-in-out;
  padding-bottom: 80px;
}
.sp-nav ul {
   padding: 0;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   height: 100%;
   list-style: none;
}
.sp-nav li {
   margin: 0;
   padding: 0;
}
.sp-nav li span {
   font-size: 15px;
   color: #fff;
}
.sp-nav li a, .sp-nav li span {
   display: block;
   padding: 20px 0;
}
.wrapper{
  width: 100%;
  height: 55px;
  background-color: #252525;
  border: #474747af 2px solid;
}
.list{
  color: white;
  position: absolute;
  top: 6px;
  right: 15px;
  font-size: 40px;
}
.close{
  padding-top:30px;
  color: #3e9af5;
  font-size: 20px;
}
.v-enter {
  transform: translate(0, -100px);
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}
.v-enter-active {
  transition: all 1.5s 0s ease;
}
.sp-enter{
  transform: translate(0, -100px);
  opacity: 0;
}
.sp-enter-to{
  opacity: 0.5s;
}
.sp-enter-active{
  transition: all 0.5s 0s ease;
}
.fas{
  padding-left: 7px;
}
a {
  text-decoration: none;
  cursor: pointer;
  cursor: hand;
  font-family: 'Kaushan Script', cursive;
}
a:link { color: rgb(250, 226, 215); }
a:visited { color: rgb(250, 226, 215) }
</style>

<script src="https://kit.fontawesome.com/4194671020.js" crossorigin="anonymous"></script>

<script>

export default {
  name: "#app",
  data: function(){
    return{
      nav_sp: false
    }
  },
  methods:{
    open: function(){
      this.nav_sp = true
    },
    close: function(){
      this.nav_sp = false
    }
  }
}
</script>