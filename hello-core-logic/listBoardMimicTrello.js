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

function listBoards(boardName) {
  let dash = "\n------------------\n";
  let result = dash;
  let count = 0;
  for(let boards in boardName) {
    if (boardName !== '') {
      count++;
      result += `\n${count}- ${boards}\n${dash}`;
    } else {
      result = "There's no data to print!";
      return result;
    }
  }
  return result;
}

console.log(listBoards(hello));
