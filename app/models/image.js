import DS from 'ember-data';

export default DS.Model.extend({
  type: DS.attr(),
  image_src: DS.attr()
});
