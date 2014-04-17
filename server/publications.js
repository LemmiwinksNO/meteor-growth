// Publish focuses and tasks for this user.
Meteor.publish('focuses', function() {
  // publish function has current user's _id available as this.userId
  return db.focuses.find({userId: this.userId});
});

Meteor.publish('tasks', function() {
  return db.tasks.find({userId: this.userId});
});

// If we didn't already have access to userId
// Meteor.publish('focuses', function(userId) {
//  return db.focuses.find({userId: userId});
// })