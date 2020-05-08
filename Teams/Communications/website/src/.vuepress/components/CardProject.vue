<template lang="pug">
.card-project
  .card-project__icon
    slot(name="icon")
  .card-project__text
    .card-project__title: slot(name="title")
    .card-project__description: slot
</template>

<script>
export default {
  name: "card-project"
};
</script>

<style lang="stylus" scoped>

.card-project
  border-top 1px solid var(--bc)
  padding-top 1rem
  display flex
  margin-bottom 3rem

  &:before
    content ''
    width 4rem
    height 0.25rem
    background var(--txt)
    position absolute
    top 0
    left 0

.card-project__icon
  padding 1rem
  width 120px
  padding-top 0
  img
    width 100%

.card-project__text
  flex 1

.card-project__title
  font-size 1.5rem
  font-weight bold
  font-family var(--sans)
  letter-spacing -0.07em
  line-height 1.25
  color var(--txt)
  margin-bottom 0.75rem
</style>
