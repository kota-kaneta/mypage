<template id="body">
  <div id="app">
    <span class="top-title">mypage</span>
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
    <nav class="sp-nav" v-show="nav_sp">
      <ul>
        <li @click="close"><router-link to="/">Home</router-link></li>
        <li @click="close"><router-link to="/about">About</router-link></li>
        <li @click="close"><router-link to="skillset">Skillset</router-link></li>
        <li @click="close"><router-link to="works">Works</router-link></li>
        <li @click="close"><router-link to="/contact">CONTACT</router-link></li>
        <li @click="close"><p class="close"><i class="fas fa-times"></i> 閉じる</p></li>
       </ul>
     </nav>
    <div class="wrapper">
      <div id="hamburger" @click="open">
        <span></span>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
.router-link{
  color: whitesmoke;
}
.sp-nav {
  z-index: 1;
  font-size: 33px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: block;
  width: 100%;
  background: rgba(0, 0, 0, .8);
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
  background-color: #2c3e50;
}
#hamburger {
  position: relative;
  display: block;
  width: 30px;
  height: 25px;
  margin: 0 0 0 auto;
}
#hamburger span {
  position: absolute;
  top: 28px;
  left: -20px;
  display: block;
  width: 100%;
  height: 2px;
  background-color: rgb(253, 251, 251);
  transform: translateY(-50%);
}
#hamburger::before {
  content: '';
  display: block;
  position: absolute;
  top: 15px;
  left: -20px;
  width: 100%;
  height: 2px;
  background-color: #fff;
}
#hamburger::after {
  content: '';
  display: block;
  position: absolute;
  bottom: -15px;
  left: -20px;
  width: 70%;
  height: 2px;
  background-color: #fff;
}
.close{
  padding-top:30px;
  color: #3e9af5;
  font-size: 20px;
}
.v-enter {
  transform: translate(0, 100px);
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}
.v-enter-active {
  transition: all 1.5s 0s ease;
}
#app {
  font-family: global-variable-exists($name: a);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  text-shadow: 1px 1px 3px #808080;
  height: 100vh;
  position: relative;
}
.top-title{
  position: absolute;
  top: -7px;
  left: 30px;
  color: rgb(164, 188, 204);
  text-shadow: 2px 2px 6px #808080;
  font-size: 35px;
  font-family: 'Kaushan Script', cursive;
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
@media screen and (min-width: 768px){
  #sp-nav,
  .wrapper{
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

/* Background data (Original source: https://subtlepatterns.com/grid-me/) */
$bg-url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAABnSURBVHja7M5RDYAwDEXRDgmvEocnlrQS2SwUFST9uEfBGWs9c97nbGtDcquqiKhOImLs/UpuzVzWEi1atGjRokWLFi1atGjRokWLFi1atGjRokWLFi1af7Ukz8xWp8z8AAAA//8DAJ4LoEAAlL1nAAAAAElFTkSuQmCC";
$bg-width: 50px;
$bg-height: 50px;

/* 常時アニメーション */
@-webkit-keyframes bg-scrolling-reverse {
  100% { background-position: $bg-width $bg-height; }
}
@-moz-keyframes    bg-scrolling-reverse {
  100% { background-position: $bg-width $bg-height; }
}
@-o-keyframes      bg-scrolling-reverse {
  100% { background-position: $bg-width $bg-height; }
}
@keyframes         bg-scrolling-reverse {
  100% { background-position: $bg-width $bg-height; }
}

@-webkit-keyframes bg-scrolling {
  0% { background-position: $bg-width $bg-height; }
}
@-moz-keyframes    bg-scrolling {
  0% { background-position: $bg-width $bg-height; }
}
@-o-keyframes      bg-scrolling {
  0% { background-position: $bg-width $bg-height; }
}
@keyframes         bg-scrolling {
  0% { background-position: $bg-width $bg-height; }
}

/* Main styles */
body {
  color: #999;
  font: 400 16px/1.5 exo, ubuntu, "segoe ui", helvetica, arial, sans-serif;
  text-align: center;
  /* img size is 50x50 */
  background: url($bg-url) repeat 0 0;
  
  -webkit-animation: bg-scrolling-reverse .92s infinite; /* Safari 4+ */
  -moz-animation:    bg-scrolling-reverse .92s infinite; /* Fx 5+ */
  -o-animation:      bg-scrolling-reverse .92s infinite; /* Opera 12+ */
  animation:         bg-scrolling-reverse .92s infinite; /* IE 10+ */
  -webkit-animation-timing-function: linear;
  -moz-animation-timing-function:    linear;
  -o-animation-timing-function:      linear;
  animation-timing-function:         linear;
}
a {
  text-decoration: none;
  cursor: pointer;
  cursor: hand;
}
a:link { color: #7e7ef5; }
a:visited { color: #5a5aec; }
a:hover { color: #ff0000; }
a:active { color: #ff8000; }
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

window.WebFontConfig = {
  google: { families: ['Montserrat:400,600'] },
  active: function() {
    sessionStorage.fonts = true;
  }
};
(function() {
  var wf = document.createElement('script');
  wf.src = 'https://fonts.googleapis.com/css?family=Exo:100';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();
</script>