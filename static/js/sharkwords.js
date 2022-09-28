const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

const WORDS = [
  'strawberry',
  'orange',
  'apple',
  'banana',
  'pineapple',
  'kiwi',
  'peach',
  'pecan',
  'eggplant',
  'durian',
  'peanut',
  'chocolate',
];

const numWrong = 0;

// Loop over the chars in `word` and create divs.
// The divs should be appended to the section with id="word-container".
const createDivsForChars = (word) => {
  const guessingWord = String(word);
  const divLetter = document.querySelector("#word-container");
  for (const char of guessingWord) {
    divLetter.insertAdjacentHTML("beforeend", `<div class="letter-box ${char}"></div>`);
  }
};

const generateLetterButtons = () => {
  
  const letterBtn = document.querySelector("#letter-buttons");

  for (const char of ALPHABET) { 
    letterBtn.insertAdjacentHTML("beforeend", `<button>${char}</button>`);
  }
};

const disableLetterButton = (buttonEl) => {
  buttonEl.setAttribute('disabled', 'true');
};


const isLetterInWord = letter => document.querySelectorAll(`.${letter}`).length >=1;


// This is like if __name__ == '__main__' in Python
// It will be called when the file is run (because
// we call the function on line 66)
(function startGame() {
  // For now, we'll hardcode the word that the user has to guess
  // You can change this to choose a random word from WORDS once you
  // finish this lab but we hard code it so we know what the word is
  // and can tell if things look correct for this word
  // const word = 'hello';
  const randomNum = parseInt(Math.floor(Math.random() * WORDS.length) + 1)
  const word = WORDS[randomNum]

  createDivsForChars(word)

  generateLetterButtons()

  // in the next lab, you will be adding functionality to handle when
  // someone clicks on a letter
})();
