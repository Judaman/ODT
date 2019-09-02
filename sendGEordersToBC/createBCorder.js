/*var googleOrder = {
  "kind": "content#order",
  "id": "G-SHP-4119-89-0708",
  "merchantId": "121694571",
  "merchantOrderId": "Updated G-SHP-4119-89-0708",
  "lineItems": [{
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
  }],
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
*/

const {
  google
} = require('googleapis');

const axios = require('axios');

const sendBCorderIDtoGEfunction = require("./sendBCorderIDtoGE");

module.exports = {
  createBigCommerceOrder: async function createBigCommerceOrder(auth, googleOrder) {

    var products = [];
    var items = googleOrder.lineItems;

    for (var indexOfItems = 0; indexOfItems < items.length; indexOfItems++) {
      item = {
        "product_id": items[indexOfItems].product.offerId,
        //  "price_inc_tax":Number(items[indexOfItems].product.price.value)  ,
        "price_ex_tax": Number(items[indexOfItems].product.price.value),
        "price_inc_tax": Number(items[indexOfItems].product.price.value) + Number(Number(items[indexOfItems].tax.value) / Number(items[indexOfItems].quantityOrdered)),


        "quantity": Number(items[indexOfItems].quantityOrdered),
      }
      products.push(item);
    }

    var payload = {
      "status_id": 11,
      "customer_id": 0,
      "billing_address": {
        "first_name": googleOrder.billingAddress.recipientName,

        //  "last_name": "Gruberger",
        //      "street_1": googleOrder.billingAddress.fullAddress[1] + " " + googleOrder.billingAddress.fullAddress[2],
        "city": googleOrder.billingAddress.locality,
        "state": googleOrder.billingAddress.region,
        "zip": googleOrder.billingAddress.postalCode,
        //  "country": googleOrder.billingAddress.country,
        "country_iso2": googleOrder.billingAddress.country,
        //     "phone":,
        //    "email": "yehudagruberger@gmail.com"
      },
      "shipping_addresses": [{
        "first_name": googleOrder.customer.fullName,
        //      "last_name": "Gruberger",
        //    "company": "Acme Pty Ltd",
        "street_1": googleOrder.deliveryDetails.address.fullAddress[1],
        "city": googleOrder.deliveryDetails.address.locality,
        "state": googleOrder.deliveryDetails.address.region,
        "zip": googleOrder.deliveryDetails.address.postalCode,
        //  "country": googleOrder.deliveryDetails.country,
        "country_iso2": googleOrder.deliveryDetails.address.country,
        "phone": googleOrder.deliveryDetails.phoneNumber,
        //  "email": "yehudagruberger@gmail.com"
      }],

      "products": products,
      "external_source": "Google Express",
      "external_id": googleOrder.id,
      "date_created": new Date().toUTCString(),
      "shipping_cost_ex_tax": Number(googleOrder.shippingCost.value),
      "shipping_cost_inc_tax": Number(googleOrder.shippingCost.value) + Number(googleOrder.shippingCostTax.value),
    }

    payload = JSON.stringify(payload);


    var headers = {
      'Accept': 'application/json',
      'x-auth-client': 'pbn9oxi58jm2oy7wb8lmx0aibv2tsuh',
      'x-auth-token': 's6z92qj7abpv6y9v31np5y0pjmaeq45',
      'Content-type': 'application/json',

    };

    const config = {

      'headers': headers,
      'method': 'POST',
      'body': payload,
      'url': "https://api.bigcommerce.com/stores/sf8pvxqzs0/v2/orders"
    }
    const request = require('request')

    request.post(config, (error, res, body) => {
      if (error) {
        console.error(error)
        return
      }
      console.log(`statusCode: ${res.statusCode}`)
      console.log(res)

      //sendBCorderIDtoGEfunction.sendBCorderIDtoGE(auth,GEorderID,BCorderID)
    })

  }

}
