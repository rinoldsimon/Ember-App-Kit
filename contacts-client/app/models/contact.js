var Contact = DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  number: DS.attr('number')
});

export default Contact;
