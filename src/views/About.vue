<template>
  <div id="about">
    <Header>About <i class="fas fa-user-circle"></i></Header>
    <transition appear>
      <div>
        <Separation>Profile / Career</Separation><br>
          <v-app class="v-app" :style="{ background: $vuetify.theme.themes.light.background }">
            <v-timeline>
              <v-timeline-item color="#CFD8DC">
                <span slot="opposite" class="opposite">1998 / 08</span>
                <v-card class="elevation-2">
                  <i>群馬県にて生誕</i>
                </v-card>
              </v-timeline-item>
              <v-timeline-item color="#CFD8DC">
                <span slot="opposite" class="opposite">2006 〜 2016</span>
                <v-card class="elevation-2">
                  <i>小学校3年から高校3年までの10年間野球部に所属</i>
                </v-card>
              </v-timeline-item>
              <v-timeline-item color="#CFD8DC">
                <span slot="opposite" class="opposite">2017 / 04</span>
                <v-card class="elevation-2">
                  <i>日本大学理工学部物質応用化学科に入学</i>
                </v-card>
              </v-timeline-item>
              <v-timeline-item color="#CFD8DC">
                <span slot="opposite" class="opposite">2020 / 09</span>
                <v-card class="elevation-2">
                  <i>キャンパス入館制限による研究困難により休学<br>
                  同時期にプログラミングの勉強を始める<br>
                  （主にRuby on Railsを中心に開発）</i>
                </v-card>
              </v-timeline-item>
              <v-timeline-item color="#CFD8DC">
                <span slot="opposite" class="opposite">2020 / 12</span>
                <v-card class="elevation-2">
                  <i>Web業界を目指して大学を中途退学</i>
                </v-card>
              </v-timeline-item>
              <v-timeline-item color="#FFA726" large>
                <span slot="opposite" class="opposite">2021 / 01 〜</span>
                <v-card class="elevation-2">
                  <i>Vue.jsなどを学習中...</i>
                </v-card>
              </v-timeline-item>
              <p class="timeline"></p>
            </v-timeline>
          </v-app>
        <div class="sp-about">
          <v-card class="elevation-2">
            <v-card-text>
            1998年8月
            </v-card-text>
            <i>群馬県にて生誕</i>
          </v-card>
            ⬇︎
          <v-card class="elevation-2">
            <v-card-text>
            2006年〜2016年
            </v-card-text>
            <i>小学校3年から高校3年までの10年間野球部に所属</i>
          </v-card>
          ⬇︎
          <v-card class="elevation-2">
            <v-card-text>
            2017年4月
            </v-card-text>
            <i>日本大学理工学部物質応用化学科に入学</i>
          </v-card>
          ⬇︎
          <v-card class="elevation-2">
            <v-card-text>
            2020年9月
            </v-card-text>
            <p class="blank">
            <i>キャンパス入館制限による研究困難により休学<br>
            同時期にプログラミングの勉強を始める<br>
            （主にRuby on Railsを中心に開発）</i>
            </p>
          </v-card>
          ⬇︎
          <v-card class="elevation-2">
            <v-card-text>
            2020年12月
            </v-card-text>
            <i>Web業界を目指して大学を中途退学</i>
          </v-card>
          ⬇︎
          <v-card class="elevation-2">
            <v-card-text>
            現在
            </v-card-text>
            <i>Vue.jsなどを学習中...</i>
          </v-card>
        </div>
      </div>
    </transition>
    <div class="sp-blank"></div>
    <p class="bottom-nav">
    © 2021 Kota Kaneta All rights reserved.
    </p>
  </div>
</template>

<style scoped>
#about{
  position: relative;
}
.v-app{
  padding-top: 60px;
}
.timeline{
  margin-bottom: 21px;
}
.elevation-2{
  min-height: 95px;
  margin: 10px 30px;
}
.theme--light {
  background: rgb(218, 218, 216, 0.577);
}
.theme--light.v-card {
    background-color: #FFFFFF;
    color: rgba(0, 0, 0, 0.87);
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
.blank{
  padding-bottom: 20px;
}
.bottom-nav{
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  background-color: rgb(16, 16, 16);
  color: #d7e4f1;
  height: 60px;
}
@media screen and (max-width: 767px) {
  .v-app,
  .bottom-nav{
    display: none;
  }
}
@media screen and (min-width: 768px){
  .sp-about{
    display: none;
  }
  .elevation-2{
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.opposite{
  font-family: 'Kaushan Script', cursive;
  font-size: 25px;
}
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