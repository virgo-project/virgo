<template lang="pug">
.card-project
  .card-project__icon: slot(name="icon")
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
  display block
  margin-bottom 3rem
  border-top 1px solid var(--bc)
  position relative
  padding-top 1rem
  display flex
  &:before
    content ''
    width 4rem
    height 0.25rem
    background var(--txt)
    position absolute
    top 0
    left 0

.card-project__text
  flex 1

.card-project__title
  font-size 1.25rem
  font-weight bold
  font-family var(--sans)
  line-height 1.25
  color var(--txt)
  margin-bottom 0.5rem

.card-project__icon
  width 4rem
  height 4rem
  border 1px solid var(--txt)
  display flex
  justify-content center
  align-items center
  margin-bottom 1 rem

  font-family var(--sans)
  font-size 2rem
  margin-right 1rem

@media screen and (min-width: 768px)
  .card-project
    padding-top 1.5rem
    &:before
      width 8rem

  .card-project__title
    font-size 1.5rem
    margin-bottom 1rem

  .card-project__icon
    width 8rem
    height 8rem
    font-size 3rem
</style>
