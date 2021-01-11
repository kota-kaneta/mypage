<template>
  <div id="portfolio">
    <transition appear>
      <div>
        <Header>Portfolio<i class="fas fa-book-open"></i></Header>
      <div class="card">
        <v-card class="mx-auto" max-width="344">
          <v-img src="@/assets/contact.png" width="350" height="200" border="1"></v-img>
          <v-card-title>
            <h3><i class="far fa-sticky-note"></i>mypage</h3>
          </v-card-title>
          <v-card-subtitle>
             Vue.js / Node.js / Netlify ...etc
          </v-card-subtitle>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn icon @click="openModal">
              <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>

        <transition name="modal">
        <div id="overlay" v-show="showContent" v-on:click="closeModal">
          <div id="content">
            <div class="details">2021 / 01 〜 現在</div>
            <h3>mypage</h3>
            <img src="@/assets/mypage.gif" width="350" height="195" border="1">
            <p> 
              当サイトです。<br>私が作成したサイトを載せていきます。<br>
              Contactフォームから気軽にお問い合わせください。<br><br>
              （Vue.js / Node.js / Netlify ...etc）<br><br>
              <a href="https://kota-kaneta.netlify.app/" ontouchstart="">
                <p><i class="far fa-sticky-note"></i> mypage</p>
              </a>
              <a href="https://github.com/kota-kaneta">
                <p><i class="fab fa-github"></i> GitHub (mypage)</p>
              </a>
            </p>
           </div>
        </div>
        </transition>

        <v-card class="mx-auto" max-width="344">
          <v-img src="@/assets/notifications.png" width="350" height="195" border="1"></v-img>
          <v-card-title>
            <h3><i class="far fa-sticky-note"></i>L-searcher</h3>
          </v-card-title>
          <v-card-subtitle>
            Rails / AWS / Capistrano ...etc
          </v-card-subtitle>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn icon @click="l_openModal">
              <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>

        <transition name="l_modal">
        <div id="l_overlay" v-show="l_showContent" v-on:click="l_closeModal">
          <div id="l_content">
            <div class="details">2020 / 10 〜 2020 / 11</div>
            <h3>L-searcher</h3>
            <img src="@/assets/l-searcher.gif" width="350" height="195" border="1"><br><br>
            知人の暇な時間を確認できるアプリケーションです。<br>
            ユーザーIDを用いてアカウントを検索してフォローすることで、<br>
            そのユーザーが登録している週のスケジュールがタイムラインに表示されます。<br>
            また、ダイレクトメッセージを送ることができます。<br><br>
            （Rails / AWS / Capistrano ...etc）<br><br>
            <a href="https://l-searcher.herokuapp.com/" ontouchstart="">
              <p><i class="far fa-sticky-note"></i>L-searcher</p>
            </a>
            <a href="https://github.com/kota-kaneta/L-searcher">
              <p><i class="fab fa-github"></i> GitHub (L-searcher)</p>
            </a><br>
            <p class="heroku">※2021年1月10日にデプロイ先をAWSからHerokuに変更いたしました。</p>
          </div>
        </div>
        </transition>
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.card{
  display: inline-flex;
  justify-content: center;

}
.mx-auto{
  margin: 40px;
  border: lightgray solid 1px;
}
@media screen and (max-width: 768px) {
  .card{
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
  }
  .mx-auto{
    margin-bottom: 20px;
    border: lightgray solid 1px;
  }
}
.v-card__subtitle {
  text-align: left;
  padding-top: 10px;
}
.fas{
  padding-left: 7px;
}
.far{
  font-size: 25px;
  padding-right: 5px;
}
.heroku{
  color: red;
}

#portfolio{
  font-size: 23px;
}
.show{
  font-size: 20px;
  height: 200px;
  min-height: 190px;
  padding-bottom: 20px;
}
.show a{
  text-decoration: none;
  font-size: 25px;
}
.show img:hover{
  transform:scale(1.2,1.2);
  transition:0.5s all;
}
.blank{
  padding: 30px;
}
a{
  display: block;
  transition: .3s;
  -webkit-transform: scale(1);
  transform: scale(1);
}
a:hover{
  color : #ff7043;
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
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

export default {
  name: "#portfolio",
  components: {
    Header
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