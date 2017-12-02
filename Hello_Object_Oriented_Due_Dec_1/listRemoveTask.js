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
    this.list = []; // store tasks
  }

  addTask (task) {
    this.list.push(task);
    return this;
  }

  removeTask(task) {
    for (var i = 0; i < this.list.length; i++) {
      // console.log(`${i} - ${this.list[i].name}  -- task - ${task} - ${this.list.length}`);
      if (this.list[i].name === task) {
        // console.log(">>>>>>>>>>>>>>>>>>>>>> remove task!!!");
        return this.list.splice(i,1).pop();
      } else {
      }
    }
    return null;
  }
}

const toDoList = new List('To Do');
// adds 'Laundry' task to 'To Do' list
toDoList.addTask(new Task('Laundry', 'You'));
// also works by chaining
toDoList
  .addTask(new Task('Buy Apples'))
  .addTask(new Task('Pay Phone Bill', 'Me'));

  // toDoList.printTask();

toDoList.addTask(new Task('Remove Me!'));
console.log(toDoList);
console.log();
console.log();
// Finds and removes task named 'Remove Me!'
console.log(toDoList.removeTask('Remove Me!'));
console.log();
console.log();
toDoList.removeTask('Remove Me!');

console.log(toDoList);
