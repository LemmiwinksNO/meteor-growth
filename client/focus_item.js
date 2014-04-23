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

  // User clicked new task
  'click .new-task': function(e) {
    // Call addNewTask(), using current context as 'this'
    addNewTask.call(this, e);
    // addNewTask.apply(this, arguments);
    // addNewTask.bind(this, e)();  // Use bind when you want to create a new function
    // _.bind(addNewTask, this, e)();
  },

  // User pressed enter in new task input
  'keypress input': function(e) {
    if (e.which === 13)
      addNewTask.call(this, e);
  }
});

var addNewTask = function (e) {
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
};