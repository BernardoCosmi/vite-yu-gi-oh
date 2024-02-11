<script>
// import

export default {
  name: "AppHeader",
};
</script>

<template>
  <div>
    <figure>
      <img src="../assets/img/logo.png" alt="Logo Yu-Gi-Oh">
    </figure>
    <h1>Yu-Gi-oh Api</h1>
  </div>

  
</template>

<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
div{
  display: flex;
  align-items: center;
  margin: 5px;
  border: 1px solid black;
}
figure{
  width: 120px;
  height: 100%;
  display: flex;
  align-items: center;
  border: 1px solid black;

  img{
    display: block;
    width: 100%;
    height: 100%;
  }
}
</style>
