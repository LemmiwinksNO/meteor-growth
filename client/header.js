Template.header.events({
  'click .new-focus': function(e) {
    $focusModal = $("#focus-modal");

    // Set modal attributes
    $focusModal.find('.modal-title').text("Add New Focus");
    $focusModal.modal();
  }
});