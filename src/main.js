import Vue        from 'vue'
import App        from './App'
import router     from './router'

import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
// the library
import fontawesome from '@fortawesome/fontawesome'
// add more icon categories as you want them, even works with pro packs
import brands from '@fortawesome/fontawesome-free-brands'
import solid from '@fortawesome/fontawesome-free-solid'

// asociate it to the library, if you need to add more you can separate them by a comma
fontawesome.library.add(brands)
fontawesome.library.add(solid)
Vue.component(FontAwesomeIcon.name, FontAwesomeIcon)

Vue.config.devtools = true

const app = new Vue({
  router,
  ...App
}).$mount('#app')

export default { app }
