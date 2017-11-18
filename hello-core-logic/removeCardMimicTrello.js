// removeCard:
// This should take a board name, a list name and a card index and removes the card from the list of the provided board
// name.

const hello = {
    'Tester Board': {
      'To Do': ['Laundry', 'Buy Apples', 'Pay Phone Bill'],
      'Doing': ['Laundry', 'Studying Javascript', 'Studying HTML', 'Studying Ruby'],
      'Done': ['Laundry']
    },
    'Dreams': {
      'Wish List': ['Conquer the Seven Kingdoms', 'Get my baby back', 'My hand needs to chill']
    },
    'Cuisine': {
      'Region':['African', 'European', 'Brazilian', 'Asian'] }
};

board = "Tester Board";
list = "Doing";
card = 3;

function removeCard(boardName, listName, cardIndex) {
  let message = '';
  let arrKeys = Object.keys(hello);
  if(arrKeys.includes(boardName)) {
    let arrSubKeys = Object.keys(hello[boardName]);
    if (arrSubKeys.includes(listName)) {
      let arrList = Object.values(hello[boardName][listName]);
        if (arrList.length > cardIndex) {
          console.log(`arrList: ${arrList}`);
          const cardName = hello[boardName][listName][cardIndex];
          message = `The card "${cardName}" was removed!`;
          hello[boardName][listName].splice(cardIndex,1);
        } else {
          message = `There's no card "${cardIndex}" to be removed!`;
           console.log(hello[boardName][listName][cardIndex]);
        }
    } else {
      message = `The name of List "${listName}" doesn't exist, at least in "${boardName}". There's nothing to remove!`;
    }
  }
  else {
    message = `The name "${boardName}" passed as a Board doesn't exist!`;
    return false;
  }
  return message;
}

console.log(removeCard(board, list, card));
console.log(hello);
