<template lang="pug">
router-link.card-story(:to="page.path")
  .card-story__img
    img(:src="coverImg")
  .card-story__text
    .card-story__title {{ page.title }}
    .card-story__meta {{ timeAgo(page.frontmatter.date) }} ago by {{ author.name }}
</template>

<script>
import authors from "../store/authors.json";
import { formatDistance } from "date-fns";
export default {
  name: "card-story",
  computed: {
    author() {
      return authors[this.page.frontmatter.author];
    },
    coverImg() {
      return require(`../../_stories/${this.page.frontmatter.cover}.jpg`);
    }
  },
  methods: {
    timeAgo(date) {
      return formatDistance(new Date(date), new Date());
    }
  },
  props: ["page"]
};
</script>

<style lang="stylus">
.card-story
  display block
  margin-bottom 3rem
  border-top 1px solid var(--bc)
  position relative
  padding-top 1rem
  &:before
    content ''
    width 4rem
    height 0.25rem
    background var(--txt)
    position absolute
    top 0
    left 0

.card-story__title
  font-size 1.25rem
  font-weight bold
  font-family var(--sans)
  line-height 1.25
  color var(--txt)
  margin-bottom 0.25rem

.card-story__meta
  font-size 0.875rem
  color var(--dim)

.card-story__img img
  display block
  width 100%

@media screen and (min-width: 768px)
  .card-story
    display flex
    padding-top 1.5rem
    align-items flex-start

  .card-story__title
    font-size 1.5rem
    margin-bottom 0.5rem
  .card-story__meta
    font-size 1rem

  .card-story__text
  .card-story__img
    flex 1

  .card-story__img
    padding-right 0.5rem
  .card-story__text
    padding-left 0.5rem
</style>
