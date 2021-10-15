<template>
  <div class="Doughnut">
    <Header>Skillset <i class="fas fa-chart-pie"></i></Header>
    <transition appear>
      <div>
        <Separation>Language / Framework</Separation>
        <div class="chart">
          <chart style="margin:auto; height:55vh; width:55vw"></chart>
        </div>
        <div class="sp-chart">
          <chart></chart>
        </div>
      </div>
    </transition>
    <p class="bottom-nav">
    © 2021 Shion Minase All rights reserved.
    <span class="seo">水瀬しおん</span>
    </p>
  </div>
</template>

<style scoped>
.Doughnut{
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: #fefef7;
}
.chart{
  padding-top: 30px;
}
@media screen and (max-width: 480px){
  .chart{
    display: none;
  }
}
@media screen and (min-width: 480px){
  .sp-chart{
    display: none;
  }
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