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
  $(e.currentTarget).addClass('selected');
});
