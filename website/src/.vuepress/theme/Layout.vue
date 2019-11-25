<template>
  <div id="site">
    <site-header />
    <site-content />
    <site-footer />
  </div>
</template>

<style>
@import "../styles/normalize.css";
@import "../styles/variables.css";

* {
  box-sizing: border-box;
}
html {
  font: 18px/1.5 var(--sans);
}

#site {
  display: flex;
  min-height: 100vh;
  flex-flow: column nowrap;
}
.site-container {
  max-width: 1024px;
  margin: 0 auto;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  line-height: 1.25;
  margin: 0 0 1.5rem;
  font-weight: bold;
  letter-spacing: -0.02em;
}
</style>
