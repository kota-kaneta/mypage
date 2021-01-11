<template>
  <div>
    <transition appear>
      <div id="about">
        <Header>About<i class="fas fa-user-circle"></i></Header>
        <Separation>Profile / Career</Separation><br>
        <v-timeline>
          <v-timeline-item>
            1998年8月<br><br>
            群馬県にて生誕
          </v-timeline-item>
          <v-timeline-item>
            2006年〜2016年<br><br>
            小学校3年から高校3年までの10年間野球部に所属
          </v-timeline-item>
          <v-timeline-item>
            2017年4月<br><br>
            日本大学理工学部物質応用化学科に入学
          </v-timeline-item>
          <v-timeline-item>
            2020年9月<br><br>
            コロナによる研究困難により休学<br>
            同時にプログラミングの勉強を始める<br>
            （主にRuby on Railsを中心に開発を行う）
          </v-timeline-item>
          <v-timeline-item>
            2020年12月<br><br>
            エンジニアを目指して大学を中途退学
          </v-timeline-item>
          <v-timeline-item>
            Vue.jsを学習中...
          </v-timeline-item>
        </v-timeline>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.v-timeline{
  font-size: 18px;
}
.theme--light {
    background: rgba(186, 187, 186, 0.324);
}
.fas{
  padding-left: 7px;
}
.fab{
  padding-right: 7px;
  font-size: 30px;
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