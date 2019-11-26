<template>
  <div id="site-header">
    <div class="site-container">
      <a id="site-logo" href="/">Virgo</a>
      <nav id="site-nav">
        <a href="/about">Manifesto</a>
        <a href="/about/FUNDING">Funding</a>
        <!--<a href="/about/BOARD">Board</a>-->
        <!--<a href="/about/BYLAWS">Bylaws</a>
        <!--<a href="/about/GLOSSARY">Glossary</a>-->
        <!--<a href="./LAWS">Laws</a>-->
        <!--<a href="./Owners">Owners</a>-->
        <a href="https://forum.virgo.org">Forum</a>
        <a href="https://github.com/virgo-project/virgo" target="_blank"
          >Contribute</a
        >
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "site-header"
};
</script>

<style>
#site-header {
  border-bottom: 1px solid var(--bc);
}
#site-header a {
  text-decoration: none;
  color: var(--txt);
  padding: 0 0.5rem;
}
#site-header .site-container {
  min-height: 6rem;
  line-height: 3rem;
  display: flex;
  flex-flow: column nowrap;
}
#site-logo {
  flex: 1;
  font-weight: bold;
  font-size: 1.25rem;
  text-transform: uppercase;
  letter-spacing: -0.03rem;
  text-align: center;
}
#site-logo a {
  color: #0f0;
}
#site-nav {
  flex: 3;
  display: flex;
  justify-content: center;
}
@media screen and (min-width: 768px) {
  #site-header {
    border-bottom: none;
    padding: 0 2rem;
  }
  #site-header .site-container {
    flex-flow: row nowrap;
    align-items: center;
  }
  #site-logo {
    text-align: left;
  }
  #site-logo a {
    padding: 0 1rem;
  }
  #site-nav {
    justify-content: flex-end;
    padding-right: 0.5rem;
  }
}
</style>
