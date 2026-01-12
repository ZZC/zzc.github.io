<template lang='pug'>
p.subtitle
  slot
</template>

<script>
export default {
}
</script>

<style lang='scss' scoped>
@use "~/assets/sass/breakpoints";

.subtitle {
  text-transform: uppercase;
  font-size: 18px;
  margin-top: 0;
  margin-bottom: 0;

  @include breakpoints.phone {
    font-size: 16px;
  }
}
</style>
