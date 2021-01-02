<template>
  <transition appear>
  <div class="Doughnut">
      <Header>Skillset</Header>
    <p class="blank"></p>
    <h2>Language / Framework</h2>
    <hr id="hr-skill">
    <div class="chart">
      <chart></chart>
    </div>
  </div>
  </transition>
</template>

<style scoped>
.Doughnut{
  justify-content: center;
  align-items: center;
}
.v-enter-active {
  transition: opacity 5s;
}
.v-enter {
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
  }
.chart{
  padding-top: 30px;
}
#hr-skill{
  width: 45vw;
}
.blank{
  padding: 10px;
}
</style>

<script>
import Header from "@/components/Header.vue"
import Chart from './Chart';

export default {
  name: "skillset",
  components: {
    Chart,
    Header
  },
}
</script>