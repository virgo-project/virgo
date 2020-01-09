<template>
  <!-- Begin Mailchimp Signup Form -->
  <form
    action="https://virgo.us4.list-manage.com/subscribe/post?u=2b405e70f34379d9d0f3f8332&amp;id=a580397730"
    method="post"
    class="vg-form"
    target="_blank"
    novalidate
  >
    <div class="vg-form__header">
      <h3>Sign up for the Virgo newsletter</h3>
    </div>
    <div class="vg-form__fields">
      <input
        type="email"
        value=""
        name="EMAIL"
        class="required email"
        id="mce-EMAIL"
        placeholder="Email address"
      />
      <input
        type="submit"
        value="Subscribe"
        name="subscribe"
        id="mc-embedded-subscribe"
        class="button"
      />
      <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
      <div style="position: absolute; left: -5000px;" aria-hidden="true">
        <input
          type="text"
          name="b_2b405e70f34379d9d0f3f8332_a580397730"
          tabindex="-1"
          value=""
        />
      </div>
    </div>
  </form>
  <!--End mc_embed_signup-->
</template>

<style scoped lang="stylus">
.vg-form
  border-top 2px solid #444
  padding-top 1rem

  input
    display inline-block
    padding 0 1em
    height 3em
    line-height 2rem
    margin 0
    box-sizing border-box
    font-family var(--sans)

  input[type="text"]
  input[type="email"]
    border 1px solid var(--bc)

  input[type="submit"]
    background #000
    color #fff
    border none
    margin-top 0.5rem

.vg-form__header
  h3
    margin-bottom 1.5rem
    font-weight normal

.vg-form__fields
  display flex
  justify-content center
  flex-flow column nowrap

@media screen and (min-width: 768px)
  .vg-form__fields
    flex-flow row nowrap
    justify-content flex-start

  .vg-form
    margin-top 2rem
    padding-top 2rem
    padding-bottom 1rem
    input[type="submit"]
      margin-top 0
      margin-left 0.5rem
</style>
