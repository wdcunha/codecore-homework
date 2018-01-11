var myArray = ["Apples", "Bananas", "Pears", "Pinapple", "Avocado",
  "Orange", "Lemon", "Lion", "Plane", "Trick",
  "Paralelepipedo"];


function chooseWord () {
    // Write code here
    var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
    return randomItem;
}

let word = chooseWord(); // pick up an the mystery word from the array
let count = 0; // stores number that is select a letter
let nl = word.length; //number of letter
let wrongs = 0; // number of negatives clicks

for(let i = 0; i < nl; i++){ //creates places as many as the word's length
  $('.wrapper2').append(
    $(`
      <div class="space"></div>
    `)
  )
}
console.log(`Word: ${word}`); //############ remove at the end ##############

function checkLetter(letter,local) {
  for(var i = 0; i < word.length; i++){
    if(word[i].toUpperCase() == letter){
      $(".space").eq(i).html(letter.toLowerCase()); //insert the letter(s) in the right place
      $(local).addClass('green'); //changes the key color for green when got the right letter
      console.log(local);//############ remove at the end ##############
      console.log(`letter: ${letter}`);//############ remove at the end ##############
    } else {
      wrongs++;
      console.log(wrongs);
      $('.gallow_img').attr('src', `image/gallows${wrongs}.jpg`);
    }
  }
}

$('.letter').on('click', e => {
  if(count < nl){
    $(e.currentTarget).addClass('selected');
  	console.log(count);//############ remove at the end ##############
    checkLetter(e.currentTarget.innerHTML, e.currentTarget);
  	count++;
  } else if (count = nl) {

  } else {
    console.log(word);//############ remove at the end ##############
    alert("it's over!");
  }
});
