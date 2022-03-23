<template>
  <div id="about">
    <Header>About <i class="fas fa-user-circle"></i></Header>
    <transition appear>
      <div>
        <Separation>Profile / Career</Separation><br>
        <div class="line-name">
          <div class="line"></div>
          <div class="line2"></div>
          <div class="name">
            <strong><p class="kanji">金田浩太</p></strong>
            <p class="en">Kota Kaneta</p>
          </div>
        </div>
        <figure class="img">
          <img src="../../src/assets/shion01.png" alt="金田浩太">
        </figure>
          <v-app class="v-app" :style="{ background: $vuetify.theme.themes.light.background }">
            <v-timeline>
              <v-timeline-item color="#CFD8DC">
                <span slot="opposite" class="opposite"><i class="far fa-calendar-alt"></i> 1998 / 08</span>
                <v-card class="elevation-2">
                  <i>群馬県にて生誕</i>
                </v-card>
              </v-timeline-item>
              <v-timeline-item color="#CFD8DC">
                <span slot="opposite" class="opposite"><i class="far fa-calendar-alt"></i> 2006 〜2016</span>
                <v-card class="elevation-2">
                  <i>小学校3年から高校3年までの10年間野球部に所属</i>
                </v-card>
              </v-timeline-item>
              <v-timeline-item color="#CFD8DC">
                <span slot="opposite" class="opposite"><i class="far fa-calendar-alt"></i> 2017 / 04</span>
                <v-card class="elevation-2">
                  <i>日本大学理工学部物質応用化学科に入学</i>
                </v-card>
              </v-timeline-item>
              <v-timeline-item color="#CFD8DC">
                <span slot="opposite" class="opposite"><i class="far fa-calendar-alt"></i> 2020 / 09</span>
                <v-card class="elevation-2">
                  <i>-コロナ襲来-<br>キャンパス内で研究ができないため休学<br>
                  同時期にプログラミングの勉強を始める</i>
                </v-card>
              </v-timeline-item>
              <v-timeline-item color="#CFD8DC">
                <span slot="opposite" class="opposite"><i class="far fa-calendar-alt"></i> 2020 / 12</span>
                <v-card class="elevation-2">
                  <i>化学系からWeb業界を目指して大学を中途退学</i>
                </v-card>
              </v-timeline-item>
              <v-timeline-item color="#CFD8DC">
                <span slot="opposite" class="opposite"><i class="far fa-calendar-alt"></i> 2021 / 03</span>
                <v-card class="elevation-2">
                  <i>Web制作会社に入社</i>
                </v-card>
              </v-timeline-item>
              <v-timeline-item color="#FFA726" large>
                <span slot="opposite" class="opposite"><i class="far fa-calendar-alt"></i> 2021 / 10</span>
                <v-card class="elevation-2">
                  <i>HANGOVER -ALBA- 入店</i>
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
            <div class="arrow">⬇︎</div>
          <v-card class="elevation-2">
            <v-card-text>
            2006年〜2016年
            </v-card-text>
            <i>小学校3年から高校3年までの10年間野球部に所属</i>
          </v-card>
          <div class="arrow">⬇︎</div>
          <v-card class="elevation-2">
            <v-card-text>
            2017年4月
            </v-card-text>
            <i>日本大学理工学部物質応用化学科に入学</i>
          </v-card>
          <div class="arrow">⬇︎</div>
          <v-card class="elevation-2">
            <v-card-text>
            2020年9月
            </v-card-text>
            <p class="blank">
            <i>-コロナ襲来-<br>キャンパス内で研究ができないため休学<br>
            同時期にプログラミングの勉強を始める</i>
            </p>
          </v-card>
          <div class="arrow">⬇︎</div>
          <v-card class="elevation-2">
            <v-card-text>
            2020年12月
            </v-card-text>
            <i>化学系からWeb業界を目指して大学を中途退学</i>
          </v-card>
          <div class="arrow">⬇︎</div>
          <v-card class="elevation-2">
            <v-card-text>
            2021年3月
            </v-card-text>
            <i>Web制作会社に入社</i>
          </v-card>
        </div>
      </div>
    </transition>
    <div class="sp-blank"></div>
    <p class="bottom-nav">
    © 2021 Kota Kaneta All rights reserved.
    <span class="seo">金田浩太</span>
    </p>
  </div>
</template>

<style scoped>
#about{
  position: relative;
  background-color: #fefef7;
}
.v-app{
  padding-top: 60px;
}
.v-timeline {
  padding: 30px 0;
}
.line-name{
  text-shadow: none;
}
.line{
  width: 60px;
  height: 100px;
  background-image: linear-gradient(310deg, transparent 49%, #2c3e50 50%, transparent 51%);
  position: absolute;
  top: 110px;
  right: 290px;
}
.line2{
  width: 60px;
  height: 100px;
  background-image: linear-gradient(310deg, transparent 49%, #2c3e50 50%, transparent 51%);
  position: absolute;
  top: 160px;
  right: 155px;
}
.name{
  position: absolute;
  top: 151px;
  right: 203px;
}
.kanji{
  padding-bottom: 15px;
}
.elevation-2{
  min-height: 95px;
  margin: 10px 30px;
}
.theme--light {
  background: rgb(218, 218, 216, 0.577);
  
}
.v-sheet.v-card:not(.v-sheet--outlined) {
    background-color: white;
}
.bottom-nav{
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 0ch;
}
@media screen and (max-width: 767px) {
  .v-app,
  .bottom-nav,
  .line-name{
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
.arrow{
  font-size: 30px;
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
  }
};
</script>