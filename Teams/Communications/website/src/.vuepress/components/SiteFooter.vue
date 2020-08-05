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
          <icon-facebook />
          <div class="label">Facebook</div>
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://twitter.com/VirgoUDV"
        >
          <icon-twitter />
          <div class="label">Twitter</div>
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://www.instagram.com/virgoudv/"
        >
          <icon-instagram />
          <div class="label">Instagram</div>
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://www.youtube.com/channel/UCRxqMDaQ7JKy2TeZflextkw/"
        >
          <icon-youtube />
          <div class="label">YouTube</div>
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://github.com/virgo-project"
        >
          <icon-github />
          <div class="label">GitHub</div>
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://forum.virgo.org"
        >
          <icon-forum />
          <div class="label">Discourse</div>
        </a>
      </div>
      <p>&copy; Virgo 2019&mdash;</p>
    </site-container>
  </div>
</template>

<script>
import FormEmail from "./FormEmail";
import IconFacebook from "../icons/logo-facebook";
import IconGithub from "../icons/logo-github";
import IconInstagram from "../icons/logo-instagram";
import IconTwitter from "../icons/logo-twitter";
import IconYoutube from "../icons/logo-youtube";
import IconForum from "../icons/f-comment";
export default {
  name: "site-footer",
  components: {
    FormEmail,
    IconFacebook,
    IconGithub,
    IconInstagram,
    IconTwitter,
    IconYoutube,
    IconForum
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
