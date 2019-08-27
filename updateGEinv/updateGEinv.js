//updateGEinv()


module.exports = {updateGEinv:function (auth) {
const {google} = require('googleapis');
const BCproducts = require("./getBCproducts").getBCproducts();
  BCproducts.then(function(BCproducts) {
    // BCproducts = BCproducts.getBCproducts();
    //allproducts = JSON.stringify(allproducts)
    //console.log(BCproducts);
    var toUpdate = {};
    var entries = [];
    for (var indexBCproducts = 0; indexBCproducts < 5 /*BCproducts.length*/ ; indexBCproducts++) {

      var product = BCproducts[indexBCproducts];
      var inventory = {};
      inventory.kind = "content#inventory";
      var availability = {
        "available": "in stock",
        "disabled": "out of stock"
      }
      inventory.availability = availability[product.availability]
      inventory.sellOnGoogleQuantity = product.inventory_level

      var batchID = 100 + indexBCproducts;

      entries.push({
        "batchId": batchID,
        "merchantId": 138952559,
        "storeCode": "online",
        "productId": "online:en:US:" + product.id,
        "inventory": inventory
      })

    }
    toUpdate.entries = entries;
   // toUpdate = JSON.stringify(toUpdate)
   google.content({version:"v2",auth }).inventory.custombatch({

      requestBody:toUpdate,
     // function(){console.log(chunk)}


  }).then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
              },
              function(err) { console.error("Execute error", err); });

  });
}}
