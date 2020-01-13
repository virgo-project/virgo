<template>
  <div id="site-markdown">
    <Content />
  </div>
</template>

<style scoped lang="stylus">
#site-markdown
  flex 1
  padding 3rem 1rem
  margin-top 3rem

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
