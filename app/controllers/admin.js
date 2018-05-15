import Controller from '@ember/controller';
export default Controller.extend({
  selectTypetoAdd: 'print tamplate',
  imageSrctoAdd: null,

  selectTypetoEdit: null,
  imageSrctoEdit: null,
  imageIdtoEdit: null,
  actions:{
    changeTypeAdd(value){
      this.set('selectTypetoAdd', value);
    },
    changeTypeEdit(value){
      this.set('selectTypetoEdit', value);
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
    },
    selectProduct(src, type, id){
      this.set('imageSrctoEdit',src);
      this.set('selectTypetoEdit',type);
      this.set('imageIdtoEdit',id);
    }
    // saveChange(){
    //   let edit = this.get('store').findRecord('model.portfolios', this.get('imageIdtoEdit')).then(function(portfolio) {
    //     portfolio.set('type',this.get('selectTypetoEdit'));
    //     portfolio.set('src',this.get('imageSrctoEdit'));
    //   });
    //   edit.save();
    // }
  }
});