Template.focusItem.helpers({
  // Get all tasks for this focus
  tasks: function() {
    return db.tasks.find({focusId: this._id});
  }
});

Template.focusItem.events({
  'click .edit-focus': function(e) {
    // Set this focus on session to update focus-modal
    Session.set('currentFocus', this);
    $('#focus-modal').modal();
  }
});
