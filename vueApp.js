const url = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,BNB,ETH,SOL,ADA,USDT&tsyms=USD,EUR,BYN";
const vm = new Vue({
        el: '#app',
        data: {
          results: []
        },
        mounted() {
          axios.get(url).then(response => {
            this.results = response.data
          })
        }
      });