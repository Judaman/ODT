const {
  google
} = require('googleapis');

module.exports = {
  getLineItemKey: async function getLineItemKey(auth, orderId, productId) {
    //  var orderId = "G-SHP-7416-86-9014";
    const order = await google.content({
      version: 'v2.1',
      auth
    }).orders.get({
      merchantId: '121694571',
      orderId: orderId
    });
    var lineItems = order.data.lineItems;
    for (var indexOfItems = 0; indexOfItems < lineItems.length; indexOfItems++) {
      if (lineItems[indexOfItems].product.offerId == productId)
        //    console.log(lineItems[indexOfItems].product.offerId);
        return lineItems[indexOfItems].id;
    }
  }
}
