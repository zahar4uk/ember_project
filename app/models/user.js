import DS from 'ember-data';

export default DS.Model.extend({
  fio: DS.attr('string'),
  age: DS.attr('number'),
  avatarSrc: DS.attr('string'),
  address: DS.attr('string'),
  login: DS.attr('string'),
  password: DS.attr('string'),
});
