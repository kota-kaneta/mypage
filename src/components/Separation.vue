<template>
    <h2 class="separation"><slot></slot></h2>
</template>

<style>
.separation{
  padding-top: 30px;
  font-size: 27px;
  padding-bottom: 30px;
}
</style>

<script>
export default {
  name: 'Separation'
}
</script>