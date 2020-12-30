<template>
  <div class="Doughnut">
    <chart></chart>
  </div>
</template>

<style scoped>
.Doughnut{
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  ;
}
</style>

<script>
import Chart from './Chart';

export default {
  components: {
    Chart,
  },
}
</script>