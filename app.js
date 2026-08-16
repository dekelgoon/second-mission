 const dictionary = require('./utils/dictionary')
 const translation = require('./utils/translation')

 const word = process.argv[2]
 if (!word) {
    console.log('Please provide a valid word.')
 } else {
    dictionary(word, (error, {definition, synonym} = {}) => {
        if (error) {
            return console.log(error)
        }
        translation(definition, synonyms, (error, translationData) => {
            if (error) {
                return console.log(error)
            }

            console.log(definition)
            console.log(synonym)
            console.log(translationData)
    })
 })
}
