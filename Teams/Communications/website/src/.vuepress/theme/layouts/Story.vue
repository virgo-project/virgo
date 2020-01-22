<template lang="pug">
#site
  site-header
    article.story
      h1
        | {{ $frontmatter.title }}
      p.story-meta
        | {{ timeAgo($frontmatter.date) }} ago by
        | {{ $frontmatter.author }}
      content
        .story-author
          h3 About the author
          div(clas='bio') {{ $frontmatter.author }} - {{ $frontmatter.bio }}
        .story-cta
          h3 Seeking contributors
          p We&apos;re looking for contributors to Virgo Stories! Do you have a story to tell about world issues? Submit your content to the #[a(href=&quot;https://forum.virgo.org/c/stories/11&quot;) Virgo Stories] section of our forum for a chance for visibility and recognition.
    site-footer
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

article.story
  flex 1
  padding 3rem 1rem
  margin-top 3rem

.story-meta
  color var(--dim)
  font-style italic
  margin-bottom 1.5rem
  margin-top -0.5rem

.story-author
.story-cta
  margin 1.5rem 0
  padding 1.5rem 0

.story-author
  margin-top 3rem
  border-top 1px solid var(--bc)

.story-cta
  border-top 2px solid var(--txt)

@media screen and (min-width: 768px)
  article.story
    margin-left 12.5vw
    margin-right 12.5vw
    font-size 1.125rem
    padding-left 0
    padding-right 0

@media screen and (min-width: 1024px)
  article.story
    padding-left 25vw
</style>
