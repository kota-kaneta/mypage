<template>
    <h2 class="separation"><slot></slot></h2>
</template>

<style>
.separation{
  padding-top: 30px;
  font-size: 27px;
  padding-bottom: 30px;
}
h2 {
  position: relative;
  display: inline-block;
  padding: 0 55px;
}

h2:before, h2:after {
  content: '';
  position: absolute;
  top: 50%;
  display: inline-block;
  width: 400px;
  height: 1px;
  background-color: #2c3e50;
}

h2:before {
  left:-370px;
}
h2:after {
  right: -370px;
}
</style>

<script>
export default {
  name: 'Separation'
}
</script>