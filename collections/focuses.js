
if (typeof db === 'undefined')
  db = {};

db.focuses = new Meteor.Collection('focuses');

ownsFocus = function(userId, focus) {
  return focus && focus.userId == userId;
};

db.focuses.allow({
  // User can update/delete if owns focus
  update: ownsFocus,
  remove: ownsFocus
});

db.focuses.deny({
  // User can't update with a blank title
  update: function(userId, focus, fieldNames) {
    return fieldNames.title.length > 0;
  }
});

// Define meteor methods -> server-side functions called client-side.
Meteor.methods({
  newFocus: function(focusAttributes) {
    var user = Meteor.user();

    // Ensure user is logged in
    if (!user)
      throw new Meteor.Error(401, "You need to log in to create focuses");

    // Ensure the focus has a title
    if (!focusAttributes.title)
      throw new Meteor.Error(422, "Please fill in a headline");

    var focus = {
      userId: user._id,
      title: focusAttributes.title,
      imageUrl: focusAttributes.imageUrl,
      why: focusAttributes.why
    };

    var focusId = db.focuses.insert(focus);

    return focusId;
  }
});