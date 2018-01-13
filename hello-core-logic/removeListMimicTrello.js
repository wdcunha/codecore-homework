// removeList:
// This should take a board name and a list name and removes the list from the board.


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
list = "To Do";

function removeList(boardName, listName) {
  let arrKeys = Object.keys(hello);
  if(arrKeys.includes(boardName)) {
    let arrSubKeys = Object.keys(hello[boardName]);
    if (arrSubKeys.includes(listName)) {
      delete(hello[boardName][listName]);
      message = `The List "${listName}" was removed!`;
    } else {
      message = `The name of List "${listName}" doesn't exist, at least in "${boardName}". There's nothing to remove!`;
    }
  } else {
    message = `The name "${boardName}" passed as a Board doesn't exist!`;
  }
  return message;
}

console.log(removeList(board, list));
//console.log(hello);
