const guessLetters = document.querySelector(".guessed-letters");
const guestButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress= document.querySelector(".word-in-progress");
const remainingGuesses= document.querySelector(".remaining");
const remainingGuessesSpan= document.querySelector(".remaining span");
const messages = document.querySelector(".messages");
const hiddenButton = document.querySelector(".play-again");

const word = "magnolia";

const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
      console.log(letter);
      placeholderLetters.push("●");
    }
    wordInProgress.innerText = placeholderLetters.join("");
  };

  placeholder(word);

  guestButton.addEventListener("button", function(e){
      e.preventDefault();
      const guess = letterInput.value;
      console.log(guess);
      letterInput.value = "";
    });