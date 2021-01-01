<template>
  <div class="portfolio">
    <transition appear>
      <div>
        <Header>Portfolio</Header>
        <Separation>mypage（制作中）</Separation>
        <hr class="hr-portfolio">
        <p class="show">
          <a href="https://kota-kaneta.netlify.app/" ontouchstart="">https://kota-kaneta.netlify.app/</a> <br><br>
          <img src="@/assets/mypage.png" width="350" height="190" border="1"><br>
          Vue.js / Node.js / Netlify<br><br>
          当サイトです。<br>作成したポートフォリオ一覧を掲載しています。
        </p>
        <p class="blank"></p>
        <Separation>L-searcher</Separation>
        <hr class="hr-portfolio">
        <p class="show">
          <a href="https://l-searcher.com/" ontouchstart="">https://l-searcher.com/</a><br><br>
          <img src="@/assets/l-searcher.png" width="350" height="190" border="1"><br>
          Rails / AWS / Capistrano ...etc<br><br>
          知人の暇な時間をタイムラインで表示できるアプリケーションです。<br>
          ユーザーIDを用いてアカウントを検索し、フォローすることができます。
        </p>
        <p class="blank"></p>
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
  width: 40vw;
}
.show{
  font-size: 20px;
  height: 300px;
  margin-bottom: 40px;
}
.show a{
  text-decoration: none;
  font-size: 25px;
}
.blank{
  padding: 30px;
}
a:hover{
  color : #ff7043;
}
a:active{
  color : #26a69a;
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