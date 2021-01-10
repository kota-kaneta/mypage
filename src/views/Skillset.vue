<template>
  <transition appear>
  <div class="Doughnut">
      <Header>Skillset<i class="fas fa-laptop-code"></i></Header>
    <p class="blank"></p>
    <h2 class="lf">Language / Framework</h2>
    <div class="chart">
      <chart></chart>
    </div>
  </div>
  </transition>
</template>

<style scoped>
.fas{
  padding-left: 7px;
}
.lf{
  padding-bottom: 10px;
}
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