// Subscribe to focuses and tasks
Meteor.subscribe('focuses');
// Meteor.subscribe('tasks');

// User can alternate tasks subscription here (completed or not)
Deps.autorun(function() {
  var completed = Session.get('completed') || false;
  Meteor.subscribe('tasks', {completed: completed});
});

// NOTE we could pass userId from here, but publications.js already has it.
// Meteor.subscribe('focuses', Meteor.userId())