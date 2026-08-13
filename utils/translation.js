const request = require ('request')
const forecast = require('../../weather-app/utils/forecast')

const translation = () => {
    const url = '' + word

    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback ("Unable to connect to translation service!", undefined)
        } else if (body.error) {
            callback ("unable to find location!", undefined)
        } else {
            callback (undefined, //.something)
        }
    })
}

module.exports = translations