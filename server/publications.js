// Publish focuses this user.
Meteor.publish('focuses', function() {
  // publish function has current user's _id available as this.userId
  return db.focuses.find({userId: this.userId});
});

// Publish tasks for this user based on options passed in.
// So far only option is completed: true/false
Meteor.publish('tasks', function(options) {
  options = options || {};
  options['userId'] = this.userId;
  return db.tasks.find(options);
});

// If we didn't already have access to userId
// Meteor.publish('focuses', function(userId) {
//  return db.focuses.find({userId: userId});
// })