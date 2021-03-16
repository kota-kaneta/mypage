<template>    
  <div>
    <header>
      <h1><slot></slot></h1>
    </header>
    <div class="triangle"></div>
  </div>
</template>

<style>
header {
  font-size: 20px;
  font-family: 'Kaushan Script', cursive;
  position: absolute;
  z-index: 3;
  top: 20px;
  left: 30px;
  color: rgb(203, 180, 147);
}
@media screen and (max-width: 767px) {
  header{
    left: 15px;
    top: 15px;
    font-size: 18px;
  }
}
.triangle{
  border-top: 130px solid #2c3e50;
  border-right: 100vw solid transparent;
  border-left: 0 solid transparent;
  position: absolute;
  z-index: 2;
}
</style>

<script>

export default {
  name: 'Header'
}
</script>