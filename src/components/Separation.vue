<template>
    <h2 class="separation"><slot></slot></h2>
</template>

<style>
.separation{
  padding-top: 145px;
  font-size: 31px;
  padding-bottom: 30px;
  font-family: 'Kaushan Script', cursive;
}
</style>

<script>
export default {
  name: 'Separation'
}
</script>