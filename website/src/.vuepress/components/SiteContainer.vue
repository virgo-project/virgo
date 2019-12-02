<template>
  <div class="site-container">
    <slot />
  </div>
</template>

<style scoped lang="stylus">
.site-container
  padding 1rem

@media screen and (min-width: 768px)
  .site-container
    margin-left 12.5vw
    margin-right 12.5vw
    font-size 1.125rem
    padding-left 0
    padding-right 0
</style>
