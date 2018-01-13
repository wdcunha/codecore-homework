//  Create List
// Write a function named createList that takes two arguments, boardName and listName. The function should create a list with name
// listName within board boardName with no cards to start. If the boardName doesn't exist, it should return Board doesn't exist
// and, if a list with the same name exists already, it should return List name already exists.

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
      'Region':['African', 'European', 'Brazilian', 'Asian'] }
};

board = "Cuisine";
list = "New List";

function createList(boardName, listName) {
  let arrKeys = Object.keys(hello);
    if (arrKeys.includes(boardName)) {
      let arrSubKeys = Object.keys(hello[boardName]);
      if (!arrSubKeys.includes(listName)) {
        hello[boardName][listName] = [];
        message = `The list "${listName}" was created!`;
      } else {
        message = `The name of List "${listName}" already exists. It's not possible to add it!`;
        return message;
      }
    } else {
      message = `The name "${boardName}" passed as a Board doesn't exist!`;
      return message;
    }
    return message;
  }

console.log(createList(board,list));
//console.log(hello);
