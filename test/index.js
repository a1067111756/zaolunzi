import Vue from 'vue'
import Icon from '../src/icon/index.vue'
import Button from '../src/button/index.vue'
import ButtonGroup from '../src/button-group/index.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

Vue.component('xp-button-group', ButtonGroup)
Vue.component('xp-button', Button)
Vue.component('xp-icon', Icon)

new Vue({
  el: '#app'
})
