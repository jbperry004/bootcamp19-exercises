// TODO - create client object for Google API connection which can be exported

const googleMapsClient = require('@google/maps').createClient({
    key: 'process.env.ENV_VARIABLE',
    Promise: Promise
  });

module.exports = googleMapsClient;