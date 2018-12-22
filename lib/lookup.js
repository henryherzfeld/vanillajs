require('dotenv').config();
const axios = require('axios');

var instance = axios.create({
  baseURL: process.env.API_URL,
  timeout: API_TIMEOUT || 5000,
});

module.exports = {
  getLegislator: function(){
    return instance.get('/legislator')
  }
};
