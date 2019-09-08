const {
  google
} = require('googleapis');

module.exports = {
  updateGEshipment(): async function updateGEshipment(auth, orderId, lineItemKey, trackingNumber, trackingCarrier) {
    //  var orderId = "G-SHP-7416-86-9014";
    var body = {
      "operationId": "ship-" + lineItemKey,
      "lineItems": [lineItemKey],
      "shipmentInfos": [{
        "shipmentId": "ship-" + lineItemKey,
        "carrier": trackingCarrier,
        "trackingId": trackingNumber
      }]
    }
    const order = await google.content({
      version: 'v2.1',
      auth
    }).orders.shiplineitems({
      merchantId: '121694571',
      orderId: orderId,
      resource: body
    });
  }
}
