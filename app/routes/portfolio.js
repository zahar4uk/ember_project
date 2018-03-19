import Route from '@ember/routing/route';

export default Route.extend({
  model (){
    return [{
      type: 'print tamplate',
      image_src: 'Product-image/Example.png'
    },{
      type: 'web tamplate',
      image_src: 'Product-image/Example1.png'
    },{
      type: 'user interface',
      image_src: 'Product-image/Example2.png'
    },{
      type: 'mock up',
      image_src: 'Product-image/Example3.png'
    },{
      type: 'user interface',
      image_src: 'Product-image/Example4.png'
    },{
      type: 'web tamplate',
      image_src: 'Product-image/Example5.png'
    }];
  }
});
