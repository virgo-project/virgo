<template lang="pug">
#site
  site-header
  #page-projects
    .page-header
      h1 Virgo Projects
      p Virgo is a decentralized network of people who are working on projects to improve the resilience of society. Here are the primary projects that we're working on.

    card-project
      div(slot="icon"): img(src="../../images/icons/anticollapse.png")
      div(slot="title") Anticollapse
      p Anticollapse aims to help people navigate coming radical changes to our way of life. We will integrate blockchain technology into a community coordination solution. We aim to mitigate crises caused by COVID-19: economic shocks, supply chain issues, and more.
      a(href="https://github.com/virgo-project/anticollapse" target="_blank" rel="noopener noreferrer") Anticollapse on GitHub

    card-project
      div(slot="icon"): img(src="../../images/icons/cash.png")
      div(slot="title") Cash
      p Virgo Cash is an open protocol for regulation-compliant cryptocurrency. We aim to enable permissionless blockchain technology to thrive in the tightly regulated financial services sector. The primary mission of Virgo Cash is to bridge decentralized financial systems (like Cosmos) with regulated financial systems (fiat currencies).
      a(href="https://github.com/virgo-project/cash" target="_blank" rel="noopener noreferrer") Cash on GitHub

    card-project
      div(slot="icon"): img(src="../../images/icons/dither.png")
      div(slot="title") Dither
      p Dither is an uncensorable social network built on top of blockchain technology. Dither messsages are replicated permanently across hundreds of highly secure servers around the world, providing a globally-accessible free speech platform for everyone. We aim to provide user-friendly interfaces for the web, iOS, and Android.
      a(href="https://github.com/virgo-project/dither" target="_blank" rel="noopener noreferrer") Dither on GitHub

    card-project
      div(slot="icon"): img(src="../../images/icons/hardware.png")
      div(slot="title") Hardware
      p Virgo is designing and producing a line of secure open source hardware products. We will start with a minimal hardware security module (HSM). We'll work towards more performant and complex systems, culminating in a single board computer (SBC) similar to the popular Raspberry Pi.
      a(href="https://github.com/virgo-project/hardware" target="_blank" rel="noopener noreferrer") Hardware on GitHub

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
