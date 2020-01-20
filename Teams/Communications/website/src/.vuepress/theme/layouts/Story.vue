<template>
  <div id="site">
    <site-header />
    <div id="story">
      <h1>
        {{ $frontmatter.title }}
      </h1>
      <p class="meta">
        {{ timeAgo($frontmatter.date) }} ago by
        {{ $frontmatter.author }}
      </p>
      <Content />
    </div>
    <site-footer />
  </div>
</template>

<script>
import { formatDistance } from "date-fns";
export default {
  name: "story",
  methods: {
    timeAgo(date) {
      return formatDistance(new Date(date), new Date());
    }
  }
};
</script>

<style lang="stylus">
@require "../../styles/normalize"
@require "../../styles/variables"
@require "../../styles/screen"

#story
  flex 1
  padding 3rem 1rem
  margin-top 3rem

p.meta
  color var(--dim)
  font-style italic
  margin-bottom 1.5rem
  margin-top -0.5rem

@media screen and (min-width: 768px)
  #story
    margin-left 12.5vw
    margin-right 12.5vw
    font-size 1.125rem
    padding-left 0
    padding-right 0

@media screen and (min-width: 1024px)
  #story
    padding-left 25vw
</style>
