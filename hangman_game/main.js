var myArray = [
  "Apples",
  "Bananas",
  "Pears",
  "Pinapple",
  "Avocado",
  "Orange",
  "Lemon"
];


function chooseWord () {
    // Write code here
    var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
    return randomItem;
    chooseWord()
}

$('.letter').on('click', e => {
  for(let i = 0; i < $('.space').length; i++){
    $(e.currentTarget).addClass('selected');
    $(".space").eq(i).html(e.currentTarget.innerHTML);
  }
  console.log("it's over");
});
