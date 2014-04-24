Template.taskItem.helpers({
  status: function() {
    if (this.completed)
      return "completed color-completed";
    else
      return "uncompleted color-neutral";
  },
  checked: function() {
    if (this.completed)
      return "checked";
  }
});

Template.taskItem.events({
  'click input[type=checkbox]': function(e) {
    // Did we check it or uncheck it?
    var checked = $(e.target).prop('checked');

    // If this.completed !== checked, update the task.
    if (this.completed !== checked) {
      db.tasks.update(this._id, {$set: {completed: checked}}, function(error) {
        if (error) {
          Errors.throw(error.reason);
        }
      });
    }
  }
});