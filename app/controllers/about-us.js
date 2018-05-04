import Controller from '@ember/controller';

export default Controller.extend({
    workerName: '',
    workerTitle: '',
    workerDescription: '',
    imageSrc:'',
    
    actions:{
        changeWorker(name, title, description, src){
            this.workerName = name;
            this.workerTitle = title;
            this.workerDescription = description;
            this.imageSrc = src;
        }
    }
});
