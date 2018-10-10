<template>
  <div id="footer">
    <p>This work is licensed under MIT License</p>
    <p>Design by <a href="https://aries0d0f.me">Aries Cs</a></p>
    <p v-if="lang.length > 1"> • <span v-for="lang in lang" :key="lang.name"><a :href="`?lang=${lang.name}`">{{ lang.human }}</a> • </span></p>
  </div>
</template>

<script>
  import * as profile from '../../profile.json'
  export default {
    data () {
      return {
        lang: profile.mulitLang
      }
    }
  }
</script>
