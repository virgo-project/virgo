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
        <site-content />
        <button class="vg-button">Learn more</button>
      </div>
    </div>
    <site-footer />
  </div>
</template>

<style lang="stylus" scoped>
@import "../../styles/normalize.css"
@import "../../styles/variables.css"
@import "../../styles/screen.css"

#site-hero
  width 100vw
  height 100vh
  color #fff
  display flex
  align-items center
  justify-content center
  padding 6rem 0

  .site-hero__text
    z-index 1
    color #fff
    padding 1rem
    text-shadow #000 0 2px 2px

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
  height 3rem
  line-height 3rem
  padding 0 1rem
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
</style>
