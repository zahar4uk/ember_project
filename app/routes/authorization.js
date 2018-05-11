import Route from '@ember/routing/route';

export default Route.extend({
    model (){
        return this.get('store').findAll('administrator');
      },
      actions:{
        cheсkInput(){
            let store = this.get('store');
            let amd = store.peekRecord('administrator',0);
            if(this.controller.get('login') == '' || this.controller.get('password')== ''){
                alert("All fields are required!")
            }
            else if (this.controller.get('login') == amd.get('login') && this.controller.get('password') == amd.get('password')){
                this.transitionTo('admin');
            }
            else{
                alert('check the correct input');
            }
            // this.transitionTo('portfolio');
        }
    }
});
