// Write a function named createBoard that takes one argument, boardName, then creates a board if there is no board with
// the same name (meaning that it adds a board to the object assigned to the variable, hello.) The function should return,
// Board '<board-name>' was created. If there is already a board with the same name, it should return Board already exists.
// Use your listBoards function to display before and after creating a board to test that it worked successfully.

const hello = {
    'Tester Board': {
      'To Do': ['Laundry', 'Buy Apples', 'Pay Phone Bill'],
      'Doing': ['Laundry', 'Studying Javascript', 'Studying HTML', 'Studying Ruby'],
      'Done': ['Laundry']
    },
    'Dreams': {
      'Wish List': ['Conquer the Seven Kingdoms', 'Get my baby back', 'My hand needs to chill']
    }
};

board = "Cuisini";

function createBoard(obj, boardName) {
  let arr = Object.keys(obj);
  arr.forEach(function(key) {
    if (key === boardName) {
      message = `Board '${boardName}' already exists, so it cannot be added!`;
      return message;
    } else {
      obj[boardName] = [];
      message = `Board '${boardName}' was created!`;
    }
  });

  return message;
  }

console.log(createBoard(hello, board));
