// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed ,callback) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    // ISSUE: Returning from inner callback function, not our main function.
    console.log('Callback: I have the data!')
    if (!error) callback (data); 
    if (error) callback (undefined)
  });
}
const func = function(data) {
    console.log(data)
}
breedDetailsFromFile('Bombay',func)
module.exports = breedDetailsFromFile;