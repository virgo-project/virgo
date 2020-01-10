<template>
  <div class="site-container-text">
    <slot />
  </div>
</template>

<style scoped lang="stylus">
.site-container-text
  padding 1rem

@media screen and (min-width: 768px)
  .site-container-text
    margin-left 12.5vw
    margin-right 12.5vw
    font-size 1.125rem
    padding-left 0
    padding-right 0

@media screen and (min-width: 1024px)
  .site-container-text
    padding-left 25vw
</style>
