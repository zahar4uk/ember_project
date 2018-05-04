import Controller from '@ember/controller';

export default Controller.extend({
    workerName: '',
    workerTitle: '',
    workerDescription: '',
    
    actions:{
        changeWorker(name, title, description){
            this.workerName = name;
            this.workerTitle = title;
            this.workerDescription = description;
        }
    }
});
