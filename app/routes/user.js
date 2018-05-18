import Route from '@ember/routing/route';

export default Route.extend({
  model (){
    return this.get('store').findAll('user')
  },
  setupController: function(controller, model) {
    this._super(controller, model);
    let userInfo = this.get('store').peekRecord('user', this.controller.get('id'));

    controller.set('fio',userInfo.get('fio'));
    controller.set('age',userInfo.get('age'));
    controller.set('avatarSrc',userInfo.get('avatarSrc'));
    controller.set('address',userInfo.get('address'));
  }
});
