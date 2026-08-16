const axios = require('axios')

const translations = () => {
    const url = 'https://api-free.deepl.com/v2/translate'

    axios({ url, json: true}, (error, {body}) => {
        if (error) {
            callback ("Unable to connect to translation service!", undefined)
        } else if (body.error) {
            callback ("unable to find location!", undefined)
        } else
            callback (undefined, {
                translatedWord: body.results.translations.text
            })
        })
    }

module.exports = translations