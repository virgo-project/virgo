<template>
  <div id="site-content" class="site-container">
    <Content />
  </div>
</template>

<style>
#site-content {
  flex: 1;
  max-width: 75vw;
  width: 100vw;
}

@media screen and (min-width: 768px) {
  #site-content {
    max-width: 37.5vw;
  }
}
</style>
