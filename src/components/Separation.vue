<template>
  <h2 class="separation"><slot></slot></h2>
</template>

<style>
.separation{
  padding-top: 32px;
  font-size: 26px;
}
</style>

<script>
export default {
  name: 'Separation'
}
</script>