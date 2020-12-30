<template>
  <div class="Doughnut">
    <transition appear>
      <Header>Skillset</Header>
      </transition>
    <chart></chart>
  </div>
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