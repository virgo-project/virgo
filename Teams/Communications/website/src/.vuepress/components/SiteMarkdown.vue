<template>
  <div id="site-markdown">
    <Content />
  </div>
</template>

<style lang="stylus">
#site-markdown
  flex 1
  padding 3rem 1rem
  margin-top 3rem

h2,
h3,
h4,
h5,
h6
  margin-top 3rem

h2
  border-top 1px solid var(--bc)
  padding-top 3rem

h3
  font-weight 400

h4
  font-family var(--serif)

p
  margin 1.5em 0
  &:last-child
    margin-bottom 0

li
  margin-bottom 0.5rem
  p
    margin 0
@media screen and (min-width: 768px)
  #site-markdown
    margin-left 12.5vw
    margin-right 12.5vw
    font-size 1.125rem
    padding-left 0
    padding-right 0

@media screen and (min-width: 1024px)
  #site-markdown
    padding-left 25vw
</style>
