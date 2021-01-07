<template>
  <div class="home">
    <div v-show="skipBefore">
      <vue-typer :text="text" repeat= "0" typeDelay="60"></vue-typer>
    </div>
    <div v-show="skipAfter">
      Thank you for visiting this site！<br><br>
      Nice to meet you, I'm Kota Kaneta.<br>
      You can see the skills I have by looking at this site.<br>
      You can also check the source code of the portfolio.<br><br>
      If you are interested in me, please contact us using the contact form.
    </div>
    <button v-show="beforeButton" @click="skip" class="button">
      <i class="fas fa-forward"></i>skip
    </button>
    <span v-show="afterButton"><i class="far fa-laugh-squint"></i></span>
  </div>
</template>

<style scoped>
.home{
  font-size: 42px;
  position: relative;
}
.fas{
  padding-right: 5px;
}
.button{
  position: fixed;
  bottom: 100px;
  right: 100px;
  font-size: 20px;
  display: inline-block;
  padding: 0.5em 0.6em;
  outline: none;
  border-bottom: solid 4px #627295;
  border-radius: 15px;
}
.button:active {
  -webkit-transform: translateY(3px);
  transform: translateY(3px);
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2);
  border-bottom: none;
}
@media screen and (max-width: 768px) {
  .button { 
    display:none; 
  }
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
      text: "Thank you for visiting this site！\n\nNice to meet you, I'm Kota Kaneta.\nYou can see the skills I have by looking at this site.\nYou can also check the source code of the portfolio.\n\nIf you are interested in me, please contact us using the contact form.",
      beforeButton: true,
      afterButton: false
    }
  },
  methods: {
    skip: function(){
      this.skipBefore = false,
      this.skipAfter = true,
      this.beforeButton = false,
      this.afterButton = true
    }
  }
}
</script>