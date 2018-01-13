// List#removeTask
// It should have a removeTask method that takes the name of a
// Task, finds it in the list and removes it. Then, it should
// return the removed task object or null if it couldn't find a
// task with that name to remove.


class Task {
  constructor(name='', assignee='') {
    this.name = name;
    this.assignee = assignee;
  }

  render() {
    if (this.assignee != '' && this.name != '') {

      return `${this.name} ${this.assignee}`;
    }
    else if (this.name != '') {

      return `${this.name}`;
    } else {
      return '';
    }
  }
}


class List {

  constructor(name) {
    this.name = name;
    this.lists = []; // store tasks
  }
  addTask (task) {
    this.lists.push(task);
    return this;
  }
  removeTask(task) {
    for (var i = 0; i < this.lists.length; i++) {
      if (this.lists[i].name === task) {
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
    result += `${dash}\n|${this.name}\n${dash}`;
    for(let i in this.lists) {
      if (this.lists[i].assignee !== '') {
        result += `\n|${i}> ${this.lists[i].name} • ${this.lists[i].assignee}`;
      } else {
        result += `\n|${i}> ${this.lists[i].name}`;
      }
    }
    result += `\n|`;
    return result;
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

// console.log(myBoard);
// console.log('lists');
// console.log(myBoard.listBoard[0].lists[0].name);
console.dir(myBoard,{depth:null})
// https://stackoverflow.com/questions/10729276/how-can-i-get-the-full-object-in-node-jss-console-log-rather-than-object
//
