var myArray = ["Apples", "Bananas", "Pears", "Pinapple", "Avocado",
  "Orange", "Lemon", "Lion", "Plane", "Trick",
  "Paralelepipedo"];


function chooseWord () {
    // Write code here
    var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
    return randomItem;
}

let word = chooseWord();
let count = 0;
let nl = word.length;

for(let i = 0; i < nl; i++){
  $('.wrapper2').append(
    $(`
      <div class="space"></div>
    `)
  )
}


$('.letter').on('click', e => {
  if(count < nl){
    $(e.currentTarget).addClass('selected');
    $(".space").eq(count).html(e.currentTarget.innerHTML);
  	console.log(count);
  	count++;
  } else {
    console.log(word);
    alert("it's over!");
  }
});
