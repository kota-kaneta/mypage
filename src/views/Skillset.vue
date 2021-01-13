<template>
  <div class="Doughnut">
    <transition appear>
      <div>
        <Header>Skillset<i class="fas fa-laptop-code"></i></Header>
        <p class="blank"></p>
        <h2 class="lf">Language / Framework</h2>
        <div class="chart">
          <chart></chart>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.fas{
  padding-left: 7px;
}
.lf{
  padding: 40px 0 10px 0;
}
.Doughnut{
  position: relative;
  justify-content: center;
  align-items: center;
}
.chart{
  padding-top: 30px;
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