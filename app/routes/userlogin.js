import Route from '@ember/routing/route';

export default Route.extend({
  model (){
    return this.get('store').findAll('user');
  },
  actions: {
    cheсkInput(){
      let store = this.get('store');
      let us;
      for(var i = 0;i<4;i++){
        us = store.peekRecord('user',i);
        if(this.controller.get('login') == us.get('login') && this.controller.get('password') == us.get('password')){
          this.transitionTo('user', { queryParams: { id: i }});
          break;
        }
        else if(i==3)
          alert('Неверный вход');
      }
    }
  }
});
