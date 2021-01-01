<template>
  <div id="portfolio">
    <transition appear>
      <div>
        <Header>Portfolio</Header>
        <Separation>mypage（制作中）</Separation>
        <hr class="hr-portfolio">

        <p class="show">
          <button v-on:click="openModal">
            <img src="@/assets/mypage.png" width="350" height="190">
          </button>
        </p>
        Vue.js / Node.js / Netlify ...etc
 
        <transition name="modal">
        <div id="overlay" v-show="showContent" v-on:click="closeModal">
          <div id="content">
            <img src="@/assets/mypage.png" width="350" height="190" border="1">
            <p> Vue.js / Node.js / Netlify ...etc<br><br>
                当サイトです。<br>作成したポートフォリオ一覧を掲載しています。<br><br>
                GitHub⇨<a href="https://github.com/kota-kaneta/mypage">https://github.com/kota-kaneta/mypage</a><br>
                サイト⇨<a href="https://kota-kaneta.netlify.app/" ontouchstart="">https://kota-kaneta.netlify.app/</a>
            </p>
           </div>
        </div>
        </transition>

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

<style lang="scss" scoped>
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
#content{
  z-index:2;
  width:50%;
  padding: 1.0em;
  background: #d6d8d7;
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
      showContent: false
    }
  },
  methods:{
    openModal: function(){
      this.showContent = true
    },
    closeModal: function(){
      this.showContent = false
    }
  }
}
</script>