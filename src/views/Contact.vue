<template>
  <div class="contact">
    <Header v-if="isSubmit === false">Contact <i class="fab fa-telegram"></i></Header>
    <transition appear>
      <div>
        <Separation v-if="isSubmit === false">
          Contact Form
        </Separation>
        <form v-if="isSubmit === false" @submit.prevent="onSubmit" name="contact" netlify>
          <div class="Form" name="contact">
            <div class="Form-Item">
              <p class="Form-Item-Label">
                <!-- <span class="Form-Item-Label-Required">必須</span> -->
                <i class="fas fa-user-circle"></i>氏名
              </p>
              <input type="text" v-model="name" name="name" class="Form-Item-Input" placeholder="例）山田太郎">
            </div>
            <div class="Form-Item">
              <p class="Form-Item-Label">
                <!-- <span class="Form-Item-Label-Required">必須</span> -->
                <i class="fas fa-envelope"></i>メールアドレス
              </p>
              <input type="email" v-model="email" name="email" class="Form-Item-Input" placeholder="例）example@gmail.com">
            </div>
            <div class="Form-Item">
              <p class="Form-Item-Label isMsg">
                <!-- <span class="Form-Item-Label-Required">必須</span> -->
                <i class="fas fa-phone-square"></i>お問い合わせ内容
              </p>
              <textarea class="Form-Item-Textarea" v-model="message" name="message"></textarea>
            </div>
              <button type="submit" class="Form-Btn"><span class="send">SEND</span></button>
          </div>
        </form>
        <form name="contact" netlify netlify-honeypot="bot-field" hidden>
          <input type="text" name="name" />
          <input type="text" name="email" />
          <textarea name="message"></textarea>
          <input type="text" name="bot-field" />
        </form>
      </div>
    </transition>
    <div v-if="isSubmit === true" class="thank">
      お問い合わせありがとうございました<i class="far fa-laugh-squint"></i>
    </div>
    <div v-if="nothing === true" class="nothing">
      <i class="fas fa-exclamation-triangle"></i> Please fill in all items
    </div>
    <div class="sp-blank"></div>
    <p class="bottom-nav">
    © 2021 Kota Kaneta All rights reserved.
    <span class="seo">金田浩太</span>
    </p>
  </div>
</template>

<style scoped>
.contact{
  position: relative;
  background-color: #fefef7;
}
.fas{
  font-size: 20px;
  padding-right: 5px;
}
.far{
  font-size: 35px;
  padding-left: 5px;
}
.fab{
  padding-left: 7px;
}
.thank{
  font-size: 35px;
  padding-top: 39vh;
}

.Form {
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  max-width: 720px;
}
.Form-Item {
  padding-top: 24px;
  padding-bottom: 24px;
  width: 100%;
  display: flex;
  align-items: center;
}
.Form-Item-Label {
  width: 100%;
  max-width: 248px;
  letter-spacing: 0.05em;
  font-weight: bold;
  font-size: 18px;
  display: flex;
  justify-content: start;
  align-items: center;
}
.Form-Item-Label.isMsg {
  margin-top: 8px;
  margin-bottom: auto;
}
@media screen and (max-width: 480px) {
  .Form {
    margin-top: 40px;
  }
  .Form-Item {
    padding-left: 14px;
    padding-right: 14px;
    padding-top: 16px;
    padding-bottom: 16px;
    flex-wrap: wrap;
  }
  .Form-Item-Label {
    max-width: inherit;
    display: flex;
    align-items: center;
    font-size: 15px;
  }
  .Form-Item-Label.isMsg {
    margin-top: 0;
  }
  .Form-Item-Label-Required {
    border-radius: 4px;
    padding-top: 4px;
    padding-bottom: 4px;
    width: 32px;
    font-size: 10px;
  }
  .Form-Item-Input {
    margin-left: 0;
    margin-top: 18px;
    height: 40px;
    flex: inherit;
    font-size: 15px;
  }
  .Form-Item-Textarea {
    margin-top: 18px;
    margin-left: 0;
    height: 200px;
    flex: inherit;
    font-size: 15px;
  }
  .Form-Btn {
    margin-top: 24px;
    padding-top: 8px;
    padding-bottom: 8px;
    width: 160px;
    font-size: 16px;
  }
  .nothing { 
    display:none; 
  }
}
.Form-Item-Label-Required {
  border-radius: 6px;
  margin-right: 8px;
  padding-top: 8px;
  padding-bottom: 8px;
  width: 48px;
  display: inline-block;
  text-align: center;
  background: #5bc8ac;
  color: #fff;
  font-size: 14px;
}
.Form-Item-Input {
  border: 1px solid #ddd;
  border-radius: 6px;
  margin-left: 40px;
  padding-left: 1em;
  padding-right: 1em;
  height: 48px;
  flex: 1;
  width: 100%;
  max-width: 410px;
  background: #eaedf2;
  font-size: 18px;
  font-family: "Georgia";
}
.Form-Item-Input:focus{
  border-color  : #0b160069;
  background    : rgba(146, 146, 146, 0.214);
  box-shadow    : 4px 4px 2px #999;
  outline       : 0;
}
.Form-Item-Textarea {
  border: 1px solid #ddd;
  border-radius: 6px;
  margin-left: 40px;
  padding-left: 1em;
  padding-right: 1em;
  height: 216px;
  flex: 1;
  width: 100%;
  max-width: 410px;
  background: #eaedf2;
  font-size: 18px;
}
.Form-Item-Textarea:focus{
  border-color  : #0b160069;
  background    : rgba(143, 143, 143, 0.214);
  box-shadow    : 4px 4px 2px #999;
  outline       : 0;
}
.Form-Btn {
  border-radius: 6px;
  margin-top: 15px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 260px;
  display: block;
  letter-spacing: 0.05em;
  background:  #2c3e50;
  color: #fff;
  font-weight: bold;
  display: inline-block;
  padding: 1em 1em;
  outline: none;
  border: solid 1px #627295;
  border-radius: 15px;
  font-family: 'Kaushan Script', cursive;
}
.Form-Btn:hover{
  -webkit-transform: scale(1.05,1.05);
	-moz-transform: scale(1.05,1.05);
	-o-transform: scale(1.05,1.05);
	-ms-transform: scale(1.05,1.05);
	transform: scale(1.05,1.05);
}
.Form-Btn:active{
  -webkit-transform: translateY(3px);
  transform: translateY(3px);
}
.send{
  font-size: 17px;
}
.nothing{
  position: absolute;
  font-size: 19px;
  color: rgb(255, 51, 0);
  top: 230px;
  left: 42vw;
}
.bottom-nav{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding-top: 15px;
  font-size: 18px;
  background-color: rgb(16, 16, 16);
  color:#d7e4f1;
  height: 60px;
}
</style>

<script>
import Header from "@/components/Header.vue";
import Separation from "@/components/Separation.vue";
import axios from 'axios'

export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
      isSubmit: false,
      nothing: false
    }
  },
  name: "contact",
  components: {
    Header,
    Separation
  },
  methods: {
    onSubmit() {
      const params = new URLSearchParams()

      params.append('form-name', 'contact')

      params.append('name', this.name)
      params.append('email', this.email)
      params.append('message', this.message)

      if(this.name!="" && this.email!="" && this.message!=""){
      axios
        .post('/', params)
        .then(() => {
            this.isSubmit = true
            this.nothing = false
        })
      }else{
        this.nothing = true
      }
    }
  }
}
</script>