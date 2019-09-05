const {
  google
} = require('googleapis');

module.exports = {
  getGEorder: async function getGEorder(auth, ) {

    var orderId = "G-SHP-7416-86-9014";

    const order = await google.content({
      version: 'v2.1',
      auth
    }).orders.get({
      merchantId: '121694571',
      orderId: orderId

    });

    var lineItems = order.data.lineItems;
    for (var indexOfItems = 0; indexOfItems < lineItems.length; indexOfItems++) {
      if(lineItems[indexOfItems].product.offerId == orderId)
      console.log(lineItems[indexOfItems].product.offerId);

    }
    //    console.log(JSON.parse(JSON.stringify(orders.data.resources)));
    return order.data.resources;

  }
}


//get shipped orders
//loop through orders
//get order shipment info
//loop trough shipments
//get line item key for shipment
//update shipments on GE
