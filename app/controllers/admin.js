import Controller from '@ember/controller';

export default Controller.extend({
  selectType: null,
  imageSrc: '',
  editImgSrc: '',
  selectedProductId: '',
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
    },
    selectProduct(src, type){
      this.set('selectType',type);
      this.set('editImgSrc',src);
      this.set('selectedProductId',src);
    },
    saveChange(){
      this.get('store').findRecord('portfolio', this.get('selectedProductId')).then(function(portfolio) {
        portfolio.set('type',this.get('editImgSrc'));
        portfolio.set('src',this.get('selectType'));
      });
    }
  }
});