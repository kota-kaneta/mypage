<template>
  <div classs="about">
    <transition appear>
      <div>
        <Header>About</Header>
        <h2 class="profile">Profile / Career</h2>
        <hr class="hr-about">
        <p class="profile-show">
          1998年生まれ/群馬県出身 <br> <br><br>
          日本大学理工学部を休学しプログラミングを開始<br><br>
          ↓<br><br>
          主にRailsでアプリケーションを開発しながら学習<br><br>
          ↓<br><br>
          エンジニアを目指し同大学を中途退学<br><br>
          ↓<br><br>
          現在はJavaScriptを中心に学習を進めています
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
.profile{
  padding-top: 30px;
}
.hr-about{
  width: 35vw;
}
.profile-show{
  padding-top: 40px;
  padding-bottom: 100px;
}
</style>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "about",
  components: {
    Header 
  },
  data: function(){
    return{
      profile: "Profile"
    }
  }
};
</script>