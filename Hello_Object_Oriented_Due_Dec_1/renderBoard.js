

class Task {
  constructor(taskName='', assignee='') {
    this.taskName = taskName;
    this.assignee = assignee;
  }

  render() {
    if (this.assignee != '' && this.taskName != '') {

      return `${this.taskName} ${this.assignee}`;
    }
    else if (this.taskName != '') {

      return `${this.taskName}`;
    } else {
      return '';
    }
  }
}


class List {

  constructor(listName) {
    this.listName = listName;
    this.lists = []; // store tasks
  }
  addTask (task) {
    this.lists.push(task);
    return this;
  }
  removeTask(task) {
    for (var i = 0; i < this.lists.length; i++) {
      if (this.lists[i].listName === task) {
        // console.log(`>>>> ${this.taskList[i].taskName}`);
        return this.lists.splice(i,1).pop();
        // return `The task "${task}" was removed!`;
      } else {
        return null;
      }
    }
  }

  render(){
    let dash = '|---------------------';
    let result = '';
    result += `${dash}\n|${this.listName}\n${dash}`;
    // console.log(this.lists[2].listName);
    for(let i in this.lists) {
      if (this.lists[i].assignee !== '') {
        result += `\n|${i}> ${this.lists[i].listName} • ${this.lists[i].assignee}`;
      } else {
        result += `\n|${i}> ${this.lists[i].listName}`;
      }
    }
    result += `\n|`;
    return result;
    // console.log(this);
  }
}

class Board {
  constructor(board) {
    this.board = board;
    this.listBoard = [];
  }
  addList (list) {
    this.listBoard.push(list);
    return this;
  }
  removeList(list) {
    for (var i = 0; i < this.listBoard.length; i++) {
      if (this.listBoard[i].listName === list) {
        return this.listBoard.splice(i,1).pop();
      } else {
        return null;
      }
    }
  }
  renderBoard(){
    let star = '****************';
    let dash = '|---------------------';
    let result = '';
    result += `${star}\n*   ${this.board}   *\n${star}`;
    for(let i in this.listBoard) {
      if (this.listBoard !== '') {
        // console.log(`>>> listBoard.listName: ${this.listBoard[i].listName}`);
        result += `\n|\n${dash}\n| ${this.listBoard[i].listName}\n${dash}`;

        for (let j in this.listBoard[i].lists) {
          if (this.listBoard[i].lists[j].assignee !=='') {
            result += `\n| ${j}> ${this.listBoard[i].lists[j].taskName} • ${this.listBoard[i].lists[j].assignee}`;
          } else {
            result += `\n| ${j}> ${this.listBoard[i].lists[j].taskName}`;
          }
        }
      } else {
        return null;
      }
    }
    result += `\n|`;
    return result;
  }
}
const toDoList = new List('To Do')
  .addTask(new Task('Laundry', 'You'))
  .addTask(new Task('Buy Apples'))
  .addTask(new Task('Pay Phone Bill', 'Me'));

const doingList = new List('Doing')
  .addTask(new Task('Laundry'))
  .addTask(new Task('Study JavaScript', 'Jill'))
  .addTask(new Task('Study HTML', 'Jill'))
  .addTask(new Task('Study Ruby', 'Me'));

const doneList = new List('Done')
  .addTask(new Task('Laundry'))
  .addTask(new Task('Ruby Exercises Homework'));

const myBoard = new Board('My Board')
  .addList(toDoList)
  .addList(doingList)
  .addList(doneList);
  // .renderBoard();

// returns some very long ugly string with a bunch of '\n' characters, but
// displays as shown below when it is logged with `console.log`.

console.log(myBoard.renderBoard());
// console.dir(myBoard,{depth:null})
