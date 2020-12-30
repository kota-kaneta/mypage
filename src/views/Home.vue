<template>
  <div class="home">
    <transition appear>
      <p>Nice to meet you, I'm Kota Kaneta. <br>
      You can see the skills I have by looking at this site.<br>
      If you are interested, please send a message from the contact form.
      </p>
    </transition>
  </div>
</template>

<style scoped>
.home{
  font-size: 40px;
  padding-top: 10px;
}

.v-enter-active {
  transition: opacity 6s;
}
.v-enter {
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
  }
</style>