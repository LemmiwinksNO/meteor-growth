Template.header.events({
  'click .new-focus': function(e) {
    $("#focus-modal").modal();
  },
  'click .toggle-completed': function(e) {
    $button = $(e.target);

    // Toggle button text and subscription
    if ($button.text() === "Completed") {
      Session.set('completed', true);
      $button.text('Remaining');
    } else {
      Session.set('completed', false);
      $button.text('Completed');
    }
  }
});