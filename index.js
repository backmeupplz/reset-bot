var app = new Vue({
  el: '#app',
  data: {
    token: '',
    done: null,
    loading: false,
  },
  methods: {
    reset: function() {
      this.done = null;
      this.loading = true;
      axios.get('https://api.telegram.org/bot' + this.token + '/getUpdates?offset=-1')
        .then((response) => {
          this.loading = false;
          this.done = response.data;
        })
        .catch((err) => {
          this.loading = false;
          this.done = err.response.data;
        });
    }
  }
})