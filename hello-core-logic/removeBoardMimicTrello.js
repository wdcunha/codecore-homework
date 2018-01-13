//Write a function named 'removeBoard' that takes one argument, boardName, then, if a board with the name exists, remove
//it and return, Board 'Hello' was removed. If no board with the passed name exists, it should return Board doesn't exist

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

board = "Cuisine";

function removeBoard(obj, boardName) {
  let arr = Object.keys(obj);
  arr.forEach(function(key) {
    if (key === boardName) {
      delete(obj[boardName]);
      message = `Board '${boardName}' was removed!`;
      return message;
    } else {
      message = `Board '${boardName}' cannot be deleted because it doesn't exist!`;
    }
  });
  return message;
}

console.log(removeBoard(hello, board));
