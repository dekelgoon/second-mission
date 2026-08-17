 const dictionary = require('./utils/dictionary')
 const translator = require('./utils/translator')

 const word = process.argv[2]
 if (!word) {
    console.log('Please provide a valid word.')
 } else {
    dictionary(word, (error, {definition, synonym} = {}) => {
        if (error) {
            return console.log(error)
        }
        translator(word, (error, translation) => {
            if (error) {
                return console.log(error)
            }

            console.log(definition)
            console.log(synonym)
            console.log(translation)
    })
 })
}
