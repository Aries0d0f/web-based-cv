<template>
  <div id="app">
    <router-view/>
    <main-footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer'
export default {
  components: {
    mainFooter: Footer
  }
}
</script>

<style lang='scss'>
@import "./assets/scss/main.scss";
</style>
