
const {google} = require('googleapis');

module.exports = {getGEorders:
async function getGEorders(auth){

const orders = await google.content({
        version: 'v2.1',
        auth
      }).orders.list({
        merchantId: '121694571',
    //    statuses:['inProgress'],
        maxResults:250
      });
  //    console.log(JSON.parse(JSON.stringify(orders.data.resources)));
      return orders.data.resources;
}
}
