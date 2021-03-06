// Focus modal event handlers
Template.focusModal.events({
  'submit form': function(e) {
    e.preventDefault();  // So browser doesn't try to submit form.

    var $form = $(e.target);
    var focusId = this._id;

    // Get our new focus inputs
    var focusAttributes = {
      title: $form.find('[name=title]').val(),
      imageUrl: $form.find('[name=imageUrl]').val(),
      why: $form.find('[name=why]').val()
    };

    // Do we have a focus? If so, update.
    if (focusId) {
      Meteor.call('updateFocus', focusAttributes, focusId, function(error) {
        if (error) {
          Errors.throw(error.reason);
        } else {
          $('#focus-modal').modal('hide');
        }
      });
    } else {
      // Meteor method focus insertion ('methodName', arguments, callback)
      Meteor.call('newFocus', focusAttributes, function(error, id) {
        if (error) {
          Errors.throw(error.reason);
        } else {
          $('#focus-modal').modal('hide');
        }
      });
    }
  },

  // This fires when modal is hidden. Remove currentFocus from Session
  'hidden.bs.modal': function(e) {
    Session.set('currentFocus', null);
  },

  // Delete a focus
  'click .delete': function(e) {
    e.preventDefault();

    var focusId = this._id;
    if (focusId && confirm("Delete this focus?")) {
      db.focuses.remove(focusId);
      $('#focus-modal').modal('hide');
    }
  }
});