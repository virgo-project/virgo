<template>
  <div id="site-header">
    <a id="site-logo" href="/">Virgo</a>
    <nav id="site-nav">
      <a href="/about">Manifesto</a>
      <a href="/about/FUNDING">Funding</a>
      <!--<a href="/about/BOARD">Board</a>-->
      <!--<a href="/about/BYLAWS">Bylaws</a>
      <!--<a href="/about/GLOSSARY">Glossary</a>-->
      <!--<a href="./LAWS">Laws</a>-->
      <!--<a href="./Owners">Owners</a>-->
      <a href="https://forum.virgo.org">Forum</a>
      <a href="https://github.com/virgo-project/virgo" target="_blank"
        >GitHub</a
      >
    </nav>
  </div>
</template>

<script>
export default {
  name: "site-header"
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

  display flex
  align-items center

#site-header a
  color var(--txt)

#site-logo
  display block
  line-height 3rem
  padding 0 1rem
  font-weight bold
  text-transform uppercase
  flex 1

#site-nav
  flex 3
  font-size 0.75rem
  display flex
  flex-flow row wrap
  a
    width 50%
    line-height 1.125rem

@media screen and (min-width: 768px)
  #site-nav a
    flex 1
    font-size 1rem
    width 100%
</style>
