<template>
  <div class="card-container">
    <div id="head" class="card card-head">
      <div class="image" :style="{ 'background-image': `url(${photo})` }"></div>
      <div class="content">
        <h1>{{ name }}</h1>
        <p>{{ id }}</p>
      </div>
    </div>
    <div id="link" class="icon-list">
      <div class="icon" v-for="(contact, i) in contacts" :key="i">
        <a :href="contact.link" target="_blank"><font-awesome-icon :icon="contact.icon" /></a>
      </div>
    </div>
    <div id="about" class="card">
      <h2>關於我</h2>
      <p>你好，我是白羊，很高興認識你。</p>
      <p>左手編程、右手設計，我喜歡運用資訊技術解決生活大小事，透過設計充實生活。</p>
      <p>現任李梅樹紀念館資訊組RD、蘋果仁科技媒體編輯。</p>
    </div>
    <div id="skill" class="card">
      <h2>技能樹</h2>
      <div class="rate" v-for="(item, i) in skill" :key="i">
        <p>{{ item.name }}</p>
        <div class="bar" :class="`rate-${item.rate}`"></div>
      </div>
    </div>
    <div id="experience" class="card">
      <h2>經驗</h2>
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
          },
          {
            link: 'https://linkedin.com/in/cs-aries-55677a145/',
            icon: ['fab', 'linkedin-in']
          },
          {
            link: 'https://t.me/Aries0d0f',
            icon: ['fab', 'telegram-plane']
          }
        ],
        skill: [
          {
            name: 'HTML & CSS',
            rate: 5
          },
          {
            name: 'UI／UX Design',
            rate: 5
          },
          {
            name: 'JavaScript',
            rate: 4
          },
          {
            name: 'Node.js',
            rate: 4
          },
          {
            name: 'Vue.js',
            rate: 4
          },
          {
            name: 'Linux Server Administration',
            rate: 4
          },
          {
            name: 'RESTful API',
            rate: 4
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
            title: '#UnaHack1 黑客松特別獎',
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