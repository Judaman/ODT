const {
  google
} = require('googleapis');


module.exports = {
  updateGEshipments: async function updateGEshipments(auth) {

    const shippedOrders = await require('./getShippedOrders').getShippedOrders();

    for (var indexOforders = 0; indexOforders < shippedOrders.length; indexOforders++) {
      var order = shippedOrders[indexOforders];

      var shipments = await require('./getOrderShipmentInfo').getOrderShipmentInfo(order.id);

      for (var indexOfshipments = 0; indexOfshipments < shipments.length; indexOfshipments++) {
        var shipment = shipments[indexOfshipments];
        var trackingNumber = shipment.tracking_number;
        var trackingCarrier = shipment.tracking_carrier;
        var shipmentItems = shipment.items;

        for (var indexOfshipmentItems = 0; indexOfshipmentItems < shipmentItems.length; indexOfshipmentItems++) {
          var shipmentItem = shipmentItems[indexOfshipmentItems];

          var lineItemKey = await require('/getLineItemKey').getLineItemKey(auth, order.external_id, shipmentItem.product_id);

          var updateShipment = await require('./updateGEshipment').updateGEshipment(auth, order.external_id, lineItemKey, trackingNumber, trackingCarrier);

        }
      }
    }
  }
}

//get shipped orders
//loop through orders
//get order shipment info
//loop trough shipments
//loopthrough shipment Items
//get line item key for item
//update shipments on GE
