

const {google} = require('googleapis');

async function getGEorders(auth){

const googleOrder = await google.content({
        version: 'v2.1',
        auth
      }).orders.list({
        merchantId: '121694571'
      });

      console.log(orders.data.resources);
      return orders.data.resources;



}


 var GO = googleOrder.data.resources[0];

 const axios = require('axios');

module.exports = {createBigCommerceOrder:function createBigCommerceOrder(googleOrder) {

var payload = {
  "status_id":11,
//  "customer_id": 0,
  "billing_address": {
    "first_name": googleOrder,
    "last_name": "Gruberger",
    "street_1": "1225 Ocean Parkway",
    "city": "Brooklyn",
    "state": "NY",
    "zip": "11230",
    "country": "United States",
    "country_iso2": "US",
     "phone":"7185107789",
    "email": "yehudagruberger@gmail.com"
  },
  "shipping_addresses": [
    {
      "first_name": "Yehuda",
      "last_name": "Gruberger",
  //    "company": "Acme Pty Ltd",
      "street_1": "1225 Ocean Parkway",
      "city": "Brooklyn",
      "state": "NY",
      "zip": "11230",
      "country": "United States",
      "country_iso2": "US",
      "phone":"7185107789",
      "email": "yehudagruberger@gmail.com"
    }
  ],
  "products": [
    {

     "product_id": 769,
    "price_inc_tax":0,
      "price_ex_tax":0,
      "quantity":0,

    }
  ],

 "external_source":"Google Express",
 "external_id":"googleorderid",
  "date_created":"Tue, 20 Nov 2012 00:00:00 +0000",
}

 payload = JSON.stringify(payload);


  var headers = {
    'x-auth-client': 'mlthv0ewhpfkeu5ipzm8ylgolcj61pe',
    'x-auth-token': 'g8tqdc09vom2uwxnqxjyp8q25g68ff3',
    'content-type':'application/json',
    'accept': 'application/json',
  };
  var options = {
     'headers': headers,
    'method':'POST',
    'payload':payload
  };

   const config = {
    'headers': headers,
      'method': 'POST',
      'url': 'https://api.bigcommerce.com/stores/{storehash}/v2/orders',
      'accept': 'application/json',
      'content-type': 'application/json',
     'payload':payload
    }
let res = await axios(config)
console.log(res);

}
}
