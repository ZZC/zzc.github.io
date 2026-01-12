<template lang='pug'>
.layout
  header
    site-header
  .page-wrapper
    nuxt
  footer
    site-footer
</template>

<script>
import SiteHeader from '~/components/SiteHeader'
import SiteFooter from '~/components/SiteFooter'

export default {
  components: {
    SiteHeader,
    SiteFooter
  }
}
</script>

<style lang='scss'>
@use "~/assets/sass/fonts";

* {
  box-sizing: border-box;
}
html {
  background: #fff;
  font-family: 'agave';
}
a {
  color: inherit;
  text-decoration: none;
}
</style>

<style lang='scss' scoped>
@use "~/assets/sass/colors";

.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .page-wrapper {
    color: #202321;
  }

  footer {
    margin-top: auto;
  }
}
</style>
