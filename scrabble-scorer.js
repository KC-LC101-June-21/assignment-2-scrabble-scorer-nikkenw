// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
    word = input.question("Let's play some scrabble! Enter a word: ");
    //return oldScrabbleScorer(word);
   return word
};



let simpleScore = function(word){
  let score = word.length;
  return score;
  };

let vowelBonusScore = function(word){
  let vowels = 'aeiou';
  let score = 0;
  for(i=0;i<word.length;i++){
    if(vowels.indexOf(word[i].toLowerCase())>-1){
      score += 3
    } else {
      score += 1;
    }
  }
  return score;
};

let scrabbleScore = function(word, object){
  let score = 0;
  for(let i = 0; i<word.length; i++){
    score += object[word[i].toLowerCase()];
    }
    return score;
};

const scoringAlgorithms = [
  simple = {
    name: 'Simple Score' ,
    description: 'Each letter is worth one point.',
    scoringFunction: simpleScore
},
  vowel = {
    name: 'Bonus Vowels',
    description: 'Vowels are 3 pts, consonants are 1 pt.' ,
    scoringFunction: vowelBonusScore
},
  traditional = {
    name: 'Scrabble',
    description: 'The traditional scoring algorithm.',
    scoringFunction: scrabbleScore
}
];


function scorerPrompt() {
  console.log('Which scoring algorithm would you like to use?' + '\n' + '\n' +
  '0 - ' + `${scoringAlgorithms[0].name}: ${scoringAlgorithms[0].description}` + '\n' +
  '1 - ' + `${scoringAlgorithms[1].name}: ${scoringAlgorithms[1].description}` + '\n' +
  '2 - ' + `${scoringAlgorithms[2].name}: ${scoringAlgorithms[2].description}`);
  let algorithmSelection = input.question('Enter 0, 1, or 2: ');
  
  if(algorithmSelection === '0'){
    return console.log(`Score for '${word}': ${scoringAlgorithms[0].scoringFunction(word)} points.`);
  } else if(algorithmSelection === '1'){
    return console.log(`Score for '${word}': ${scoringAlgorithms[1].scoringFunction(word)}`);
  } else if(algorithmSelection === '2'){
    return console.log(`Score for '${word}': ${scoringAlgorithms[2].scoringFunction(word, newPointStructure)}`)
  }
  
};

function transform(oldPointStructure) {

for(keys in oldPointStructure){
let newObject = {};
  for(let keys in oldPointStructure){
    for(i=0;i<oldPointStructure[keys].length;i++){
    newObject[oldPointStructure[keys][i].toLowerCase()] = Number(keys);
        }
    }
    return newObject;
  }
  
};

let newPointStructure = transform(oldPointStructure); 
//console.log(newPointStructure);
function runProgram() {
   initialPrompt();
   scorerPrompt();
   
};

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
  };