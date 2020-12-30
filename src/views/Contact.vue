<template>
  <div classs="about">
    <transition appear>
      <Header>Contact</Header>
    </transition>
  </div>
</template>

<style scoped>
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
import Header from "@/components/Header.vue";

export default {
  name: "contact",
  components: {
    Header 
  },
}
</script>