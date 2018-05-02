import DS from 'ember-data';
export default DS.Model.extend({
  type: DS.attr('string'),
  src: DS.attr('string'),
  w: DS.attr('number'),
  h: DS.attr('number'),
  title: DS.attr('string'),
  msrc: DS.attr('string')
});
