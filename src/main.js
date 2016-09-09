// main.js
import Vue from 'vue'
// require a *.vue component
import Resume from './Resume.vue'

// mount a root Vue instance
new Vue({
  el: 'body',
  components: {
    // include the required component
    // in the options
    resume: Resume
  }
})