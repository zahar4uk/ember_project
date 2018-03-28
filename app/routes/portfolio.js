import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    type: {
      refreshModel: true
    }
  },
  model (){
    return this.get('store').findAll('portfolio');
  }
});
