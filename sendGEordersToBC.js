
module.exports = {sendGEordersToBC:
function sendGEordersToBC() {
  const createBCorderFunction = require("./createBCorder")
  const googleOrders =  require("./getGEorders").getGEorders();

if(googleOrders){

 var googleOrdersLength = googleOrders.length;

  for(var indexOfGoogleOrders = 0; indexOfGoogleOrders < googleOrdersLength;indexOfGoogleOrders++ ){

  try{

  var BCorder = createBCorderFunction.createBigCommerceOrder(googleOrders[indexOfGoogleOrders]);
//send order...

  }
  catch(err){console.log(err)}
  }
 }
}
}
