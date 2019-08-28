
module.exports = {sendGEordersToBC:
async function sendGEordersToBC(auth) {
  const createBCorderFunction = require("./createBCorder")
  const googleOrders = await  require("./getGEorders").getGEorders(auth);

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
