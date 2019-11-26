<template>
  <div id="site-footer">
    <div class="site-container">
      <form-email />
      <p>&copy; Virgo 2019&mdash;</p>
    </div>
  </div>
</template>

<script>
import FormEmail from "./FormEmail";
export default {
  name: "site-footer",
  components: {
    FormEmail
  }
};
</script>

<style>
#site-footer .site-container {
  padding: 1rem;
  text-align: center;
}
</style>
