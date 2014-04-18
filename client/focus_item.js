Template.focusItem.helpers({
  // Get all tasks for this focus
  tasks: function() {
    return db.tasks.find({focusId: this._id});
  }
});

Template.focusItem.events({
  'click .edit-focus': function(e) {
    $focusModal = $('#focus-modal');

    // Set modal attributes
    $focusModal.find('.modal-title').text('Edit Focus');
    $focusModal.find('input[name=title]').val(this.title);
    $focusModal.find('input[name=imageUrl]').val(this.imageUrl);
    $focusModal.find('textarea[name=why]').val(this.why);

    // Set action and focus-id on the modal so we can call update.
    $focusModal.find('form').data('action', 'update');
    $focusModal.find('form').data('focus-id', this._id);

    // Set submit button to 'update'
    $focusModal.find('form button[type=submit]').text('Update');

    $focusModal.modal();
  }
});
