<template>
    <header>
        <h1><slot></slot></h1>
    </header>
</template>

<style>
header {
  font-size: 20px;
}
#hr-head{
  width: 70vw;
  border: solid 1px ;
}
</style>

<script>
export default {
  name: 'Header'
}
</script>