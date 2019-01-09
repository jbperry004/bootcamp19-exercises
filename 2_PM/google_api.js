// Create client object for Google API connection which can be exported

//Include the API key information from config 
const config = require ('./config')

const googleMapsClient = require('@google/maps').createClient({
    key: config.apikey,
    Promise: Promise
  });

module.exports = googleMapsClient;