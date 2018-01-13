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

board = 'Tester Board';

function displayBoard(boardName) {
  let dash = "|---------------------";
  let result = dash;
  let count = 0;
  for(let listName in boardName) {
    if (boardName !== '') {
      count++;
      result += `\n|${count}- ${listName}\n${dash}\n|>${boardName[listName].join(`\n|>`)}\n${dash}`;
    } else {
      result = "There's no data to print!";
      return result;
    }
  }
  return result;
}

console.log(displayBoard(hello[board]));
















// console.log(hello['Tester Board']); //['To Do']);
//   for (let key in hello['Tester Board']) {
//
//     console.log(`The key is ${key}, the value is ${hello['Tester Board'][key]}`);
//   }
