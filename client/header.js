Template.header.events({
  'click .new-focus': function(e) {
    $focusModal = $("#focus-modal");

    // Set modal attributes and set action to new so the modal
    // knows submit means create a new focus rather than update.
    $focusModal.find('.modal-title').text('Add New Focus');
    $focusModal.find('form').data('action', 'new');
    $focusModal.find('form button[type=submit]').text('Create');
    $focusModal.modal();
  }
});