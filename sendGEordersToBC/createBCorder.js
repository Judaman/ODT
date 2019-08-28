var ordersample = {
  "kind": "content#order",
  "id": "G-SHP-4119-89-0708",
  "merchantId": "121694571",
  "merchantOrderId": "Updated G-SHP-4119-89-0708",
  "lineItems": [
    {
      "id": "LAJOTXQ53PCZEIU",
      "quantityOrdered": 4,
      "quantityPending": 4,
      "quantityShipped": 0,
      "quantityDelivered": 0,
      "quantityReturned": 0,
      "quantityCanceled": 0,
      "quantityUndeliverable": 0,
      "price": {
        "value": "45.52",
        "currency": "USD"
      },
      "tax": {
        "value": "0.00",
        "currency": "USD"
      },
      "shippingDetails": {
        "method": {
          "methodName": "Free Shipping",
          "minDaysInTransit": 3,
          "maxDaysInTransit": 5
        },
        "shipByDate": "2019-08-31T01:00:00Z",
        "deliverByDate": "2019-09-10T01:00:00Z"
      },
      "product": {
        "id": "online:en:US:23968",
        "offerId": "23968",
        "targetCountry": "US",
        "contentLanguage": "en",
        "price": {
          "value": "11.38",
          "currency": "USD"
        },
        "title": "Yardley Bath & Shower Gel, Skin Smoothing, Sea Minerals - 16 fl oz",
        "gtin": "00041840829697",
        "brand": "",
        "mpn": "sku6100394",
        "condition": "new",
        "shownImage": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS-2tmmJPs8R1b_zELW16aEFDx0ACXNtmQFtktobNW4AuH2V4CsebyA7yVieXh8EDM8GjHNkvM&usqp=CAk"
      }
    }
  ],
  "status": "pendingShipment",
  "paymentStatus": "paymentSecured",
  "acknowledged": true,
  "placedDate": "2019-08-27T15:28:05Z",
  "deliveryDetails": {
    "address": {
      "recipientName": "Leanne Wong",
      "streetAddress": [
        "23025 CABRILLO AVE"
      ],
      "locality": "TORRANCE",
      "region": "CA",
      "country": "US",
      "postalCode": "90501-5509",
      "fullAddress": [
        "Leanne Wong",
        "23025 CABRILLO AVE",
        "TORRANCE, CA 90501-5509",
        "United States"
      ]
    },
    "phoneNumber": "+1 415-412-9212"
  },
  "customer": {
    "fullName": "Leanne Wong",
    "marketingRightsInfo": {
      "explicitMarketingPreference": "denied",
      "lastUpdatedTimestamp": "2019-08-27T15:28:05Z"
    },
    "invoiceReceivingEmail": "invoice.oz6x0lzk@express.google.com"
  },
  "billingAddress": {
    "recipientName": "Doug Christensen",
    "locality": "UNINCORPORATED",
    "region": "MD",
    "country": "US",
    "postalCode": "20724",
    "fullAddress": [
      "Doug Christensen",
      "UNINCORPORATED, MD 20724",
      "United States"
    ]
  },
  "shippingCost": {
    "value": "0.00",
    "currency": "USD"
  },
  "shippingCostTax": {
    "value": "0.00",
    "currency": "USD"
  },
  "netPriceAmount": {
    "value": "45.52",
    "currency": "USD"
  },
  "netTaxAmount": {
    "value": "0.00",
    "currency": "USD"
  },
  "taxCollector": "merchant"
}



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
    "first_name": GO.,
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
