<template>
  <div>
    <div class="fullview">
      <div class="loading-spacer"></div>
        <vue-loaders name="line-scale-pulse-out-rapid" color="lightseagreen" scale="1.5"></vue-loaders>
    </div>
  </div>
</template>

<style>
.fullview {
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #fefef7;
  z-index: 2;
}
.loading-spacer {
  height: 40%;
}
</style>

<script>
export default {
  name: 'loading'
}
</script>
