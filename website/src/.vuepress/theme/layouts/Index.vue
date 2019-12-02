<template>
  <div>
    <modal
      :visible="video"
      @input="video = null"
      button="dark"
      overlay="rgba(0,0,0,.8)"
    >
      <div class="modal__content">
        <iframe
          width="100%"
          height="504"
          src="https://www.youtube.com/embed/Fdwe5dtCb7Y?autoplay=1&controls=1&rel=0&modestbranding=1&fs=1"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        >
        </iframe>
      </div>
    </modal>
    <site-header />
    <div id="site-hero">
      <div id="video-container">
        <video id="video-bg" autoplay loop muted playsinline>
          <source :src="$frontmatter.webm" type="video/webm" />
          <source :src="$frontmatter.mpeg" type="video/mp4" />
        </video>
      </div>
      <div class="site-hero__text">
        <h1>We are surrounded by fire.</h1>
        <p>
          And our governments aren't going to fix it.
          <strong>But together, we can.</strong> Virgo gives everyone the tools
          to coordinate and solve problems from local issues all the way to
          global crises.
        </p>
        <div class="vg-btns">
          <a class="vg-btn vg-btn__primary" @click="video = true"
            >Watch video
            <img src="../../images/play.svg" />
          </a>
          <a class="vg-btn" href="/about">Read it</a>
        </div>
      </div>
    </div>
    <site-footer />
  </div>
</template>

<script>
import { Modal } from "@cosmos-ui/vue";
export default {
  components: {
    Modal
  },
  data: () => ({
    video: null
  })
};
</script>

<style scoped lang="stylus">
@import "../../styles/normalize.css"
@import "../../styles/variables.css"
@import "../../styles/screen.css"

.modal__content
  background #000
  width 100vw
  max-width 896px
  line-height 0
  display flex
  align-items center

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

.vg-btns
  display flex

.vg-btn
  font-family var(--sans)
  display inline-block
  height 3em
  line-height 3em
  padding 0 1em
  background hsla(0, 100%, 0%, 0.75)
  color #fff
  border none
  text-shadow none
  cursor pointer
  display flex
  align-items center
  &:hover
    opacity 0.85
  img
    margin-left 0.5rem

.vg-btn__primary
  background hsl(170,75%,40%)

.vg-btn + .vg-btn
  margin-left 1rem

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
    font-size 1.25rem
    margin-left 12.5vw
    margin-right 12.5vw

@media screen and (min-width: 1024px)
  .site-hero__text
    padding-left 25vw
    p
      margin 2em 0
</style>
