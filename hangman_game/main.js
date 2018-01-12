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

for(let i = 0; i < wl; i++){ //creates places as many as the word's length
  $('.wrapper2').append(
    $(`
      <div class="space"></div>
    `)
  )
}
console.log(`Word: ${word}`); //############ remove at the end ##############

$('.message p').append(`
  <p class="parag">The Game just started!</p>
`)

setTimeout(function(){ $('p.parag').remove(); }, 5000);
// setTimeout(function(){ $('p.parag').fadeOut('slow'); }, 1000);

function checkLetter(letter,local) {
  let hits = 0; //stores if there's hits
  for(var i = 0; i < word.length; i++){
    if(word[i].toUpperCase() == letter){
      $(".space").eq(i).html(letter.toLowerCase()); //insert the letter(s) in the rightLetter place
      $(local).addClass('green'); //changes the key color for green when got the rightLetter letter
      console.log(`letter: ${letter}`);//############ remove at the end ##############
      rightLetter++;
      console.log(`rightLetter: ${rightLetter}`);//############ remove at the end ##############
      hits++;
      console.log(`hits: ${hits}`);//############ remove at the end ##############
    }
  }

  if(hits == 0) {
    wrongs++;
    console.log(`wrongs: ${wrongs}`);
    $('.gallow_img').attr('src', `image/gallows${wrongs}.jpg`);
  }
}

$('.letter').on('click', e => {
  if(wrongs < 6){
    $(e.currentTarget).addClass('selected');
  	console.log(`count: ${count}`);//############ remove at the end ##############
    checkLetter(e.currentTarget.innerHTML, e.currentTarget);
  	count++;
    if (rightLetter === wl) {
      vicSound().play();
      document.location.reload();
      return alert("Congratulations! You Win!");
    }
  } else {
    document.location.reload();
    return alert("Better luck next time...");
  }
});








//
