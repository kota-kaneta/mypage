<template>
  <div class="home">
    <div v-show="skipContent">
      <vue-typer :text="text" repeat= "0" typeDelay="60"></vue-typer>
    </div>
    <div v-show="skipAfter">
      Thank you for visiting this site！<br><br>
      Nice to meet you, I'm Kota Kaneta.<br>
      You can see the skills I have by looking at this site.<br>
      If you are interested, please contact us from the gmail listed in About.
    </div>
    <button @click="skip" class="button">skip</button>
  </div>
</template>

<style scoped>
.home{
  font-size: 40px;
  position: relative;
}
.button{
  position: fixed;
  top: 50%;
  right: 100px;
  font-size: 20px;
  display: inline-block;
  padding: 0.5em 1em;
  outline: none;
  border-bottom: solid 4px #627295;
  border-radius: 15px;
}
.button:active {
  -webkit-transform: translateY(4px);
  transform: translateY(4px);
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2);
  border-bottom: none;
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
      skipContent: true,
      skipAfter: false,
      text: "Thank you for visiting this site！\n\nNice to meet you, I'm Kota Kaneta.\nYou can see the skills I have by looking at this site.\nIf you are interested, please contact us from the gmail listed in About."
    }
  },
  methods: {
    skip: function(){
      this.skipContent = false,
      this.skipAfter = true
    }
  }
}
</script>