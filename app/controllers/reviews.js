import Controller from '@ember/controller';

export default Controller.extend({
  userName:'',
  userReview:'',

  actions:{
    addRecord(){ 
      if(this.userName==''||this.userReview==''){
        alert("Please fill in the empty fields");
      }
      else{
        let h = this.get('store').createRecord('review', {
          id: this.get('model.length'),
          name: this.get('userName'),
          review:  this.get('userReview'),
        });
        h.save();
      }
    }
  }
});
