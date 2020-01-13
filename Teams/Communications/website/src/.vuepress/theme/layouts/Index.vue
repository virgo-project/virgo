<template>
  <div>
    <cookie-banner />
    <site-header />
    <site-hero />
    <site-footer />
  </div>
</template>

<script>
import { Modal, CookieBanner } from "@cosmos-ui/vue";
import SiteHero from "../../components/SiteHero";
export default {
  components: {
    CookieBanner,
    Modal,
    SiteHero
  },
  data: () => ({
    video: null
  })
};
</script>

<style lang="stylus">
@require "../../styles/normalize"
@require "../../styles/variables"
@require "../../styles/screen"
</style>
