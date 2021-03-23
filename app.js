var app = new Vue({
  el: '#app',
  data() {
    return {
      query: '',
      favList: [
        {
          url: 'https://www.aaronlui.net',
          title: 'Aaron\'s blog'
        },
        {
          url: 'https://www.sohu.com',
          title: '搜狐'
        },
        {
          url: 'https://weibo.com',
          title: '微博'
        },
        {
          url: 'https://sspai.com',
          title: '少数派'
        },
        {
          url: 'https://www.dgtle.com',
          title: '数字尾巴'
        },
        {
          url: 'https://www.ithome.com',
          title: 'IT之家'
        }
      ]
    }
  },
  created() {
  },
  methods: {
    search() {
      window.open(`http://www.baidu.com/s?wd=${this.query}`)
    }
  }
})