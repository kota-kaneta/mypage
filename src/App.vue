<template id="body">
  <div id="app">
    <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="preload" as="style">
    <div id="nav">
      <v-tabs>
        <v-tab to="/">Home</v-tab>
        <v-tab to="/about">About</v-tab>
        <v-tab to="/skillset">Skillset</v-tab>
        <v-tab to="works">works</v-tab>
        <v-tab to="/contact">Contact</v-tab>
      </v-tabs>
    </div>
    <!-- （1）アニメーションどこかで使う -->
    <!-- <div class="shutter"></div>
    <section class="container"> -->
    <router-view/>
    <!-- <p class="github">
      <i class="fab fa-github"></i>
    </p> -->
    <!-- </section> -->
  </div>
</template>

<style lang="scss">

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
#nav {
  font-size: 1.3em;
  font-weight: bold;
  background-color:rgb(252, 248, 248);
}
.v-tabs { 
  display: flex; 
  justify-content: center;
  background-color: rgb(252, 248, 248);
  border: 2px solid rgba(233, 233, 233, 0.769);
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 20px;
  font-size: 18px;
  background-color:rgb(252, 248, 248);
}

.v-tabs-slider{
  color: #2c3e50;
}
@import url(https://fonts.googleapis.com/css?family=Exo:100);

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
a:link { color: #0000ff; }
a:visited { color: #000080; }
a:hover { color: #ff0000; }
a:active { color: #ff8000; }

// （1）アニメーションどこかで使う
// .shutter{
//   position:fixed;
//   top:0;
//   left:0;
//   right:0;
//   bottom:0;
//   background-color:#474552;
//   z-index:9999;
//   animation: byeShutter 3.0s forwards;
  
//   &::before,
//   &::after{
//     content:'';
//     position:absolute;
//     top:0;
//     left:0;
//     bottom:0;
//     margin:auto;
//   }
  
//   &::before{
//     background-color:#afb9ce;
//     width:0;
//     height:1px;
//     animation: shutterOpen1 3.0s forwards;
//   }
  
//   &::after{
//     width:120%;
//     height:0;
//     margin-left:-10%;
//     background-color:#eff1ed2f;
//     animation: shutterOpen2 3.0s forwards;
//   }
// }

// .content{
//   animation: contentScale 3.0s forwards;
// }

// @keyframes byeShutter{
//   70%{
//     opacity:1;
//   }
//   100%{
//     opacity:0;
//     display:none;
//     z-index:-1;
//   }
// }

// @keyframes shutterOpen1{
//   0%{
//     width:0;
//     height:1px;
//   }
//   50%{
//     width:100%;
//     height:1px;
//   }
//   90%{
//     width:100%;
//     height:100%;
//   }
//   100%{
//     width:100%;
//     height:100%;
//   }
// }

// @keyframes shutterOpen2{
//   60%{
//     width:120%;
//     height:0;
//     transform:rotate(5deg);
//   }
//   90%{
//     width:120%;
//     height:100%;
//     transform:rotate(-5deg);
//   }
//   100%{
//     width:120%;
//     height:100%;
//     transform:rotate(-5deg);
//   }
// }

// @keyframes contentScale{
//   70%{
//     transform:perspective(800px) scale(0.9) rotateX(15deg);
//   }
//   100%{
//     transform:perspective(800px) scale(1) rotateX(0);
//   }
// }
</style>

<script src="https://kit.fontawesome.com/4194671020.js" crossorigin="anonymous"></script>

<script>

export default {
  name: "#app"
}
</script>