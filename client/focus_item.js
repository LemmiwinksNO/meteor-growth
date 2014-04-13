Template.focusItem.helpers({
  // Get all tasks for this focus
  tasks: function() {
    return db.tasks.find({focusId: this._id});
  }
});