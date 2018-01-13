var myArray = ["Apples", "Bananas", "Pears", "Pinapple", "Avocado",
  "Orange", "Lemon", "Lion", "Plane", "Trick",
  "Paralelepipedo"];


function chooseWord () {
    // Write code here
    var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
    return randomItem;
}

const vicSound = () => new Audio(`sounds/fanfare3.wav`)
let word = chooseWord(); // pick up an the mystery word from the array
let count = 0; // stores number that is select a letter
let wl = word.length; //word length
let wrongs = 0; // number of misses
let rightLetter = 0; // number of hits
let lettersTyped = []; //store letter typed to avoid counting too much

for(let i = 0; i < wl; i++){ //creates places as many as the word's length
  $('.wrapper2').append(
    $(`
      <div class="space"></div>
    `)
  )
}

$('.message p').append(`
  <p class="parag">The Game has just started!</p>
`)

setTimeout(function(){ $('p.parag').remove(); }, 5000);
// setTimeout(function(){ $('p.parag').fadeOut('slow'); }, 1000);

function checkLetter(letter) {
  letter = letter.toLowerCase();
  let hits = 0; //stores if there's hits from the letter chosen
  $(`#${letter}`).addClass('selected');
  if (!lettersTyped.includes(letter)) {
    for(var i = 0; i < word.length; i++){
      if(word[i].toLowerCase() === letter){
        $(".space").eq(i).html(letter.toLowerCase()); //insert the letter(s) in the rightLetter place
        $(`#${letter.toLowerCase()}`).addClass('green'); //changes the key color for green when got the rightLetter letter
        hits++;
        rightLetter++;
      }
    }
  }

  if(hits == 0 && !lettersTyped.includes(letter)) {
    console.log(lettersTyped);
    wrongs++;
    console.log(`wrongs: ${wrongs}`);
    $('.gallow_img').attr('src', `image/gallows${wrongs}.jpg`);
  }
  lettersTyped.push(letter);
}

function checkWin() {

  if (rightLetter === wl) {
    console.log(`rightLetter: ${rightLetter}`);
    vicSound().play();
    document.location.reload();
    return alert("Congratulations! You Win!");
  }
}

function lose() {
  document.location.reload();
  return alert("Better luck next time...");
}

$('.letter').on('click', e => {
  if(wrongs < 6){
    checkLetter(e.currentTarget.innerHTML);
  	count++;
    checkWin();
  } else {
    lose();
  }
});

document.addEventListener('keydown', e => {
  if(wrongs < 6){
    if (e.keyCode >= 65 && e.keyCode <= 90) {
      console.log(`e.key: ${e.key}`);
      checkLetter(e.key);
    }
  	count++;
    checkWin();
  } else {
    lose();
  }
});







//
