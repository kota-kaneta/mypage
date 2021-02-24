<template>
  <div class="home">
      <Header class="pc-home">Home <i class="fas fa-home"></i></Header>
    <!-- <div class="triangle2"></div> -->
    <div class="triangle3"></div>
    <div class="blank"></div>
    <!-- <div class="mypage">
      <v-img rel="preload" src="@/assets/mypage.png" border="1"></v-img>
    </div> -->
    <!-- <v-card class="mx-auto" height="256" rounded="xl" width="500" @click="go" v-show="anime">
      Click!
    </v-card> -->
    <div v-show="skipBefore" class="typer">
      <vue-typer :text="text" repeat= "0" typeDelay="40" caretAnimation="smooth" pre-type-delay="200"></vue-typer>
    </div>
    <div v-show="skipAfter" class="typer">
    Thank you for visiting this site！<br><br>
    Nice to meet you, I'm Kota Kaneta.<br><br>
    You can see the skills I have by looking at this site.<br>
    You can also check the source code of the portfolio.<br><br>
    If you are interested in me, please contact us using the contact form.
    </div>
    <div class="sp-home">
      <i class="fas fa-home"></i> Home<br><br>
      Nice to meet you,<br>I'm Kota Kaneta.<br><br>
      You can see my skills<br> and profile on this site.<br><br>
      please contact us using the contact form.
    </div>
    <span v-show="beforeButton" @click="skip" class="button">
      <i class="fas fa-forward"></i>skip
    </span>
    <span v-show="afterButton" class="face"><i class="far fa-laugh-squint"></i></span>
    <p class="bottom-nav">
      © 2021 Kota Kaneta
    </p>
  </div>
</template>

<style scoped lang="scss">
// .mypage{
//   position:fixed;
//   top:-50px;
//   left:0;
//   right:0;
//   background-image: url();
// }
.home{
  font-size: 42px;
  position: relative;
  padding-top: 0px;
  font-family: 'Kaushan Script', cursive;
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
.button{
  position: fixed;
  bottom: 100px;
  right: 100px;
  font-size: 25px;
  display: inline-block;
  outline: none;
  transition: .3s;
  -webkit-transform: scale(1);
  transform: scale(1);
  cursor: pointer;
  cursor: hand;
  z-index: 3;
  color: rgb(250, 226, 215);
}
.face{
  position: fixed;
  bottom: 100px;
  right: 100px;
  color: rgb(250, 226, 215);
  z-index: 5;
}
.far{
  position: fixed;
  bottom: 100px;
  right: 100px;
}
.button:hover{
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
  color: #ff8000;
}
.button:active {
  -webkit-transform: translateY(3px);
  transform: translateY(3px);
}
@media screen and (max-width: 768px) {
  .button,
  .typer,
  .pc-home,
  .bottom-nav,
  .triangle3{ 
    display:none; 
  }
  .blank{
    display: none;
  }
  .home{
    padding-top: 30px;
  }
}
@media screen and (min-width: 768px){
  .sp-home{
    display: none;
  }
}
.mx-auto{
  position: fixed;
  top: 35%;
  left: 35%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .3s;
  -webkit-transform: scale(1);
  transform: scale(1);
}
.mx-auto:hover{
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.bottom-nav{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding-top: 15px;
  font-size: 18px;
  background-color: rgb(16, 16, 16);
  color:#d7e4f1;
  height: 60px;
  z-index: 30;
}
.blank{
  height: 150px;
}
.typer{
  position: absolute;
  right: 0;
  left: 0;
  z-index: 5;
}
.triangle3{
  border-bottom: 130px solid #2c3e50;
  border-right: 0px solid transparent;
  border-left: 100vw solid transparent;
  position: fixed;
  width: 100%;
  height: 200px;
  bottom: 60px;
  z-index: 2;
}
.vue-typer {
  color: #2c3e50;
  .custom.char {
    color: #2c3e50;
  }
}
</style>

<script>
import { VueTyper } from 'vue-typer'
// import { KinesisContainer, KinesisElement} from 'vue-kinesis'
import Header from "@/components/Header.vue";

export default {
  name: "home",
  components: {
    'vue-typer': VueTyper,
    // 'kinesis-container': KinesisContainer,
    // 'kinesis-element': KinesisElement
    Header
  },
  data: function(){
    return{
      skipBefore: true,
      skipAfter: false,
      text: "Thank you for visiting this site！\n\nNice to meet you, I'm Kota Kaneta.\n\nYou can see the skills I have by looking at this site.\nYou can also check the source code of the portfolio.\n\nIf you are interested in me, please contact us using the contact form.",
      beforeButton: true,
      afterButton: false,
      reverse: "hello!",
      anime: true
    }
  },
  methods: {
    skip: function(){
      this.skipBefore = false,
      this.skipAfter = true,
      this.beforeButton = false,
      this.afterButton = true
    },
    go: function(){
      this.anime = false
    }
  }
}
</script>