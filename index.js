
//------------------------ Question 1---------------------------
//Write a function that ask the user for two numbers and return the product of them. But the challenge here is that you can't use the operator * (you can't make the product)
//hint: multiplication is a sequence of sums

 //@param {number} number1
 //@param {number} number2
 //@return {number} product

 //Input asking users for two numbers
 let number1 = parseInt(prompt('Write a number'));
 let number2 = parseInt(prompt('Write another number'));
 let product = 0;

 //Performing the multiplication
const multiplication = (number1, number2) => {
  while(number2 != 0) {
     product += number1;
     number2 -= 1;
  } 
  return product;
}

//Output to html
const answer1 = multiplication(number1, number2);
console.log('answer1', answer1);

const htmlTarget = document.getElementById('a-1');
htmlTarget.innerHTML = "<strong style='color:blue'>" + answer1 + "</strong>";


//------------------------ Question 2 ---------------------------
// Write a function that recieves a string as a parameter and evaluate each character of the string to determinate if the character is vowel or a consonant. you have to store each character on separates arrays, one for vowels and the other one for consonants.
// after separating the characters concatenate both arrays. ask the user if wants the vowels first or consonants first in the final array.
//hint:

//@param {string}
//@return {character} => array of characters

const vowelOrConsonant = (input, selectionVowelsOrConsonants) => {
  let vowels = [];
  let consonants = [];

  //Evaluate if the input character is vowel or consonant
  for (let i = 0; i < input.length; i++) {
    v = input[i];
    if (v === "a" || v === "e" || v === "i" || v === "o" || v === "u") {
      vowels.push(v);
    } else {
      consonants.push(v);
    }
  }
//Returns the new word according to the users input selection: vowels or consonants)
  if (selectionVowelsOrConsonants.toLowerCase() === "vowels") {
    return vowels.join("") + consonants.join("");
  } else if (selectionVowelsOrConsonants.toLowerCase() === "consonants") {
    return consonants.join("") + vowels.join("");
  }
};
let inputText = prompt( "Please enter some text, it can be a word or multiple words");

//Remove any characters that are not letters
inputText = inputText.replace(/[^A-Za-z]/g, "");


let vowelsOrConsonants = prompt("What do you prefer first vowels or consonants?");
vowelsOrConsonants = vowelsOrConsonants.toLowerCase();

//Check if we typed the appropriate selection
if (!["vowels", "consonants"].includes(vowelsOrConsonants)) {
  alert("Please input a word like 'vowels' or 'consonants'");
} else {
  //Output to html
  const answer2 = vowelOrConsonant(inputText, vowelsOrConsonants);
  const htmlTarget2 = document.getElementById("a-2");
  htmlTarget2.innerHTML = "<strong style='color:blue'>" + answer2 + "</strong>";
}



//------------------------ Question 3 ---------------------------
//Now let's create a small game. The game consists in a player (ask the user for the name).The player has 3 oportunities to guess a number. The number is a random number between 10 - 50.
//If the player don't find the number, the program must displays an alert and stop the game, but if the player finds the number, then the program must show a congratulations message (alert) with the name of the player in upperCase letters and stop the game
//You must have to store the player information in a 'player' object. The Player object contains the following Properties:
// {string} name, {number} lives, {numbers} fail_numbers[]
//where: name, saves the name of the player. Lives, represents the remaining oportunities each time the player fails. Fail_numbers, is an array of numbers that stores the fail numbers the player has used

//@return {string} win / gameOver => the string that says if the user wasted the three oportunities showing the fails numbers or the name if the player wins


//Player object with three properties
const player = {
  name: prompt("Please enter your name"),
  lives: 3,
  fail_numbers: []
}

//Displaying users name in uppercase
player.name = player.name.toUpperCase();


//Function guessTheNumber starts
const guessTheNumber = () => {
  //Generate random number between 10-50
  let number = Math.floor(Math.random() * 41) + 10; 
  console.log('The random number is: ' + number);

  //Ask the user for a number
  let hint = 'Now, guess a number between 10 and 50!';

  //Counting lives 
  while (player.lives > 0) {
      let guess = prompt(hint + ' You have ' + player.lives + ' lives left.');
      if (!guess) break;

       //Output when user guesses the number
      guess = Number(guess);
       if (guess === number) {
       return 'Congratulations ' + player.name + ' you guessed the number!'

      //Generate hints
      } else {
          hint = 'Wrong number!'
          if (guess < number) {
            hint += ' The number you entered is too small!'
          }
          if (guess > number) { 
            hint += ' The number you entered is too big!'
          }
          //Reducing lives and pushing the number
          player.lives = player.lives - 1;
          player.fail_numbers.push(number);
      }
  }
  //Output when user didn't guess the number
  return "I am sorry " + player.name + " you don't have more lives left. The number was " + number;

}

const answer3 = guessTheNumber();

const htmlTarget3 = document.getElementById('a-3');
htmlTarget3.innerHTML = "<strong style='color:blue'>" + answer3 + "</strong>";



//------------------------ Question 4 ---------------------------
// In the function below we are giving you an array of objects, each one with the same properties. Ask to the user for 3 diferentes options to sorting the array from the highest to lowest. In the case of a string, the criteria to sort must be the length of the string. The first one is sorting the array of objects based on the title property.
// The second one sorting the array of objects based on the author property, the third one based on the library property. finally, the return value has to be the string sorted of the property selected separeted with a semicolon. Remember you have to sort all of the array based on the selected property
//example: if the user select sorting by title the return value must be: "Mockingjay: The Final Book of The Hunger Games; Walter Isaacson; The Road Ahead"

let library = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    libraryID: 1254,
  },
  {
    title: "Walter Isaacson",
    author: "Steve Jobs",
    libraryID: 4264,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];

//User's input selecting category
let inputCategory = prompt( "Please input the category you want to sort by title, author, or libraryID");


sort = (objectToSort) => {
  return objectToSort.sort((a, b) => {
    return a[inputCategory] > b[inputCategory] ? 1 : -1;
  });
}; 

const answer4 = sort(library);

//create a semicolon
let semiColon = Object.keys(answer4)
  .map(function (k) {
    return "<strong style='color:blue'>" + answer4[k][inputCategory] +  "</strong>";
  })
  .join("; ");

const htmlTarget4 = document.getElementById("a-4");
 htmlTarget4.innerHTML =  "<p> " +  semiColon +  "</p>";



