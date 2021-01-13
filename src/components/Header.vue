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
  padding-bottom: 30px;
}
</style>

<script>
export default {
  name: 'Header'
}
</script>