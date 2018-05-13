import Route from '@ember/routing/route';
import RSVP from 'rsvp';
export default Route.extend({
  model() {
    return RSVP.hash({
      reviews: this.get('store').findAll('review'),
      portfolios: this.get('store').findAll('portfolio')
    });
  },
  actions: {
    delRecord(id, modelName){
      this.get('store').findRecord(modelName, id, { backgroundReload: false }).then(function(modelName) {
        modelName.destroyRecord();
      });
    }
  }
});
