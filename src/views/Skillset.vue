<template>
  <div class="Doughnut">
    <transition appear>
      <div>
        <Header>Skillset<i class="fas fa-chart-pie"></i></Header>
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
    © 2021 Kota Kaneta
    </p>
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
a {
  text-decoration: none;
  display: inline-block;
  transition: .3s;
  -webkit-transform: scale(1);
  transform: scale(1);
}
a:link { color: #0000ff; }
a:visited { color: #000080; }
a:hover {
  color: #ff0000;
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
  }
a:active { color: #ff8000; }
.blank{
  padding-bottom: 20px;
}
.a-git{
  position: absolute;
  bottom: -200px;
  right: 40px;
  font-size: 20px;
}
.fab{
  font-size: 30px;
}
.bottom-nav{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding-top: 15px;
  font-size: 18px;
  background-color: rgb(16, 16, 16);
  color: #d7e4f1;
  height: 60px;
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