<template>
  <div id="site-footer">
    <site-container-text>
      <form-email />
    </site-container-text>
    <site-container>
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
</style>
