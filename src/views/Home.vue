<template>
  <div class="card-container">
    <div id="head" class="card card-head">
      <div class="image" :style="{ 'background-image': `url(${photo})` }"></div>
      <div class="content">
        <h1>{{ name[lang.index] }}</h1>
        <p>{{ id }}</p>
      </div>
    </div>
    <div id="contact" class="contact-list">
      <a class="contact" v-for="(contact, i) in contacts" :key="i" :href="contact.link" target="_blank">
        <div class="icon">
          <font-awesome-icon :icon="contact.icon" />
        </div>
        <p><span>{{ contact.id || contact.link.match(/((:)|(\/\/))+(.*)/)[4] }}</span></p>
      </a>
    </div>
    <div id="about" class="card">
      <h2>About</h2>
      <p v-for="paragraph in about[lang.index]" :key="paragraph">{{ paragraph }}</p>
    </div>
    <div id="skill" class="card">
      <h2>Skills</h2>
      <div class="skill-container" v-for="(collection, i) in skillCollection" :key="i">
        <p class="tag">{{ collection.name }}</p>
        <div class="skill-item">
          <p>{{ collection.skill.join(', ') }}.</p>
        </div>
      </div>
    </div>
    <div id="experience" class="card">
      <h2>Experience</h2>
      <div v-for="(item, i) in experience[lang.index]" :key="i">
        <p class="tag">{{ item.date }}</p>
        <p>{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import * as profile from '../../profile.json'
  export default {
    data () {
      return {
        ...profile,
        lang: profile.mulitLang[0]
      }
    },
    mounted () {
      this.langDetect()
    },
    methods: {
      langDetect () {
        console.log(profile.mulitLang.filter(e => (e.name === this.$route.query.lang))[0])
        this.lang = this.$route.query.lang ? profile.mulitLang.filter(e => (e.name === this.$route.query.lang))[0] : profile.mulitLang[0]
      }
    }
  }
</script>
