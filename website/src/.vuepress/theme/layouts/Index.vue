<template>
  <div id="site">
    <site-header />
    <div id="site-hero">
      <video id="video-bg" autoplay loop muted playsinline>
        <source :src="$frontmatter.vidmp4" type="video/mp4" />
        <source :src="$frontmatter.vidwebm" type="video/webm" />
      </video>
      <div class="site-hero__text">
        <site-content />
        <button class="vg-button">Put out the fire</button>
      </div>
    </div>
    <site-footer />
  </div>
</template>

<style scoped>
@import "../../styles/normalize.css";
@import "../../styles/variables.css";
@import "../../styles/screen.css";

#site-hero .site-hero__text {
  z-index: 1;
  color: #fff;
  padding: 1rem;
  text-shadow: #000 0 2px 2px;
  font-size: 1.25rem;
}

#site-hero {
  width: 100vw;
  height: 100vh;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 0;
}
#video-bg {
  position: absolute;
  z-index: -1;
}
#video-bg:after {
  content: "";
  width: 100vw;
  height: 100vh;
  background: hsla(0, 0%, 0%, 0.5);
  display: block;
  position: absolute;
  top: 0;
  left: 0;
}

.vg-button {
  height: 3rem;
  line-height: 3rem;
  padding: 0 1rem;
  background: hsl(220, 100%, 50%);
  font-weight: bold;
  color: #fff;
  border: none;
}

@media (min-aspect-ratio: 16/9) {
  #video-bg {
    width: 100%;
    height: auto;
  }
}
@media (max-aspect-ratio: 16/9) {
  #video-bg {
    width: auto;
    height: 100%;
  }
}
</style>
