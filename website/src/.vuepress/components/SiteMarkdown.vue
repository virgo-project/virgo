<template>
  <div id="site-markdown">
    <Content />
  </div>
</template>

<style scoped lang="stylus">
#site-markdown
  flex 1
  width 100vw
  padding 3rem 1rem
  margin-top 3rem

@media screen and (min-width: 768px)
  #site-markdown
    margin-left 12.5vw
    margin-right 12.5vw
    padding-left 25vw
    padding-right 25vw
</style>
