
//  getOrderShipmentInfo:
//getBCproducts();

module.exports = {
  getOrderShipmentInfo: async function getOrderShipmentInfo(orderId) {
const axios = require("axios");
    var headers = {
      'x-auth-client': 'pbn9oxi58jm2oy7wb8lmx0aibv2tsuh',
      'x-auth-token': 's6z92qj7abpv6y9v31np5y0pjmaeq45',
    };

    const config = {
      'method': 'get',
      'url': 'https://api.bigcommerce.com/stores/sf8pvxqzs0/v2/orders/' + orderId + '/shipments',
      'accept': 'application/json',
      'content-type': 'application/json',
      'headers': headers
    }
    let res = await axios(config)

return res.data;
    //var carrier =
    //  console.log(res.data);
  }
}
