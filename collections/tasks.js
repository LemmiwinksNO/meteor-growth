
if (typeof db === 'undefined')
  db = {};

db.tasks = new Meteor.Collection('tasks');

Meteor.methods({
  'newTask': function(task) {
    var user = Meteor.user();

    // Ensure user is logged in
    if (!user)
      throw new Meteor.error(401, "You need to log in to create tasks");

    // Ensure task has a title
    if (!task.title)
      throw new Meteor.error(422, "Please fill in a title");

    var taskId = db.tasks.insert(task);

    return taskId;
  }
});