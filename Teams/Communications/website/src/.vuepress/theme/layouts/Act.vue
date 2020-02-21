<template lang="pug">
#site
  site-header
  #page-act
    .page-header
      h1 Take Action
      p Virgo is a decentralized movement comprised of forward-thinking individuals like you! There are many ways you can make a difference. Here are some:

    h2 Discuss
    p We welcome all newcomers! Join our community on #[a(href="https://discord.gg/Y7E5hwj" target="_blank" rel="noreferrer noopener") Discord] and come say hello! You can also participate in #[a(href="https://forum.virgo.org" target="_blank" rel="noreferrer noopener") Virgo Forum] for insightful, longer-form discussions.

    h2 Volunteer
    p The world needs your help. We will always welcome volunteers and contributors. We are also accepting applications for full-time positions. View #[router-link(to="/about/ROLES.html") open roles].

    h2 Donate
    p Did you know that you can donate to Virgo? Make the world a better place today: #[router-link(to="/about/FUNDING.html") learn more about donating to Virgo].

  site-footer
</template>

<script>
export default {
  name: "act"
};
</script>

<style lang="stylus">
@require "../../styles/normalize"
@require "../../styles/variables"
@require "../../styles/screen"

#page-act
  flex 1
  padding 3rem 1rem
  margin-top 3rem

@media screen and (min-width: 768px)
  #page-act
    margin-left 12.5vw
    margin-right 12.5vw
    font-size 1.125rem
    padding-left 0
    padding-right 0

@media screen and (min-width: 1024px)
  #page-act
    padding-left 25vw
</style>
