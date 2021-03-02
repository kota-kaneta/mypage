<template>
  <div id="works">
    <Header>Works <i class="fas fa-laptop-code"></i></Header>
    <transition appear>
      <div class="transition">
        <Separation>Portfolio</Separation>
        <div class="carousel">
        <v-carousel cycle :key="color" :show-arrows="false" height="607">
          <v-carousel-item>
            <v-sheet height="120%" tile :color="color">
              <div class="ruby-back">
                <img :src="images.ruby_image" key="rubyImage">
              </div>
              <div class="bubble">
                ※1作目<br><br>
                暇な人を探すツール
              </div>
              <v-row class="fill-height" align="center" justify="center">
                <div class="display-3">
                  <v-card class="mx-auto" max-width="344" @click="l_openModal">
                    <v-img width="350" height="195" :src="images.l_firstimage" key="l_firstImage"></v-img>
                    <v-card-title>
                      <h3><i class="far fa-sticky-note"></i>L-searcher</h3>
                    </v-card-title>
                    <v-card-subtitle>
                      <span class="sub">Rails / AWS / Capistrano ...etc</span>
                    </v-card-subtitle>
                 </v-card>
                </div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
          <v-carousel-item>
            <v-sheet height="120%" tile :color="color">
              <div class="js">
                <i class="fab fa-js-square"></i>
              </div>
              <div class="bubble">
                ※2作目（当サイト）<br> <br>
                ポートフォリオサイト
              </div>
              <v-row class="fill-height" align="center" justify="center">
                <div class="display-3">
                  <v-card class="mx-auto" max-width="344" @click="openModal">
                    <v-img width="350" height="200" border="1" :src="images.m_firstimage" key="m_firstImage"></v-img>
                    <v-card-title>
                      <h3><i class="far fa-sticky-note"></i>mypage</h3>
                    </v-card-title>
                    <v-card-subtitle>
                      <span class="sub">Vue.js / Node.js / Netlify ...etc</span>
                    </v-card-subtitle>
                  </v-card>
                </div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
          <v-carousel-item>
            <v-sheet height="120%" tile :color="color">
              <div class="question">
                <i class="fas fa-question-circle"></i>
              </div>
              <div class="bubble">
                <br>
                ......................
              </div>
              <v-row class="fill-height" align="center" justify="center">
                <div class="display-3">
                  <v-card class="mx-auto" max-width="344">
                    <v-img class="coming"><span class="sub">Coming soon...</span></v-img>
                    <v-card-title>
                      <h3><i class="far fa-sticky-note"></i>???</h3>
                    </v-card-title>
                    <v-card-subtitle>
                      <span class="sub">???</span>
                    </v-card-subtitle>
                  </v-card>
                </div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
        <div class="show">
          <router-link to="show">Full list <i class="fas fa-door-open"></i></router-link>
        </div>
      </div>


    <!-- スマホ -->
    <div class="phone">
      <div class="show-flex">
          <div class="cr">
            <div class="balloon3">
              ✔︎ 暇な人を探すツール
            </div>
            <v-card class="mx-auto" max-width="344" @click="l_openModal">
              <v-img  width="350" height="195" :src="images.l_firstimage" key="l_firstImage"></v-img>
              <v-card-title>
                <h3><i class="far fa-sticky-note"></i>L-searcher</h3>
              </v-card-title>
              <v-card-subtitle>
                <span class="sub">Rails / AWS / Capistrano ...etc</span>
              </v-card-subtitle>
            </v-card>
          </div>
          <div class="cr">
            <div class="balloon3">
              ✔︎ ポートフォリオサイト
            </div>
            <v-card class="mx-auto" max-width="344" @click="openModal">
              <v-img width="350" height="200" border="1" :src="images.m_firstimage" key="m_firstImage"></v-img>
              <v-card-title>
                <h3><i class="far fa-sticky-note"></i>mypage</h3>
              </v-card-title>
              <v-card-subtitle>
                <span class="sub">Vue.js / Node.js / Netlify ...etc</span>
              </v-card-subtitle>
            </v-card>
          </div>
          <div class="cr">
            <div class="balloon3">
              ......................
            </div>
            <v-card class="mx-auto" max-width="344">
              <v-img class="coming"><span class="sub">Coming soon...</span></v-img>
              <v-card-title>
                <h3><i class="far fa-sticky-note"></i>???</h3>
              </v-card-title>
              <v-card-subtitle>
                <span class="sub">???</span>
              </v-card-subtitle>
            </v-card>
          </div>
        </div>
      </div>
    </div>
  </transition>
  <div class="sp-blank"></div>
  
