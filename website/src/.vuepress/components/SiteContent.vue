<template>
  <div id="site-content" class="site-container">
    <Content />
  </div>
</template>

<style>
#site-content {
  flex: 1;
  max-width: 40rem;
  width: 100vw;
  padding: 1rem;
}

@media screen and (min-width: 768px) {
  #site-content {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
}
</style>
