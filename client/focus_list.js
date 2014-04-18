Template.focusList.helpers({
  // Get all focuses
  focuses: function(){
    return db.focuses.find({});
  }
});