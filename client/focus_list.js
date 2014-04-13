Template.focusList.helpers({
  // Get all focuses
  focuses: function(){
    return db.focuses.find({});
  }
  // Get all focuses for this user
  // NOTE: We want to only publish/subscribe focuses for this user. 
  // focuses: function() { return db.focuses.find({userId: Meteor.userId()})}
});