import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        delReview(){
            this.get('store').findRecord('review', 1, { backgroundReload: false }).then(function(review) {
                review.deleteRecord();
                review.get('isDeleted'); // => true
                review.save(); // => DELETE to /posts/1
              });
        }
    }
});
