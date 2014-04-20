// Focus modal template helpers
Template.focusModal.helpers({
  // If user clicked edit on a focus to open focusModal, load it up!
  // If we have a focus, use it.
  'focus': function(){
    return Session.get('currentFocus');
  }
});

// Focus modal event handlers
Template.focusModal.events({
  'submit form': function(e) {
    e.preventDefault();  // So browser doesn't try to submit form.

    $form = $(e.target);

    // Get our new focus inputs
    var focusAttributes = {
      title: $form.find('[name=title]').val(),
      imageUrl: $form.find('[name=imageUrl]').val(),
      why: $form.find('[name=why]').val()
    };

    var action = $form.data('action');

    if ($form.data('action') === 'update') {
      var focusId = $form.data('focus-id');
      Meteor.call('updateFocus', focusAttributes, focusId, function(error) {
        if (error) {
          alert(error.reason);
        } else {
          $('#focus-modal').modal('hide');
        }
      });
    } else if ($form.data('action') === 'new') {
      // Meteor method focus insertion ('methodName', arguments, callback)
      Meteor.call('newFocus', focusAttributes, function(error, id) {
        if (error) {
          alert(error.reason);
        } else {
          $('#focus-modal').modal('hide');
        }
      });
    }
  },

  // This fires when modal is hidden.
  // (1) unset currentFocus; (2) remove data(otherwise it lingers).
  'hidden.bs.modal': function(e) {
    Session.set('currentFocus', null);
    $(e.target).find('form').removeData();
  },

  // Delete a focus
  'click .delete': function(e) {
    e.preventDefault();

    $deleteButton = $(e.target);
    var focusId = $deleteButton.parents('form').data('focus-id');

    if (focusId && confirm("Delete this focus?")) {
      db.focuses.remove(focusId);
      $('#focus-modal').modal('hide');
    }
  }
});