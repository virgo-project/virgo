<template>
  <a class="vg-btn" :href="href" target="_blank" rel="noopener noreferrer">
    <span class="vg-btn__container">
      <slot />
    </span>
  </a>
</template>

<script>
export default {
  props: ["href"]
};
</script>

<style scoped lang="stylus">
.vg-btn
  font-family var(--sans)
  display inline-block
  cursor pointer

.vg-btn__container
  line-height 3em
  padding 0 1em
  background hsl(170,75%,80%)
  color var(--txt)
  display flex
  flex-flow row nowrap
  align-items center
  &:hover
    opacity 0.85
  svg
    margin-left 0.5rem

.vg-btn__primary
  background hsl(170,75%,40%)

.vg-btn + .vg-btn
  margin-top 0.5rem
</style>
