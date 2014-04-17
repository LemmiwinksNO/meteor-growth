// Subscribe to focuses and tasks
Meteor.subscribe('focuses');
Meteor.subscribe('tasks');

// NOTE we could pass userId from here, but publications.js already has it.
// Meteor.subscribe('focuses', Meteor.userId())