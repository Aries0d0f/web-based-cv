<template>
  <div class="card-container">
    <div class="card card-head">
      <div class="image" :style="{ 'background-image': `url(${photo})` }"></div>
      <div class="content">
        <h1>{{ name }}</h1>
        <p>{{ id }}</p>
      </div>
      <div class="icon-list">
        <div class="icon" v-for="(contact, i) in contacts" :key="i">
          <a :href="contact.link" target="_blank"><font-awesome-icon :icon="contact.icon" /></a>
        </div>
      </div>
    </div>
    <div class="card"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        name: 'Aries Cs',
        id: '@aries0d0f',
        photo: 'https://scontent.ftpe1-1.fna.fbcdn.net/v/t1.0-9/32231624_1311310092346688_8354180873595125760_n.jpg?_nc_cat=0&oh=22f5c0e2f9efa2491cccaead7e11ba06&oe=5B78629D',
        contacts: [
          {
            link: 'https://github.com/Aries0d0f',
            icon: ['fab', 'github']
          },
          {
            link: 'mailto:aries0d0f@gmail.com',
            icon: ['fas', 'envelope']
          },
          {
            link: 'tel:+886966657716',
            icon: ['fas', 'phone']
          },
          {
            link: 'https://fb.com/aries0d0f',
            icon: ['fab', 'facebook-f']
          }
        ]
      }
    }
  }
</script>