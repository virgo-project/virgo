<template lang="pug">
#site
  site-header
  #page-projects
    .page-header
      h1 Virgo Projects
      p Virgo is an ambitious new initiative to correct the course of humanity to a more resilient and sustainable future. Here are the key projects that our community members are working on.

    card-project
      div(slot="icon") C
      div(slot="title") Virgo Cash
      div Virgo Cash is a resilient stablecoin initiative. The value of one Virgo Dollar will be based on a basket of currencies, unlike most stablecoins which are valued at $1 USD. More information is coming soon.
    card-project
      div(slot="icon") D
      div(slot="title") Virgo Dither
      div Dither is an decentralized and uncensorable communications platform and social network. Messages are stored permanently and transparently on Cosmos Hub. #[a(href="https://dither.chat" target="_blank" rel="noreferrer noopener") Try the alpha.]
    card-project
      div(slot="icon") U
      div(slot="title") United DAOs of Virgo
      div The United DAOs of Virgo (UDV) is interconnected ecosystem of decentralized autonomous organizations (DAOs). In short, these are internet-based companies that work together and follow the same system of governance. #[router-link(to="/about/UDV.html") Learn more.]

  site-footer
</template>

<script>
import CardProject from "../../components/CardProject";
export default {
  name: "projects",
  components: {
    CardProject
  }
};
</script>

<style lang="stylus">
@require "../../styles/normalize"
@require "../../styles/variables"
@require "../../styles/screen"

#page-projects
  flex 1
  padding 3rem 1rem
  margin-top 3rem

@media screen and (min-width: 768px)
  #page-projects
    margin-left 12.5vw
    margin-right 12.5vw
    font-size 1.125rem
    padding-left 0
    padding-right 0

@media screen and (min-width: 1024px)
  #page-projects
    padding-left 25vw
</style>
