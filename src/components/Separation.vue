<template>
    <h2 class="separation"><slot></slot> <i class="fas fa-pen"></i></h2>
</template>

<style>
.separation{
  padding-top: 30px;
  font-size: 27px;
  padding-bottom: 30px;
  font-family: 'Kaushan Script', cursive;
}
</style>

<script>
export default {
  name: 'Separation'
}
</script>