<template lang="pug">
#page-index
  cookie-banner
  site-header
  site-hero
  site-footer
</template>

<script>
import { Modal, CookieBanner } from "@cosmos-ui/vue";
import SiteHero from "../../components/SiteHero";
export default {
  name: "page-index",
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
