import Controller from '@ember/controller';
import { computed } from '@ember/object';
export default Controller.extend({
  queryParams: ['type'],

  filteredPortfoio: Ember.computed('type','model', function(){
    var type = this.get('type');
    var portfolio = this.get('model');

    if (type) {
      return portfolio.filterBy('type', type);
    } else {
      return portfolio;
    }
  })
});
