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
  },

  'click .new-task': function(e) {
    var now = new Date();
    var $title = $(e.target).parents('.input-group').find('[name=new-task-title]');

    var task = {
      title: $title.val(),
      focusId: this._id,
      userId: this.userId,
      completed: false,
      created: now
    };

    Meteor.call('newTask', task, function(error, id) {
      if (error) {
        alert(error.reason);
      } else {
        $title.val('');
      }
    });
  }
});
