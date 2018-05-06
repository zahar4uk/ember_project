import Controller from '@ember/controller';

export default Controller.extend({

    userName:'',
    userReview:'',

    actions:{
        addRecord(){
             this.get('store').createRecord('review', {
                name: this.get('userName'),
                review:  this.get('userReview'),
                  });
        }
    }
});
