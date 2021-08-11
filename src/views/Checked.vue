<template>
  <div id="checked">
    <form action="cgi-bin/abc.cgi" method="post">
      <div>
        <input type="checkbox" name="riyu" value="1" checked="checked" />マインド
        <input type="checkbox" name="riyu" value="2" />服装
        <input type="checkbox" name="riyu" value="3" />靴
        <input type="checkbox" name="riyu" value="4" />顎肉
        <input type="checkbox" name="riyu" value="5" />腹肉
        <input type="checkbox" name="riyu" value="6" />トーク力
        <input type="checkbox" name="riyu" value="7" />髪型
        <input type="checkbox" name="riyu" value="8" />匂い
      </div>
      <p>
        <input type="submit" value="送信する" />
      </p>
    </form>
  </div>
</template>

<style scoped lang="scss">
</style>

<script>

</script>