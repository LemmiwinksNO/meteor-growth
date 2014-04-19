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
      var currentFocusId = $form.data('focus-id');
      db.focuses.update(currentFocusId, {$set: focusAttributes}, function(error) {
        if (error) {
          console.log("error = ", error);
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

  // This fires when modal is hidden. Clear the form.
  'hidden.bs.modal': function(e) {
    $(e.target).find('form')[0].reset();
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