<template>
  <div class="index-wrap">
      <p>hello vue</p>
      <img src="./assets/image/logo.svg">
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
    };
  }
};
</script>

<style lang="sass" scoped>
.index-wrap {
    color: red;
    font-size: 40px;
}

.index-wrap img {
    width: 200px;
}
</style>