<template lang="pug">
#site
  site-header
  #page-stories
    .page-header
      h1 Virgo Stories
      p Welcome! Virgo Stories is a curated collection of articles written by the Virgo community. You can submit your article for inclusion on the #[a(href="https://forum.virgo.org") Virgo Forum].
    card-story(v-for="page in $pagination.pages" :page="page")
  #pagination
    router-link(v-if="$pagination.hasPrev" :to="$pagination.prevLink") Prev
    router-link(v-if="$pagination.hasNext" :to="$pagination.nextLink") Next
  site-footer
</template>

<script>
import { formatDistance } from "date-fns";
import CardStory from "../../components/CardStory";
export default {
  name: "stories",
  components: {
    CardStory
  }
};
</script>

<style lang="stylus">
@require "../../styles/normalize"
@require "../../styles/variables"
@require "../../styles/screen"

#page-stories
  flex 1
  padding 3rem 1rem
  margin-top 3rem

@media screen and (min-width: 768px)
  #page-stories
    margin-left 12.5vw
    margin-right 12.5vw
    font-size 1.125rem
    padding-left 0
    padding-right 0

@media screen and (min-width: 1024px)
  #page-stories
    padding-left 25vw
</style>
