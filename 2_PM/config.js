// Add Google API key here - first hardcoded, then as environment variable.

// imports the env file 
const dotenv = require('dotenv')
dontenv.config()

// gets the API key and names it from the environment file
const config = {
    apikey: process.env.API_KEY
}

module.exports = config;
