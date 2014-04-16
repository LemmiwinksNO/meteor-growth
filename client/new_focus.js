Template.newFocus.events({
  'submit form': function(e) {
    e.preventDefault();  // So browser doesn't try to submit form.

    // Get our new focus inputs
    // NOTE: e.target = the form
    var focus = {
      title: $(e.target).find('[name=title]').val(),
      imageUrl: $(e.target).find('[name=imageUrl]').val(),
      why: $(e.target).find('[name=why]').val()
    };

    // Meteor method focus insertion ('methodName', arguments, callback)
    Meteor.call('newFocus', focus, function(error, id) {
      if (error) {
        alert(error.reason);
      } else {
        // Reset form
        e.target.reset();
      }
    });
  }
});