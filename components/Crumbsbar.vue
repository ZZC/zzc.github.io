<template lang='pug'>
.crumbsbar(:class='`theme-${theme}`')
  .yellow-line
  container(:padding='false')
    .crumbsbar-layout
      logo.logo-small
      template(v-for='crumb in crumbs')
        arrow.arrow
        nuxt-link.crumb(:to='crumb.url') {{ crumb.title }}
      .right-slot
        slot
</template>

<script>
import Arrow from '~/assets/images/icons/arrow-right.svg?inline'
import Container from '~/components/Container'
import Logo from '~/components/Logo'

export default {
  props: {
    theme: {
      type: String,
      default: 'gray'
    },
    crumbs: {
      type: Array,
      required: true
    }
  },
  components: {
    Arrow,
    Container,
    Logo
  }
}
</script>

<style lang='scss' scoped>
@use "~/assets/sass/breakpoints";
@use "~/assets/sass/colors";
@use "~/assets/sass/utils";
$color-gray-crumbs-selection: #616464;

.crumbsbar {

  .yellow-line {
    display: none;
  }

  &.theme-gray {
    background-color: #747878;
    color: #fff;

    .yellow-line {
      display: block;
      height: 5px;
      background-color: colors.$color-zzc;
    }

    .crumb:last-of-type {
      background-color: $color-gray-crumbs-selection;
    }
  }

  &.theme-yellow {
    background-color: colors.$color-zzc;

    .crumb:last-of-type {
      background-color: #fff;
    }
  }

  .crumbsbar-layout {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    .logo-small {
      width: 45px;
      height: 60px;

      @include breakpoints.phone {
        margin-left: 20px;
      }
      @include breakpoints.tablet {
        margin-left: 60px;
      }
    }

    .arrow {
      margin: 0 25px;
    }

    .crumb {
      font-size: 14px;
      height: 60px;
      @include utils.center;

      &:hover {
        text-decoration: underline;
      }
      &:last-of-type {
        padding: 0 20px;
        margin-right: 20px;
      }
    }
  }
}
</style>
