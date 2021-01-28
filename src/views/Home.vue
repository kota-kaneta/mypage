<template>
  <div class="home">
    <!-- <v-card class="mx-auto" height="256" rounded="xl" width="500" @click="go" v-show="anime">
      Click!
    </v-card> -->
    <div v-show="skipBefore" class="typer">
      <vue-typer :text="text" repeat= "0" typeDelay="40" caretAnimation="smooth"></vue-typer>
    </div>
    <div v-show="skipAfter">
    Thank you for visiting this site！<br><br>
    Nice to meet you, I'm Kota Kaneta.<br><br>
    You can see the skills I have by looking at this site.<br>
    You can also check the source code of the portfolio.<br><br>
    If you are interested in me, please contact us using the contact form.
    </div>
    <div class="sp-home">
      Nice to meet you,<br>I'm Kota Kaneta.<br><br>
      You can see my skills<br> and profile on this site.<br><br>
      please contact us using the contact form.
    </div>
    <span v-show="beforeButton" @click="skip" class="button">
      <i class="fas fa-forward"></i>skip
    </span>
    <span v-show="afterButton"><i class="far fa-laugh-squint"></i></span>
    <p class="bottom-nav">
      ©2021 Kota Kaneta
    </p>
  </div>
</template>

<style scoped lang="scss">
.home{
  font-size: 42px;
  position: relative;
  padding-top: 90px;
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
  .typer { 
    display:none; 
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
  color: white;
  height: 60px;
}
</style>

<script>
import { VueTyper } from 'vue-typer'
// import { KinesisContainer, KinesisElement} from 'vue-kinesis'

export default {
  name: "home",
  components: {
    'vue-typer': VueTyper,
    // 'kinesis-container': KinesisContainer,
    // 'kinesis-element': KinesisElement
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