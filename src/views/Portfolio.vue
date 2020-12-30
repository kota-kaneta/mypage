<template>
  <div class="portfolio">
    <transition appear>
      <div>
        <Header>Portfolio</Header>
        <Separation>mypage(当サイト)</Separation>
        <hr class="hr-portfolio">
        <p class="show">
          <img src="public/mypage.png"> 
          <a href="">mypage</a>
        </p>
        <Separation>L-searcher</Separation>
        <hr class="hr-portfolio">
        <p class="show">
          <a href="https://l-searcher.com/">https://l-searcher.com/</a><br>
        </p>
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
.hr-portfolio{
  width: 35vw;
}
.show{
  font-size: 20px;
}

.show a{
  text-decoration: none;
}
</style>

<script>
import Header from "@/components/Header.vue";
import Separation from "@/components/Separation.vue";

export default {
  name: "portfolio",
  components: {
    Header,
    Separation,
  },
}
</script>