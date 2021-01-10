<template>
    <header>
        <h1><slot></slot></h1>
    </header>
</template>

<style>
header {
  font-size: 20px;
  padding-bottom: 50px;
}
</style>

<script>
export default {
  name: 'Header'
}
</script>