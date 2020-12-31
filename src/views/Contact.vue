<template>
  <div classs="about">
    <transition appear>
      <div>
        <Header>Contact</Header>
        <Separation>お問い合わせフォーム</Separation>
        <hr class="hr-contact">
      </div>
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
.hr-contact{
  width: 40vw;
}
</style>

<script>
import Header from "@/components/Header.vue";
import Separation from "@/components/Separation.vue";

export default {
  name: "contact",
  components: {
    Header,
    Separation
  },
}
</script>