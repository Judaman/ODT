module.exports = {
  sendFeed: function(auth) {
    const {
      google
    } = require('googleapis');
    const BCproducts = require("./getBCproducts").getBCproducts();
    const BCbrands = require("./getBCproducts").getBCbrands();




    BCproducts.then(async function(BCproducts) {
      //  var allGoogleProducts = ShoppingContent.Products.
      //BCproducts = JSON.stringify(BCproducts)
      var failedItems = 0;

      var toInsert = {};
      var entriesArr = [];

      for (var index = 0; index < BCproducts.length; index++) {
        var NBOproduct = BCproducts[index];

        if (NBOproduct.inventory_level > 0) {
          //Logger.log(NBOproduct.id);

          try {

            //Logger.log(NBOproduct);
            var product = {};
            product.price = {};
            product.shippingWeight = {};
            //product.kind = "content#product";
            product.offerId = NBOproduct.id;
            product.title = NBOproduct.name;
            product.description = NBOproduct.description;
            var link = NBOproduct.custom_url.url;
            product.link = "https://ondutytac.com" + link;
            product.mobileLink = "https://ondutytac.com" + link;
            try{
            product.imageLink = NBOproduct.primary_image.url_standard;}
            catch(err){console.log(err)}
            var productImages = [];
            for (var indexOfImages = 0; indexOfImages < NBOproduct.images.length; indexOfImages++) {
              productImages.push(NBOproduct.images[indexOfImages].url_standard);
            };
            product.additionalImageLinks = productImages;
            product.contentLanguage = "en";
            product.targetCountry = "US";
            product.channel = "online";
            //product.expirationDate
            //product.adult
            //product.ageGroup
            var availability = {
              "available": "in stock",
              "disabled": "out of stock"
            };
            product.availability = availability[NBOproduct.availability]
            //product.availabilityDate


            var BCbrandsCallback =  function getBrand(BCbrands){
          // console.log(BCbrands)
            for(var indexOfBrands = 0;indexOfBrands<BCbrands.length;indexOfBrands++ ){

                    if (NBOproduct.brand_id == BCbrands[indexOfBrands].id){

                            return BCbrands[indexOfBrands].name;
                     }
            }
            }
            var brand =  BCbrands.then(BCbrandsCallback);
            product.brand = await brand;
            //product.color
            product.condition = NBOproduct.condition;
            //product.gender
            //product.googleProductCategory
            product.gtin = NBOproduct.upc;

            //product.itemGroupId
            //product.material
            product.mpn = NBOproduct.sku;
            //product.pattern
            product.price.value = NBOproduct.price * 1.15;

            product.price.currency = "USD";
            product.sellOnGoogleQuantity = NBOproduct.inventory_level
            //product.shipping//
            product.shippingWeight.value = NBOproduct.weight;
            product.shippingWeight.unit = "ounces";
            //product.includedDestinations = ["Display","Shopping Actions","Shopping ads","Surfaces across Google"];
//console.log(product);


            var batchID = 100 + index;

            entriesArr.push({
              "batchId": batchID,
              "merchantId": 138952559,
              "method": "insert",
              "productId": NBOproduct.id,
              "product": product
            });
          } catch (err) {
              console.log(NBOproduct.id);
            console.log(err);
            failedItems += 1;
          };
        };
        // only send one thousand items at once

        if ((index % 100 == 0) || (index + 1 == BCproducts.length)) {
            console.log(index);
          //Logger.log(entries.length);
          toInsert.entries = entriesArr;
//entries = JSON.stringify(entries);
          //  entries = JSON.stringify(entries);
          //console.log(entries);
          // console.log(entries);

       var response =
       await google.content({
            version: "v2.1",
            auth
          }).products.custombatch({
            requestBody: toInsert,
            function(err, result) {
              if (err) {
                // Handle error
                console.log(err);
              } else {
                console.log(result);
              }
            }

          });

           //.then(function(val){console.log(val)})
          //// reset object to empty ///
          toInsert = {};
          entriesArr = [];
        }
      }
    })
  }
}
