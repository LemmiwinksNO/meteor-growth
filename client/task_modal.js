Template.taskModal.events({
  'submit form': function(e) {
    e.preventDefault();

    // Get values
    var task = {
      title: $(e.target).find("input[name=title]").val(),
      why: $(e.target).find("textarea[name=why]").val()
    };

    if (!task.title) {
      Errors.throw("Please set a title for the task");
    } else {
      db.tasks.update(this._id, {$set: task}, function(error) {
        if (error)
          Error.throw(error.reason);
        else
          $('#task-modal').modal('hide');
      });
    }
  },

  'click button.delete': function(e) {
    e.preventDefault();

    if (this._id && confirm("Delete this task?")) {
      db.tasks.remove(this._id);
      $('#task-modal').modal('hide');
    }
  },

  // This fires when modal is hidden. Remove currentTask from Session
  'hidden.bs.modal': function(e) {
    Session.set('currentTask', null);
  }
});