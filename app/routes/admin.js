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
    },
    saveChange(record, type, src){
      if(this.controller.get('selectElem')==true){
        record.set('type',type);
        record.set('src',src);
        record.save();
      }
      else {
        alert('Item not selected');
      }
      
    }
  }
});