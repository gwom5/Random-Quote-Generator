import faker  from 'faker';
const txtgen = require('txtgen');


export const getQuotes = numberOfQuotes=> {

   let quotes = generateQuotes(numberOfQuotes);
    return quotes;
};


function generateQuote(){
    return{
        author: faker.name.findName(),
        quote: txtgen.sentence()
    }
}


function generateQuotes(numberOfQuotes) {
    return Array.from({ length: numberOfQuotes}, () => generateQuote());
}

