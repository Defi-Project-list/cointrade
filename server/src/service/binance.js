import axios from 'axios';
import binance from 'node-binance-api';
import config from '../../config/binance.js';

class Binance {

  constructor({ apiKey = "", apiSecret = ""}) {
    this.URL = config.url;
    this.API_KEY = apiKey;
    this.API_SECRET = apiSecret;
  }

  async createBuyOrder (coin, quantity) {
    const params = {
      symbol: coin + 'USTD',
      side: 'BUY',
      type: 'MARKET',
      quoteOrderQty: quantity,
      newClientOrderId: 'test',
      timestamp: new Date().getTime(),
    }
    console.log(params);
    params.signature = crypto.createHmac(this.API_SECRET).update()
    await axios.post(this.url, { params })
  }

  async balanceAssets (users, newPortfolio, oldPortfolio) {

    users.forEach(user => {

    })

  }

}

export default Binance
