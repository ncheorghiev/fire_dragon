// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app1',
  data: {
    title: 'The first VueJS instance',
    showParagraph: false
  },
  methods: {
    show: function () {
      this.showParagraph = true
      this.updateTitle('The first VueJS instance. (Updated)')
    },
    updateTitle: function (title) {
      this.title = title
    }
  },
  computed: {
    lowcaseTitle: function () {
      return this.title.toLowerCase()
    }
  },
  watch: {
    title: function (value) {
      alert('First title changed, new value : ' + value)
    }
  }
})

new Vue({
  el: '#app2',
  data: {
    title: 'The second VueJS instance',
    showInfo: false
  },
  methods: {
    show: function () {
      this.showInfo = true
      this.updateTitle('The second VueJS instance. (Updated)')
    },
    updateTitle: function (title) {
      this.title = title
    }
  },
  computed: {
    lowcaseTitle: function () {
      return this.title.toLowerCase()
    }
  },
  watch: {
    title: function (value) {
      alert('Second title changed, new value : ' + value)
    }
  }
})