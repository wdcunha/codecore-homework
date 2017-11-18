// moveCard:
// This should take five argument, boardName, fromList, toList, fromCardIndex, toCardIndex. This should move
// a card with index fromCardIndex from the fromList to the toList. It should put it in the new list using the
// toCardIndex.

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

let board = "Tester Board";
let listFrom = "To Do";
let listTo = "Doing";
let cardFrom = 1;
let cardTo = 1;
console.log(hello);

//console.log(moveCard(board, listFrom, cardFrom, listTo, cardTo));


function createCard(boardName, listName, cardName, index) {
  //console.log(`arguments from createCard: ${boardName}, ${listName}, ${cardName}`);
  let message = '';
  let arrKeys = Object.keys(hello);
    if (arrKeys.includes(boardName)) {
      let arrSubKeys = Object.keys(hello[boardName]);
      if (arrSubKeys.includes(listName)) {
        hello[boardName][listName].splice(index,0,cardName);
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

function removeCard(boardName, listName, cardIndex) {
  //console.log(`arguments from removeCard: ${boardName}, ${listName}, ${cardIndex}`);

  let message = '';
  let arrKeys = Object.keys(hello);
  if(arrKeys.includes(boardName)) {
    let arrSubKeys = Object.keys(hello[boardName]);
    if (arrSubKeys.includes(listName)) {
      let arrList = Object.values(hello[boardName][listName]);
        if (arrList.length > cardIndex) {
          //console.log(`arrList: ${arrList}`);
          const cardName = hello[boardName][listName][cardIndex];
          message = `The card "${cardName}" was removed!`;
          hello[boardName][listName].splice(cardIndex,1);
        } else {
          message = `There's no card "${cardIndex}" to be removed!`;
        }
    } else {
      message = `The name of List "${listName}" doesn't exist, at least in "${boardName}". There's nothing to remove!`;
    }
  }
  else {
    message = `The name "${boardName}" passed as a Board doesn't exist!`;
  }
  return message;
}
console.log();
console.log();
console.log();
console.log();


function moveCard(boardName, fromList,fromCardIndex,toList, toCardIndex) {

    //console.log(`arguments from moveCard: ${boardName}, ${fromList}, ${toList}, ${fromCardIndex}, ${toCardIndex}`);

  const cardName = hello[boardName][fromList][fromCardIndex];
  //console.log(`Card Name (toCard): ${cardName}`);
  createCard(boardName,toList, cardName, toCardIndex);

  removeCard(boardName, fromList, fromCardIndex);
  return hello;
}

console.log(moveCard(board, listFrom, cardFrom, listTo, cardTo));
console.log();
console.log();
