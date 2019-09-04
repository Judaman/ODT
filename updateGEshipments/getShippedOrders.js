//module.exports = {
const axios = require("axios");

getShippedOrders()
//  getShippedOrders:
    async function getShippedOrders() {

      var headers = {
        'x-auth-client': 'pbn9oxi58jm2oy7wb8lmx0aibv2tsuh',
        'x-auth-token': 's6z92qj7abpv6y9v31np5y0pjmaeq45',
      };

      const config = {
        'method': 'get',
        'url': 'https://api.bigcommerce.com/stores/sf8pvxqzs0/v2/orders?status_id=2',
        'accept': 'application/json',
        'content-type': 'application/json',
        'headers': headers
      }
      let res = await axios(config)

      console.log(res.data);
    //  return shippedOrders;
    }
//}
