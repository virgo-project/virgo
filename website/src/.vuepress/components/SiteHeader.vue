<template>
  <div id="site-header">
    <a id="site-logo" href="/">Virgo</a>
    <a id="site-nav-toggle" @click="toggleNav">Menu</a>
    <nav id="site-nav" v-bind:class="{ active: siteNavActive }">
      <a href="/about">Manifesto</a>
      <a href="/about/FUNDING">Funding</a>
      <!--<a href="/about/BOARD">Board</a>-->
      <!--<a href="/about/BYLAWS">Bylaws</a>
      <!--<a href="/about/GLOSSARY">Glossary</a>-->
      <!--<a href="./LAWS">Laws</a>-->
      <!--<a href="./Owners">Owners</a>-->
      <a href="https://forum.virgo.org">Forum</a>
      <a href="https://github.com/virgo-project/virgo" target="_blank"
        >Contribute</a
      >
    </nav>
  </div>
</template>

<script>
export default {
  name: "site-header",
  data: () => ({
    siteNavActive: false
  }),
  methods: {
    toggleNav() {}
  }
};
</script>

<style lang="stylus">
#site-header
  position fixed
  top 0
  left 0
  width 100vw
  height 3rem
  z-index var(--z-app-header)
  background #fff
  z-index 10000

  display grid
  grid-auto-flow column

#site-header a
  color var(--txt)

#site-logo
#site-nav-toggle
  line-height 3rem
  padding 0 1rem

#site-logo
  font-weight bold
  text-transform uppercase

#site-nav-toggle
  text-align right

#site-nav
  display none

#site-nav.site-nav--visible
  display block
</style>
