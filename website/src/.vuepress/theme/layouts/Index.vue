<template>
  <div id="site">
    <site-header />
    <div id="site-hero">
      <div id="video-container">
        <video id="video-bg" autoplay loop muted playsinline>
          <source :src="$frontmatter.vidwebm" type="video/webm" />
          <source :src="$frontmatter.vidmpeg" type="video/mp4" />
        </video>
      </div>
      <div class="site-hero__text">
        <h1>We are surrounded by <strong>fire</strong></h1>
        <p>
          And our governments aren't going to fix it. But we can. Virgo gives
          you the tools to coordinate and solve problems from local issues all
          the way to global crises.
        </p>
        <a href="/about" class="vg-button">Read the manifesto</a>
      </div>
    </div>
    <site-footer />
  </div>
</template>

<style scoped lang="stylus">
@import "../../styles/normalize.css"
@import "../../styles/variables.css"
@import "../../styles/screen.css"

#site-hero
  width 100vw
  height 100vh
  display flex
  align-items center
  justify-content center
  padding-top 3em

.site-hero__text
  color #fff
  z-index 1
  text-shadow #000 0 2px 3px
  padding 0 1em

#video-container
  position absolute
  top 0
  left 0
  width 100vw
  height 100vh
  background #000
  overflow hidden
  &:after
    content ""
    width 100vw
    height 100vh
    background url('../../images/matrix.png')
    display block
    position absolute
    top 0
    left 0
    z-index 1

.vg-button
  font-family var(--sans)
  display inline-block
  height 3em
  line-height 3em
  padding 0 1em
  background hsla(0, 100%, 0%, 0.75)
  color #fff
  font-weight bold
  border none

@media (min-aspect-ratio: 16/9)
  #video-bg
    width 100%
    height auto

@media (max-aspect-ratio: 16/9)
  #video-bg
    width auto
    height 100%

@media screen and (min-width: 768px)
  .site-hero__text
    font-size 1.5rem
    margin-left 12.5vw
    margin-right 12.5vw

@media screen and (min-width: 1024px)
  .site-hero__text
    font-size 1.5rem
    margin-left 12.5vw
    margin-right 12.5vw
    padding-left 25vw
</style>
