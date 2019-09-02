module.exports = {
  sendGEordersToBC: async function sendGEordersToBC(auth) {
    const createBCorderFunction = require("./createBCorder")
    const googleOrders = await require("./getGEorders").getGEorders(auth);
    const updateBCorder = await require("./updateBCorder").updateBCorder();

    if (googleOrders) {

      var googleOrdersLength = googleOrders.length;

      for (var indexOfGoogleOrders = 0; indexOfGoogleOrders < googleOrdersLength; indexOfGoogleOrders++) {
        if (googleOrders[indexOfGoogleOrders].merchantId) {
          try {

            var BCorder = createBCorderFunction.createBigCommerceOrder(auth, googleOrders[indexOfGoogleOrders]);

          } catch (err) {
            console.log(err)
          }
        } else {
          updateBCorder(googleOrders[indexOfGoogleOrders]);
        }
      }
    }
  }
}
