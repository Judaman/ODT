//module.exports = {
const axios = require("axios");
//  getOrderShipmentInfo:
  //getBCproducts();

 getOrderShipmentInfo(630);

  async function getOrderShipmentInfo(orderId) {

    var headers = {
      'x-auth-client': 'pbn9oxi58jm2oy7wb8lmx0aibv2tsuh',
      'x-auth-token': 's6z92qj7abpv6y9v31np5y0pjmaeq45',
    };

    const config = {
      'method': 'get',
      'url': 'https://api.bigcommerce.com/stores/sf8pvxqzs0/v2/orders/'+orderId+'/shipments',
      'accept': 'application/json',
      'content-type': 'application/json',
      'headers': headers
    }
    let res = await axios(config)

for (var indexOfItems = 0; indexOfItems < res.data.length; indexOfItems++) {
var item = res.data[indexOfItems];
  console.log(item);

}


//var carrier =
  //  console.log(res.data);
    }
  //  }
