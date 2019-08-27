const axios = require('axios');

var headers = {
'x-auth-client': 'mlthv0ewhpfkeu5ipzm8ylgolcj61pe',
'x-auth-token': 'g8tqdc09vom2uwxnqxjyp8q25g68ff3',
};

module.exports = {

getBCproducts:
//getBCproducts();
async function getBCproducts() {
//  const axios = require('axios');
var allProducts = []

var totalNumPages = 2
for (var pageNumber = 1; pageNumber <= totalNumPages; pageNumber++) {
const config = {
  'method': 'get',
  'url': 'https://api.bigcommerce.com/stores/jhrbcxjfkv/v3/catalog/products?include=images,primary_image&page=' + pageNumber + '&limit=250',
  'accept': 'application/json',
  'content-type': 'application/json',
  'headers': headers
}
let res = await axios(config)
var totalNumPages = res.data.meta.pagination.total_pages
allProducts = allProducts.concat(res.data.data)
}
console.log(allProducts.length)
//console.log(allProducts);
return allProducts;

},


getBCbrands:async function getBCbrands() {
var allBrands = [];
const config = {
  'method': 'get',
  'url': 'https://api.bigcommerce.com/stores/jhrbcxjfkv/v3/catalog/brands?limit=250',
  'accept': 'application/json',
  'content-type': 'application/json',
  'headers': headers
}
let res = await axios(config)
allBrands = allBrands.concat(res.data.data);
//console.log(res.data.data);
return allBrands;
}
}
