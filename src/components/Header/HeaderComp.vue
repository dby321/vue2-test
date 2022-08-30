<template>
  <div class="main">
      <div class="main-left"></div>
  </div>
</template>

<script>
export default {
  name: 'HeaderComp'
}
</script>

<style lang="less" scoped>
.main{
  height: 300px;
  width: 300px;
  background-color: red;
  .main-left{
    height:150px;
    width: 150px;
    background-color: blue;
  }
}
</style>