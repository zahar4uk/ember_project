import Controller from '@ember/controller';
export default Controller.extend({
       
        workerName: '',
        workerTitle: '',
        workerDescription: '',
        imageSrc:'',
      
    actions:{
        changeWorker(name, title, description, src){
            this.set('workerName',name);
            this.set('workerTitle',title);
            this.set('workerDescription',description);
            this.set('imageSrc',src);
            // alert(this.get('store').peekRecord('employee',0).get('name'));
        }
    }
});
