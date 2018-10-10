<template>
  <div class="card-container">
    <div id="head" class="card card-head">
      <div class="image" :style="{ 'background-image': `url(${photo})` }"></div>
      <div class="content">
        <h1>{{ name }}</h1>
        <p>{{ id }}</p>
      </div>
    </div>
    <div id="contact" class="contact-list">
      <a class="contact" v-for="(contact, i) in contacts" :key="i" :href="contact.link" target="_blank">
        <div class="icon">
          <font-awesome-icon :icon="contact.icon" />
        </div>
        <p>{{ contact.id || contact.link.match(/((:)|(\/\/))+(.*)/)[4] }}</p>
      </a>
    </div>
    <div id="about" class="card">
      <h2>About</h2>
      <p v-for="paragraph in about" :key="paragraph">{{ paragraph }}</p>
    </div>
    <div id="skill" class="card">
      <h2>Skill</h2>
      <div class="skill-container" v-for="(collection, i) in skillCollection" :key="i">
        <p class="tag">{{ collection.name }}</p>
        <div class="skill-item">
          <p>{{ collection.skill.join(', ') }}.</p>
        </div>
      </div>
    </div>
    <div id="experience" class="card">
      <h2>Experience</h2>
      <div v-for="(item, i) in experience" :key="i">
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
      return profile
    }
  }
</script>
