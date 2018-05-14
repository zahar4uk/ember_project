import Controller from '@ember/controller';
export default Controller.extend({
  selectTypetoAdd: 'print tamplate',
  imageSrctoAdd: null,
  actions:{
    changeType(value){
      this.set('selectTypetoAdd', value);
    },
    addPortfolio(){
      let lg = this.get('model.portfolios.length');
      let store = this.get('store').createRecord('portfolio', {
        id:  lg,
        type: this.get('selectTypetoAdd'),
        src:  this.get('imageSrctoAdd'),
        w: 1122,
        h: 658,
        title: this.get('selectTypetoAdd'),
        msrc: '(optional) larger image'
      });
      store.save();
    }
    
    // selectProduct(src, type){
    //   this.set('selectType',type);
    //   this.set('editImgSrc',src);
    //   this.set('selectedProductId',src);
    // },
    // saveChange(){
    //   this.get('store').findRecord('portfolio', this.get('selectedProductId')).then(function(portfolio) {
    //     portfolio.set('type',this.get('editImgSrc'));
    //     portfolio.set('src',this.get('selectType'));
    //   });
    // }
  }
});