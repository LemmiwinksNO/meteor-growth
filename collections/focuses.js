
if (typeof db === 'undefined')
  db = {};

db.focuses = new Meteor.Collection('focuses');

ownsFocus = function(userId, focus) {
  return focus && focus.userId == userId;
};
// User can update if owns focus
db.focuses.allow({
  update: ownsFocus,
  remove: ownsFocus
});

// User can't update with a blank title
// db.focuses.deny({
//   update: function() {
//     console.log("deny called ", this);
//   }
// });

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