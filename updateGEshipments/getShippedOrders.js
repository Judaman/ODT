module.exports = {

  getShippedOrders:
  //getBCproducts();
  async function getShippedOrders() {
    getBCbrands:async function getShippedOrders() {

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
  }
