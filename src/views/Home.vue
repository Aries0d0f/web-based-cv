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
  export default {
    data () {
      return {
        name: 'Aries Cs',
        id: '@aries0d0f',
        photo: 'https://i.imgur.com/ufhMP9v.jpg',
        about: [
          '左手編程、右手設計，我喜歡運用資訊技術解決生活大小事、透過設計充實生活。',
          '我擅長 Web 開發，目前擁有三年的前端開發經驗、兩年的全端開發經驗、團體合作開發經驗三年，另有一年的網頁教學經驗。',
          '現職於李梅樹紀念館資訊組、蘋果仁科技媒體。'
        ],
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
          },
          {
            link: 'https://linkedin.com/in/aries-cs-55677a145/',
            id: 'aries-cs-55677a145',
            icon: ['fab', 'linkedin-in']
          },
          {
            link: 'https://t.me/Aries0d0f',
            icon: ['fab', 'telegram-plane']
          }
        ],
        skillCollection: [
          {
            name: 'Front-end',
            skill: ['HTML & CSS', 'SCSS', 'JavaScript', 'RWD']
          },
          {
            name: 'Back-end',
            skill: ['Node.js', 'RESTfull WebService']
          },
          {
            name: 'Framework',
            skill: ['Vue.js', 'Koa.js', 'express.js']
          },
          {
            name: 'Others',
            skill: ['UI/UX Design', 'Linux SA', 'Google Analytics']
          }
        ],
        experience: [
          {
            title: '李梅樹紀念館資訊組 RD',
            date: '現任'
          },
          {
            title: '蘋果仁 Applealmond 編輯',
            date: '現任'
          },
          {
            title: '#UnaHack1 黑客松 Azure Power Bi 獎',
            date: '2017/02'
          },
          {
            title: '李梅樹紀念館暑期志工資訊能力訓練課程講師',
            date: '2017/07'
          },
          {
            title: '中崙高中資研社網頁前端課程專任講師',
            date: '2017/10'
          }
        ]
      }
    }
  }
</script>