<!-- モーダル -->
  <div class="pc-modal">
    <transition name="l_modal">
      <div id="l_overlay" v-show="l_showContent" v-on:click="l_closeModal">
        <div id="l_content">
          <div class="details">2020 / 12</div><br><br>
          <img class="img" :src="images.l_firstimage" key="l_firstImage" width="520" height="290"><br><br>
          <i>
          知人の暇な時間を確認できるアプリケーションです。<br>
          ユーザーIDを用いてアカウントを検索してフォローすることで、<br>
          そのユーザーが登録している当日のスケジュールがタイムラインに表示されます。<br><br>
          （Rails / AWS / Capistrano ...etc）<br><br></i>
          <a href="https://l-searcher.herokuapp.com/" ontouchstart="">
            <p><i class="far fa-sticky-note"></i>L-searcher</p>
          </a>
          <a href="https://github.com/kota-kaneta/L-searcher">
            <p><i class="fab fa-github"></i> GitHub (L-searcher)</p>
          </a><br>
          <p class="heroku"><i>※2021年1月10日にデプロイ先をAWSからHerokuに変更いたしました。</i></p>
        </div>
      </div>
    </transition>

    <transition name="modal">
      <div id="overlay" v-show="showContent" v-on:click="closeModal">
        <div id="content">
          <div class="details">2021 / 02</div><br><br>
          <div class="ur">✔︎当サイト</div>
          <img class="img" :src="images.m_firstimage" key="m_firstImage" width="520" height="290"><br><br>
          <p><i>
            私が作成したポートフォリオを載せております。<br>
            お問い合わせフォームから気軽にメッセージお待ちしております。<br><br>
            （Vue.js / Node.js / Netlify ...etc）<br><br></i>
            <router-link to="/">
              <p><i class="far fa-sticky-note"></i> mypage</p>
            </router-link>
            <a href="https://github.com/kota-kaneta/mypage">
              <p><i class="fab fa-github"></i> GitHub (mypage)</p>
            </a>
          </p>
        </div>
      </div>
    </transition>
  </div>

  <div class="sp-modal">
    <transition name="l_modal">
      <div id="l_overlay" v-show="l_showContent" v-on:click="l_closeModal">
        <div id="l_content">
          <div class="ur">✔︎暇人管理アプリ</div>
          <div class="details">2020 / 12</div><br><br>
          <img class="img" :src="images.l_firstimage" key="l_firstImage" width="300" height="170"><br>
          （Rails / AWS / Capistrano）<br><br>
          <a href="https://l-searcher.herokuapp.com/" ontouchstart="">
            <p><i class="far fa-sticky-note"></i>L-searcher</p>
          </a>
          <a href="https://github.com/kota-kaneta/L-searcher">
            <p><i class="fab fa-github"></i> GitHub (L-searcher)</p>
          </a>
        </div>
      </div>
    </transition>

    <transition name="modal">
      <div id="overlay" v-show="showContent" v-on:click="closeModal">
        <div id="content">
          <div class="ur">✔︎当サイト</div>
          <div class="details">2021 / 01</div><br><br>
          <img class="img" :src="images.m_firstimage" key="m_firstImage" width="300" height="170"><br>
          （Vue.js / Node.js / Netlify）<br><br>
            <router-link to="/">
              <p><i class="far fa-sticky-note"></i> mypage</p>
            </router-link>
            <a href="https://github.com/kota-kaneta/mypage">
              <p><i class="fab fa-github"></i> GitHub (mypage)</p>
            </a>
        </div>
      </div>
    </transition>
  </div>
    <p class="bottom-nav">
    © 2021 Kota Kaneta All rights reserved.
    </p>
  </div>
