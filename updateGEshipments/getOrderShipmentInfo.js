module.exports = {

  getOrderShipmentInfo:
  //getBCproducts();
  async function getOrderShipmentInfo(orderId) {
    getBCbrands:async function getOrderShipmentInfo(orderId) {

    const config = {
      'method': 'get',
      'url': 'https://api.bigcommerce.com/stores/jhrbcxjfkv/v2/orders',
      'accept': 'application/json',
      'content-type': 'application/json',
      'headers': headers
    }
    let res = await axios(config)

    //console.log(res.data.data);
    return shippedOrders;
    }
    }
