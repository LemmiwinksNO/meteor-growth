Template.focusList.helpers({
  // Get all focuses
  focuses: function() {
    return db.focuses.find({});
  },
  // Get currentFocus so we can set it as data context for focusModal
  // This updates as we set currentFocus in Session!
  currentFocus: function() {
    return Session.get('currentFocus');
  },
  // Get currentTask so we can set it as the data context for taskModal.
  // This updates as we set currentTask in Session.
  currentTask: function() {
    return Session.get('currentTask');
  }
});