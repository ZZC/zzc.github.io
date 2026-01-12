<template lang='pug'>
nuxt-link.logo(:to='{ name: "index", params: { lang: $i18n.locale } }', title='ZZC')
  zzc-logo.zzc-logo
</template>

<script>
import ZzcLogo from '~/assets/images/zzc-logo.svg?inline'

export default {
  components: {
    ZzcLogo
  }
}
</script>

<style lang='scss' scoped>
@use "~/assets/sass/utils";

.logo {
  height: 30px;
  @include utils.center;

  .zzc-logo {
    vertical-align: top;
  }
}
</style>
