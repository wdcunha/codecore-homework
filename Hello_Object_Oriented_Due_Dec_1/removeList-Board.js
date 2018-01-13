

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

}
const myBoard = new Board('My Board')
myBoard.addList(new List('Remove Me!'));

// Finds and removes the list named 'Remove Me!'
myBoard.removeList('Remove Me!');

console.log(myBoard);
