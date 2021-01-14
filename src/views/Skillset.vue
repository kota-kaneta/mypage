<template>
  <div class="Doughnut">
    <transition appear>
      <div>
        <Header>Skillset<i class="fas fa-laptop-code"></i></Header>
        <Separation>Language / Framework</Separation>
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
import Separation from '../components/Separation.vue';

export default {
  name: "skillset",
  components: {
    Chart,
    Header,
    Separation
  },
}
</script>