</template>

<style lang="scss" scoped>
#works{
  position: relative;
  background-color: #fefef7;
}
.mx-auto{
  margin-top: 140px;
  margin-left:680px;
  height: 360px;
  border: lightgray solid 1px;
  box-shadow: 4px 4px;
  background-color: white;
  color: #2c3e50;
  transition: .3s;
  -webkit-transform: scale(1);
  transform: scale(1);
  font-family: global-variable-exists($name: a);
}
.mx-auto:hover{
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
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

#works{
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
  color: rgb(91, 138, 199);
}
.show img:hover{
  transform:scale(1.2,1.2);
  transition:0.5s all;
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
  z-index:4;

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
  z-index:4;

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
.details{
  position: absolute;
  left: 10px;
  top: 10px;
  font-family: 'Kaushan Script', cursive;
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
.sub{
  color: #2c3e50;
}
.coming{
  color: #2c3e50;
  font-size: 30px;
  width: 350px;
  height: 200px;
  padding-top: 70px;
  border-bottom: 2px solid rgba(211, 211, 211, 0.521);
  font-family: 'Kaushan Script', cursive;
  color: #cfd8dc49;
}
.bubble{
  position: absolute;
  bottom: 260px;
  left: 250px;
  padding-top:35px;
  width:300px;
  height:140px;
  background:#384f66;
  text-align:center;
  font-size:15px;
  border-radius:15px;
  -webkit-border-radius:15px;
  -moz-border-radius:15px;
}
.bubble:after{
    border: solid transparent;
    content:'';
    height:0;
    width:0;
    pointer-events:none;
    position:absolute;
    border-color: rgba(44, 62, 80, 0);
    border-top-width:10px;
    border-bottom-width:10px;
    border-left-width:30px;
    border-right-width:30px;
    margin-top: -10px;
    border-left-color:#384f66;
    left:100%;
    top:50%;
}
.ruby-back,
.vue-back{
  position: absolute;
  top: 30px;
  right: 330px;
}
.question,
.js{
  position: absolute;
  top: -130px;
  right: 330px;
  font-size: 550px;
  color: black;
}
@media screen and (max-width: 768px) {
  .bubble,
  .carousel,
  .pc-modal,
  .show{ 
    display:none; 
  }
  .mx-auto{
    margin: 50px auto;
  }
}
@media screen and (min-width: 767px) {
  .phone,
  .sp-modal{
    display: none;
  }
}
.bottom-nav{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding-top: 15px;
  font-size: 18px;
  background-color: rgb(16, 16, 16);
  color: #d7e4f1;
  height: 60px;
}
.show{
  position: absolute;
  top: 150px;
  right: 130px;
  font-size: 25px;
}
.img{
  border: 1px solid rgba(220, 221, 221, 0.692);
  border-radius: 10px;
}
.ur{
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 20px;
  color: #ee8262;
}
.balloon3 {
  position: relative;
  display: inline-block;
  margin-top: 30px;
  padding: 0 5px;
  width: 250px;
  height: 70px;
  line-height: 70px;
  text-align: center;
  color: #FFF;
  font-size: 15px;
  font-weight: bold;
  border-radius: 20px;
  box-sizing: border-box;
  background:#384f66;
}

.balloon3:before {
  content: "";
  position: absolute;
  bottom: -25px;
  left: 50%;
  margin-left: -15px;
  border: 15px solid transparent;
  border-top: 15px solid #384f66;
  z-index: 0;
}
a:link { color: #5c5cdd; }
a:visited { color: #5c5cdd; }
</style>

<script>
import Header from "@/components/Header.vue";
import Separation from '../components/Separation.vue';

export default {
  name: "#Works",
  theme: { dark: true },
  components: {
    Header,
    Separation
  },
  data: function(){
    return{
      showContent: false,
      l_showContent: false,
      model: 0,
      color: '#cfd8dc79',
      images: {
        l_firstimage: require("@/assets/wood.png"),
        m_firstimage: require("@/assets/mypage.png"),
        ruby_image: require("@/assets/ruby.svg"),
        // js_image: require("@/assets/prog-js01.svg")
      }
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