<template>
  <h2 class="separation"><slot></slot></h2>
</template>

<style>
.separation{
  padding-top: 42px;
  font-size: 26px;
}
</style>

<script>
export default {
  name: 'Separation'
}
</script>