// Lists
// Create a List class that represents a list. It should be initialized with a name.
//
// List#addTask
// It should have a addTask method that takes a Task instance and adds it to the end
// of the list. You should be able to >>>>> chain addTask. <<<<<<<<???????

// const Task = require('task.js');

class List {

  constructor(list) {
    this.list = list;
    this.taskList = []; // store tasks
  }

  addTask (task) {
    this.taskList.push(task);
    return this;
  }
}

const toDoList = new List('To Do');

// adds 'Laundry' task to 'To Do' list
toDoList.addTask(new Task('Laundry', 'You'));
// also works by chaining
toDoList
  .addTask(new Task('Buy Apples'))
  .addTask(new Task('Pay Phone Bill', 'Me'));

console.log(toDoList);



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
