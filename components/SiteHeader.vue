<template lang='pug'>
.site-header
  .header-bg
    zzc-outline.logo-outline
  container
    .header-layout
      .coupling
        .logo-container
          logo
        .menu-container
          main-menu
          .group
            .separator: .dot
            menu-item(:to='{ name: "index", params: { lang: $i18n.locale } }') {{ $t('menu.all') }}
          .group
            .separator: .dot
            menu-item(:to='{ params: { lang: "en" } }') En
            menu-item(:to='{ params: { lang: "ru" } }') Ru
            //- menu-item(:to='switchLocalePath("en")') En
            //- menu-item(:to='switchLocalePath("ru")') Ru
          //- .group
          //-   .separator: .dot
          //-   menu-item(to='/about') About
</template>

<script>
import { mapMutations } from 'vuex'
import Container from '~/components/Container'
import Logo from '~/components/Logo'
import MainMenu from '~/components/MainMenu'
import MenuItem from '~/components/MenuItem'
import ZzcOutline from '~/assets/images/zzc-logo-outline.svg?inline'

export default {
  components: {
    Container,
    Logo,
    MainMenu,
    MenuItem,
    ZzcOutline
  },
  methods: {
    ...mapMutations('i18n', ['setLanguage'])
  }
}
</script>

<style lang='scss' scoped>
@use "~/assets/sass/breakpoints";
@use "~/assets/sass/utils";

.site-header {
  color: #424747;
  position: relative;

  .header-bg {
    @include utils.stretch;
    overflow: hidden;

    .logo-outline {
      position: absolute;
      height: 800%;
      width: 150%;
      top: -350%;
      opacity: 0.08;
      left: 50%;
      margin-left: -75%;

      @include breakpoints.tablet {
        max-width: 1400px;
        margin-left: -800px;
      }
    }
  }

  .header-layout {
    position: relative;
    display: flex;
    align-items: center;

    @include breakpoints.tablet {
      min-height: 145px;
      padding-top: 20px;
      padding-bottom: 20px;
    }

    .coupling {
      display: flex;
      align-items: flex-start;
      flex-grow: 1;

      .logo-container {
        padding-top: 10px;
        padding-bottom: 10px;

        @include breakpoints.phone {
          min-height: 60px;
          width: 100%;
          @include utils.center;
        }
      }

      .menu-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        margin-left: auto;
        padding-left: 50px;

        @include breakpoints.phone {
          display: none;
        }

        & > * {
          &:not(.main-menu) {
            margin-top: 10px;
            margin-bottom: 10px;
          }
        }
        .group {
          display: flex;

          & > * {
            &:not(:last-child) {
              &:not(.separator) {
                margin-right: 30px;
              }
            }
          }
        }

        .separator {
          height: 30px;
          width: 100px;
          @include utils.center;

          .dot {
            height: 4px;
            width: 4px;
            border-radius: 50%;
            background-color: currentColor;
            opacity: 0.25;
          }
        }
      }
    }
  }
}
</style>
