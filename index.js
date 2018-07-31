var app = new Vue({
  el: '#app',
  data: {
    token: '',
    done: null,
    loading: false,
    message: '',
    chatid: null,
    doneSending: null,
    sending: false,
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
    },
    send: function() {
      this.doneSending = null;
      this.sending = true;
      axios.get('https://api.telegram.org/bot' + this.token + '/sendMessage?chat_id=' + this.chatid + '&text=' + this.message)
        .then((response) => {
          this.sending = false;
          this.doneSending = response.data;
        })
        .catch((err) => {
          this.sending = false;
          this.doneSending = err.response.data;
        });
    }
  }
})