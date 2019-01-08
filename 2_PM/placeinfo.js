/* TODO: Write a program which takes in a place name via the command line and 
/ returns the following string, formatted with the appropriate values:

'INPUTTED_PLACE is located at coordinates RETURNED_COORDINATES, at the address RETURNED_ADDRESS.' */

const googleMapsClient = require('./google_api')

const clivariable = process.argv[2]

// WIP 
googleMapsClient.place({placeid: String(clivariable)}).asPromise()
    .then((response) => {
        console.log(response.json.results);
    })
    .catch((err) => {
        console.log(err);
    });
