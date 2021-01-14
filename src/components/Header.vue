<template>    
  <header>
    <h1><slot></slot></h1>
  </header>
</template>

<style>
header {
  font-size: 20px;
  margin: 0px auto 30px auto;
  padding-top: 30px;
  padding-bottom: 10px;
  border-bottom: 1px solid #2c3e50;
  width: 30vw;
}
</style>

<script>
export default {
  name: 'Header'
}
</script>