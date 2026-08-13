const request = require('request')

const dictionary = (word, callback) => {
    const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + encodeURIComponent(word)

    request ({ url, json: true }, (error, {body}) => {
        if (error) {
            callback ('Unable to connect to dictionary API!', undefined)
        } else if (body.error) {
                callback ('Unable to define word.  Try another search.', undefined)
            } else
                callback (undefined, {
                    definition: body.results[0].meanings.definitions.definition[0],
                    synonym: body.results[0].meanings.synonyms[0]
                })
        })
    }

module.exports = dictionary