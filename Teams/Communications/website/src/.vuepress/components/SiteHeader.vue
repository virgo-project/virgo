<template>
  <div id="site-header">
    <a id="site-logo" href="/">Virgo</a>
    <nav id="site-nav">
      <!--<a href="/about">Manifesto</a>-->
      <!--<a href="/about/BOARD">Board</a>-->
      <!--<a href="/about/BYLAWS">Bylaws</a>
      <!--<a href="/about/GLOSSARY">Glossary</a>-->
      <!--<a href="./LAWS">Laws</a>-->
      <a href="/about/ABOUT.html">About</a>
      <a href="/about/UDV.html">UDV</a>
      <a href="/about/FUNDING.html">Donate</a>
      <a href="/about/ROLES.html">Volunteer</a>
      <!--<a href="./Owners">Owners</a>-->
      <a
        href="https://forum.virgo.org"
        target="_blank"
        rel="noreferrer noopener"
      >
        Discuss
      </a>
      <!--
      <a
        href="https://github.com/virgo-project/virgo"
        target="_blank"
        rel="noreferrer noopener"
      >
        GitHub
      </a>
      -->
    </nav>
  </div>
</template>

<script>
export default {
  name: "site-header"
};
</script>

<style scoped lang="stylus">
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
  font-family var(--sans)

#site-header a
  color var(--txt)
  box-sizing border-box

#site-logo
  display block
  line-height 3rem
  padding 0 1rem
  font-weight bold
  font-size 1.125rem
  letter-spacing -0.1em
  font-family var(--sans)
  text-transform uppercase
  flex 1

#site-nav
  height 2rem
  flex 3

  display flex
  align-items center
  flex-flow row wrap
  a
    line-height 1.125rem
    font-size 0.75rem
    width 33.33%
    display flex
    align-items center

@media screen and (min-width: 1024px)
  #site-header
    padding 0 12.5%

  #site-logo
    padding 0

  #site-nav
    flex 2
    flex-flow row nowrap
    justify-content space-between
    a
      width auto
      font-size 1rem
</style>
