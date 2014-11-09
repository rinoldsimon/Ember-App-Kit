var ContactsShowController = Ember.ObjectController.extend({
  twitterDisplay: function() {
    var email = this.get('email');
    return email;
  }.property('email')
});

export default ContactsShowController;
