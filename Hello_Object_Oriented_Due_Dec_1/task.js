// Create a Task class that represents a task. It should be initialized with
// a name and a assignee (a person's full name.)
//
// Example Usage:
// const myTask = new Task('Clean dishes');
// const myTaskWithAssignee = new Task('Wash clothes', 'You');
//
// It should have a render method that returns a formatted string to display
// the task with its name and its assignee.
// myTask.render() // returns 'Clean Dishes'
// myTaskWithAssignee.render() // returns 'Wash clothes • You'

class Task {
  constructor(assignee='', fullName='') {
    this.assignee = assignee;
    this.fullName = fullName;
  }

  render() {
    if (this.assignee != '' && this.fullName != '') {

      return `${this.assignee} ${this.fullName}`;
    }
    else if (this.assignee != '') {

      return `${this.assignee}`;
    } else {
      return '';
    }
  }
}

myTask = new Task("Keep on studying");
// myTask = new Task();
console.log(myTask.render());

myTaskWithAssignee = new Task("Sleep a little", "Wellington");
console.log(myTaskWithAssignee.render());
