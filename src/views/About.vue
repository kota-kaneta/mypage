<template>
  <div id="about">
    <transition appear>
      <div>
        <Header>About<i class="fas fa-user-circle"></i></Header>
        <Separation>Profile / Career</Separation>
        <hr class="hr-about">
        <p class="profile-show">
          <i class="fas fa-birthday-cake"></i>
          1998年生まれ/群馬県出身 
          <br> <br><br>
          日本大学理工学部を休学しプログラミングを開始<br><br>
          ↓<br><br>
          主にRailsでアプリケーションを開発しながら学習<br><br>
          ↓<br><br>
          エンジニアを目指し同大学を中途退学<br><br>
          ↓<br><br>
          現在はVue.jsなどの学習を進めています
        </p><br>
        <hr class="hr-about">
        <p class="gmail">Gmail：arusabu0828@gmail.com</p>
        <a href="https://github.com/kota-kaneta">
          <i class="fab fa-github"></i>GitHub
        </a>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.fas{
  padding-left: 7px;
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
.hr-about{
  width: 40vw;
}
.profile-show{
  padding-top: 40px;
  padding-bottom: 30px;
}
.gmail{
  font-size: 18px;
}
a {
  text-decoration: none;
}
a:link { color: #0000ff; }
a:visited { color: #000080; }
a:hover { color: #ff0000; }
a:active { color: #ff8000; }
</style>

<script>
import Header from "@/components/Header.vue";
import Separation from "@/components/Separation.vue";

export default {
  name: "#about",
  components: {
    Header,
    Separation
  },
  data: function(){
    return{
      profile: "Profile"
    }
  }
};
</script>