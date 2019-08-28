
const {google} = require('googleapis');

module.exports = {getGEorders:
async function getGEorders(auth){

const orders = await google.content({
        version: 'v2.1',
        auth
      }).orders.list({
        merchantId: '121694571',
        maxResults:1
      });
  //    console.log(JSON.parse(JSON.stringify(orders.data.resources)));
      return orders.data.resources;
}
}
