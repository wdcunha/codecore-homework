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
    // console.log(this.lists[2].name);
    for(let i in this.lists) {
      if (this.lists[i].assignee !== '') {
        result += `\n|${i}> ${this.lists[i].name} • ${this.lists[i].assignee}`;
      } else {
        result += `\n|${i}> ${this.lists[i].name}`;
      }
    }
    result += `\n|`;
    return result;
    // console.log(this);
  }
  this.lists[i].map { |x| x.taskName}.join(...)

}

const toDoList = new List('To Do');
// adds 'Laundry' task to 'To Do' list
toDoList.addTask(new Task('Laundry', 'You'));
// also works by chaining
toDoList
  .addTask(new Task('Buy Apples'))
  .addTask(new Task('Pay Phone Bill', 'Me'));

console.log(toDoList.render());
console.log(toDoList);
