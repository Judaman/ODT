
const {google} = require('googleapis');

module.exports = {sendBCorderIDtoGE:
async function sendBCorderIDtoGE(auth,GEorderID,BCorderID){

var body = {

  "operationId": updatemerchantorderid +  GEorderID,
  "merchantOrderId": BCorderID
}

const updateMerchantOrderId = await google.content({
        version: 'v2.1',
        auth
      }).orders.updatemerchantorderid({
        merchantId: '1210694571',
        orderID:GEorderID,
        body:body
      });
     console.log(updateMerchantOrderId);

}
}
