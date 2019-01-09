/* TODO: Write a program which takes in a place name via the command line and 
/ returns the following string, formatted with the appropriate values:

'INPUTTED_PLACE is located at coordinates RETURNED_COORDINATES, at the address RETURNED_ADDRESS.' */

const googleMapsClient = require('./google_api')


googleMapsClient.findPlace(
    // the documentation describes the inputtype and employ promises
    {input: process.argv[2], inputtype: 'textquery'}).asPromise()
    .then((response) => {
        //
        const placeid = response.json.candidates[0].place_id
        googleMapsClient.place({placeid}).asPromise()
            .then(response => {
                const{lat, long} = response.json.result.geometry.location
                console.log(`${process.argv[2]} is located at coordinates ${lat} and ${long}`)
            }).catch(err => {
                //should always have a .catch for each .then, helps with de-bugging 
                console.log(err)
            })
    // this is incomplete! 
    })



googleMapsClient.place({placeid: process.argv[2]}).asPromise()
    .then((response) => {
        console.log(response.json.results);
    })
    .catch((err) => {
        console.log(err);
    });
