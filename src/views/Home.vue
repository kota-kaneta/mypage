<template>
  <div class="home">
    <vue-typer :text="text" repeat= "0" typeDelay="60"></vue-typer>
  </div>
</template>

<style scoped>
.home{
  font-size: 40px;
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
      text: "Thank you for visiting this site！\n\nNice to meet you, I'm Kota Kaneta.\nYou can see the skills I have by looking at this site.\nIf you are interested, please contact us from the gmail listed in About."
    }
  }
}
</script>