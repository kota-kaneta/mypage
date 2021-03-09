<template>
  <div class="home">
      <Header>Home<i class="fas fa-home"></i></Header>
    <div class="triangle3"></div>
    <transition appear>
      <div>
        <div class="blank"></div>
        <div class="hand">
          <i class="fas fa-hand-point-up"></i>
          <p class="click">click!</p>
        </div>
        <div v-show="skipBefore" class="typer">
          <vue-typer :text="text" repeat= "0" typeDelay="40" caretAnimation="smooth" pre-type-delay="200"></vue-typer>
        </div>
        <div v-show="skipAfter" class="typer">
        Thank you for visiting this site!<br><br>
        Nice to meet you, I'm Kota Kaneta.<br><br>
        You can see the skills I have by looking at this site.<br>
        You can also check the source code of the portfolio.<br><br>
        If you are interested in me, please contact us using the contact form.
        </div>
      </div>
    </transition>
    <transition appear>
      <div class="sp-home">
        Thank you for<br>
        visiting this site!<br><br>
        Nice to meet you, I'm Kota Kaneta.<br><br>
        You can see my skills<br>
        from the navigation in the upper right. <i class="fas fa-bomb"></i><br><br>

      </div>
    </transition>
    <span v-show="beforeButton" @click="skip" class="button">
      <i class="fas fa-forward"></i>skip
    </span>
    <p class="bottom-nav">
      © 2021 Kota Kaneta All rights reserved.
      <span class="seo">金田浩太</span>
    </p>
  </div>
</template>

<style scoped lang="scss">
.home{
  font-size: 42px;
  position: relative;
  padding-top: 0px;
  font-family: 'Kaushan Script', cursive;
  background-color: #fefef7;
}
.v-enter {
  transform: translate(0,0);
}
.v-enter-active {
  transition: all 3.0s 0s ease;
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
.button:hover{
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
}
.button:active {
  -webkit-transform: translateY(3px);
  transform: translateY(3px);
}
@media screen and (max-width: 768px) {
  .typer,
  .bottom-nav{ 
    display:none; 
  }
  .blank{
    display: none;
  }
  .sp-home{
    padding-top: 130px;
  }
}
@media screen and (max-width: 1200px) {
  .button,
  .triangle3{
    display: none;
  }
}
@media screen and (min-width: 767px){
  .sp-home,
  .hand{
    display: none;
  }
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
.hand{
  position: absolute;
  top: 10px;
  right: 18px;
  -webkit-animation: blink 1s ease infinite;
	animation: blink 1.8s ease infinite;
  font-size: 45px;
}
.click{
  font-size: 15px;
  position: absolute;
  top: 60px;
  left: 8px;
}
@-webkit-keyframes blink {
	0% {opacity: 0;}
	100% {opacity: 1;}
}
@keyframes blink {
	0% {opacity: 0;}
	100% {opacity: 1;}
}
</style>

<script>
import { VueTyper } from 'vue-typer'
import Header from "@/components/Header.vue";

export default {
  name: "home",
  components: {
    'vue-typer': VueTyper,
    Header
  },
  data: function(){
    return{
      skipBefore: true,
      skipAfter: false,
      text: "Thank you for visiting this site!\n\nNice to meet you, I'm Kota Kaneta.\n\nYou can see the skills I have by looking at this site.\nYou can also check the source code of the portfolio.\n\nIf you are interested in me, please contact us using the contact form.",
      beforeButton: true
    }
  },
  methods: {
    skip: function(){
      this.skipBefore = false,
      this.skipAfter = true,
      this.beforeButton = false
    }
  },
  mounted() {
    setTimeout(() => {
      this.beforeButton = false
    }, 10200);
  }
}
</script>