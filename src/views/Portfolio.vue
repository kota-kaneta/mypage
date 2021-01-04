<template>
  <div id="portfolio">
    <transition appear>
      <div>
        <Header>Portfolio</Header>
        <Separation>mypage</Separation>
        <hr class="hr-portfolio"><br>

        <p class="show">
          <button class="button" v-on:click="openModal">
            <img src="@/assets/mypage.png" width="350" height="195">
          </button>
        </p>
        Vue.js / Node.js / Netlify ...etc
 
        <transition name="modal">
        <div id="overlay" v-show="showContent" v-on:click="closeModal">
          <div id="content">
            <div class="batu"><button class="close" @click="closeModal">✖️</button></div>
            <div class="details">2021 / 01 〜 現在</div>
            <h2>mypage</h2>
            <img src="@/assets/mypage.gif" width="350" height="195" border="1">
            <p> 
                当サイトです。<br>作成したポートフォリオ一覧を掲載しています。<br><br>
                （Vue.js / Node.js / Netlify ...etc）<br><br>
                GitHub⇨<a href="https://github.com/kota-kaneta/mypage">https://github.com/kota-kaneta/mypage</a><br>
                サイト⇨<a href="https://kota-kaneta.netlify.app/" ontouchstart="">https://kota-kaneta.netlify.app/</a>
            </p>
           </div>
        </div>
        </transition>

        <Separation>L-searcher</Separation>
        <hr class="hr-portfolio"><br>

        <p class="show">
        <button v-on:click="l_openModal" class="button">
          <img src="@/assets/l-searcher.png" width="350" height="195">
        </button>
        </p>
        Rails / AWS / Capistrano ...etc
        <p class="blank"></p>
        <hr class="hr-portfolio">
        （制作順）
        <hr id="hr">

        <transition name="l_modal">
        <div id="l_overlay" v-show="l_showContent" v-on:click="l_closeModal">
          <div id="l_content">
            <div class="batu"><button class="close" @click="l_closeModal">✖️</button></div>
            <div class="details">2020 / 11 〜 2020 / 12</div>
            <h2>L-searcher</h2>
            <img src="@/assets/l-searcher.gif" width="350" height="195" border="1"><br><br>
            知人の暇な時間をタイムラインで表示できるアプリケーションです。<br>
            ユーザーIDを用いてアカウントを検索し、フォローすることができます。<br><br>
            （Rails / AWS / Capistrano ...etc）<br><br>
            GitHub⇨<a href="https://github.com/kota-kaneta/L-searcher">https://github.com/kota-kaneta/L-searcher</a><br>
            サイト⇨<a href="https://l-searcher.com/" ontouchstart="">https://l-searcher.com/</a><br>
            <p class="heroku">※2021年1月10日にデプロイ先をAWSからHerokuに変更いたしました。</p>
            サイト⇨<a href="https://l-searcher.herokuapp.com/" ontouchstart="">https://l-searcher.herokuapp.com/</a>
          </div>
        </div>
        </transition>
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.heroku{
  color: red;
}
.button{
  min-height: 190px;
}
#portfolio{
  font-size: 23px;
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
.hr-portfolio{
  width: 40vw;
}
.show{
  font-size: 20px;
  height: 200px;
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
#overlay{
  z-index:1;

  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:rgba(0,0,0,0.5);

  display: flex;
  align-items: center;
  justify-content: center;
}
#l_overlay{
  z-index:1;

  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:rgba(0,0,0,0.5);

  display: flex;
  align-items: center;
  justify-content: center;
}
#content{
  position: relative;
  z-index:2;
  min-width: 50%;
  padding: 1.0em;
  background: #f0f1f1;
  border-radius: 10px;
}
.batu{
  position: absolute;
  right: 10px;
  top: 10px;
  border: 1px solid black;
}
.details{
  position: absolute;
  left: 10px;
  top: 10px;
}
.close{
  font-size:23px;
  border-color: #f0f1f1;
  outline: none;
}
#l_content{
  position: relative;
  z-index:2;
  min-width: 50%;
  padding: 1.0em;
  background:  #f0f1f1;
  border-radius: 10px;
}
.modal-enter-active, .modal-leave-active {
  opacity: 1;
  transform: scale(1);
  transition: opacity 0.8s;
  #content{
    transform: scale(1.0);
    transition: 1.5s;
  }
}
.modal-enter, .modal-leave-to {
  opacity: 0;
  transform: scale(0);
  transition: opacity 0.5s, transform 0s 0.5s;
  #content{
    transform: scale(1);
  }
}
.l_modal-enter-active, .l_modal-leave-active {
  opacity: 1;
  transform: scale(1);
  transition: opacity 0.8s;
  #l_content{
    transform: scale(1.0);
    transition: 1.5s;
  }
}
.l_modal-enter, .l_modal-leave-to {
  opacity: 0;
  transform: scale(0);
  transition: opacity 0.5s, transform 0s 0.5s;
  #l_content{
    transform: scale(1);
  }
}
</style>

<script>
import Header from "@/components/Header.vue";
import Separation from "@/components/Separation.vue";

export default {
  name: "#portfolio",
  components: {
    Header,
    Separation,
  },
  data: function(){
    return{
      showContent: false,
      l_showContent: false
    }
  },
  methods:{
    openModal: function(){
      this.showContent = true
    },
    closeModal: function(){
      this.showContent = false
    },
    l_openModal: function(){
      this.l_showContent = true
    },
    l_closeModal: function(){
      this.l_showContent = false
    }
  }
}
</script>