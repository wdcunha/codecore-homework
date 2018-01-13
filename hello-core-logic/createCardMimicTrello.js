// Create Card
//
// Build a function called createCard that takes three arguments: boardName, listName and cardName. The function
// should add a card to the array of cards for the listName list within boardName board. It should return Board
// doesn't exist if no board with boardName exists and it should return List doesn't exist if no list with name
// listName within board boardName exists. It's ok to have two cards with the same name within a given list.

const hello = {
    'Tester Board': {
      'To Do': ['Laundry', 'Buy Apples', 'Pay Phone Bill'],
      'Doing': ['Laundry', 'Studying Javascript', 'Studying HTML', 'Studying Ruby'],
      'Done': ['Laundry']
    },
    'Dreams': {
      'Wish List': ['Conquer the Seven Kingdoms', 'Get my baby back', 'My hand needs to chill'],
    },
    'Cuisine': {
      'Region':['African', 'European', 'Brazilian', 'Asian'],
      }
};

board = "Tester Board";
list = "Doing";
card = "New card";

function createCard(boardName, listName, cardName) {
  let arrKeys = Object.keys(hello);
    if (arrKeys.includes(boardName)) {
      let arrSubKeys = Object.keys(hello[boardName]);
      if (arrSubKeys.includes(listName)) {
        hello[boardName][listName].push(cardName);
        message = `The card "${cardName}" was created!`;
      } else {
        message = `The name of List "${listName}" doesn't exist. It's not possible to add it!`;
        return message;
      }
    } else {
      message = `The name "${boardName}" passed as a Board doesn't exist!`;
      return message;
    }
    return message;
  }

console.log(createCard(board,list, card));
console.log(hello);
