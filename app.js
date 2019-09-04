// Copyright 2018, Google LLC.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';
var main = require("./main")
var getBCproducts = require("./updateGEinv/getBCproducts")


const express = require('express');

const app = express();

// [START hello_world]
// Say hello!



app.get('/sendGEordersToBC', (req, res) => {

   main.sendGEordersToBC();
  res.status(200).send('sendGEordersToBC');


});

app.get('/sendBCfeed', (req, res) => {
    const updateGEinv = main.sendBCfeed();

  res.status(200).send('sendBCfeed');
 // console.log(met);

});

app.get('/updateGEinv', (req, res) => {
    const updateGEinv = main.updateGEinv();

  res.status(200).send('updateGEinv');
 // console.log(met);

});


app.get('/UpdateGEshipments', (req, res) => {
    const UpdateGEshipments = main.UpdateGEshipments();

  res.status(200).send('UpdateGEshipments');
 // console.log(met);

});

// [END hello_world]


if (module === require.main) {
  // [START server]
  // Start the server
  const server = app.listen(process.env.PORT || 8080, () => {
    const port = server.address().port;
    console.log(`App listening on port ${port}`);
  });
  // [END server]
}

module.exports = app;
