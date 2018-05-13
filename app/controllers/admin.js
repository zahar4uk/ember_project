import Controller from '@ember/controller';

export default Controller.extend({
  selectType: 'print tamplate',
  imageSrc: '',

  actions:{
    changeType(value){
      this.set('selectType', value);
    },
    addPortfolio(){
      let store = this.get('store').createRecord('portfolio', {
        id: this.get('model.portfolios.length'),
        type: this.get('selectType'),
        src:  this.get('imageSrc'),
        w: 1122,
        h: 658,
        title: this.get('selectType'),
        msrc: '(optional) larger image'
      });
      store.save();
    }
  }
});