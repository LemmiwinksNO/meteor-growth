Template.errors.helpers({
  errors: function(){
    return Errors.collection.find();
  }
});

// When error is rendered, it is seen. But wait 1ms before updating seen to true,
// because we could be redirecting the user somewhere(302). When that happens,
// defer solves the problem - the update gets called AFTER we get reidrected.
Template.error.rendered = function() {
  var error = this.data;
  Meteor.defer(function() {
    Errors.collection.update(error._id, {$set: {seen: true}});
  });
};