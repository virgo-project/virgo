<template>
  <div id="site">
    <site-header />
    <div id="page-stories">
      <h1>Virgo Stories</h1>
      <p>Read the latest stories about Virgo.</p>
      <div class="card-story" v-for="page in $pagination.pages">
        <router-link class="page-link" :to="page.path">
          <h2>
            {{ page.title }}
          </h2>
          <p>
            {{ timeAgo(page.frontmatter.date) }} ago by
            {{ page.frontmatter.author }}
          </p>
        </router-link>
      </div>
    </div>
    <div id="pagination">
      <router-link v-if="$pagination.hasPrev" :to="$pagination.prevLink"
        >Prev</router-link
      >
      <router-link v-if="$pagination.hasNext" :to="$pagination.nextLink"
        >Next</router-link
      >
    </div>
    <site-footer />
  </div>
</template>

<script>
import { formatDistance } from "date-fns";
export default {
  name: "stories",
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

#page-stories
  flex 1
  padding 3rem 1rem
  margin-top 3rem

.card-story
  display block
  h2
    color var(--txt)
  p
    color var(--dim)

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
