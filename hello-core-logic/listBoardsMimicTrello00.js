const hello = {
    'Tester Board': {
      'To Do': ['Laundry', 'Buy Apples', 'Pay Phone Bill'],
      'Doing': ['Laundry', 'Studying Javascript', 'Studying HTML', 'Studying Ruby'],
      'Done': ['Laundry']
    },
    'Dreams': {
      'Wish List': ['Conquer the Seven Kingdoms', 'Get my baby back', 'My hand needs to chill'],
    }
};

function listBoards(obj) {
  let dash = "|---------------------";
  let result = dash;
  let count = 0;
  for(let boards in obj) {
    if (obj !== '') {
      count++;
      result += `\n|${count}- ${boards}\n${dash}\n|>${obj[boards].join(`\n|>`)}\n${dash}`;
    } else {
      result = "There's no data to print!";
      return result;
    }
  }
  return result;
}

console.log(listBoards(hello['Tester Board']));
