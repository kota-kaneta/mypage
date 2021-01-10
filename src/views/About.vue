<template>
  <div id="about">
    <transition appear>
      <div>
        <Header>About<i class="fas fa-user-circle"></i></Header>
        <Separation>Profile / Career</Separation>
        <p class="profile-show">
          <i class="fas fa-birthday-cake"></i>
          1998年生まれ/群馬県出身 
          <br> <br><br>
          日本大学理工学部を休学しプログラミング学習を開始<br><br>
          ↓<br><br>
          主にRailsでアプリケーションの開発を進める<br><br>
          ↓<br><br>
          エンジニアを目指し同大学を中途退学<br><br>
          ↓<br><br>
          現在はVue.jsなどの学習を進めています
        </p><br>
        <v-bottom-navigation v-model="value">
          <v-btn value="GitHub">
            <a href="https://github.com/kota-kaneta">
              <i class="fab fa-github"></i>
            </a>
          </v-btn>
        </v-bottom-navigation>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.fas{
  padding-left: 7px;
}
.fab{
  padding-right: 7px;
  font-size: 30px;
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
.profile-show{
  padding-top: 40px;
  padding-bottom: 30px;
  font-size: 20px;
}
.g-tag{
  font-size: 20px;
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
      profile: "Profile",
      value: "GitHub"
    }
  }
};
</script>