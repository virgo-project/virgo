<template>
  <div id="site-footer">
    <site-container-text>
      <form-email />
    </site-container-text>
    <site-container>
      <div class="external">
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://www.facebook.com/VirgoUDV"
        >
          <img src="../images/feather/white/facebook.svg" />
          <div class="label">Facebook</div>
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://twitter.com/VirgoUDV"
        >
          <img src="../images/feather/white/twitter.svg" />
          <div class="label">Twitter</div>
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://www.instagram.com/virgoudv/"
        >
          <img src="../images/feather/white/instagram.svg" />
          <div class="label">Instagram</div>
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://www.youtube.com/channel/UCRxqMDaQ7JKy2TeZflextkw/"
        >
          <img src="../images/feather/white/youtube.svg" />
          <div class="label">YouTube</div>
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://github.com/virgo-project"
        >
          <img src="../images/feather/white/github.svg" />
          <div class="label">GitHub</div>
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://github.com/virgo-project"
        >
          <img src="../images/feather/white/discourse.svg" />
          <div class="label">Forum</div>
        </a>
      </div>
      <p>&copy; Virgo 2019&mdash;</p>
    </site-container>
  </div>
</template>

<script>
import FormEmail from "./FormEmail";
export default {
  name: "site-footer",
  components: {
    FormEmail
  }
};
</script>

<style scoped lang="stylus">
#site-footer
  background #222
  color #fff

  p
    font-family var(--sans)
    color #999
    margin 0

.external
  border-top 1px dotted var(--bc)
  display flex
  justify-content space-between
  margin 0 0 1.5rem
  padding-top 0.5rem
  a
    font-family var(--sans)
    color #fff
    height 3rem
    width 3rem

    display flex
    align-items center
    justify-content center
    .label
      display none
      font-size 0.9rem
@media screen and (min-width: 768px)
  .external
    flex-flow row wrap
    border-top none
    border-right 1px solid #333
    padding-top 0
    a
      flex 1
      border 1px solid #333
      border-right none
      img
        margin-right 0.5rem
      .label
        display block
        display none
</style>
