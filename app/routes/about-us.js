import Route from '@ember/routing/route';

export default Route.extend({
  model (){
    return this.get('store').findAll('employee');
  },
  setupController: function(controller, model) {
      
    this._super(controller, model);
    let modelRecord = this.get('store').peekRecord('employee',0);

    controller.set('workerName',modelRecord.get('name'));
    controller.set('workerTitle',modelRecord.get('title'));
    controller.set('workerDescription',modelRecord.get('description'));
    controller.set('imageSrc',modelRecord.get('src'));
  }
});
