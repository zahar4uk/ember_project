export default function() {
  this.namespace = '/api';

  this.get('/portfolio', function() {
    return {
      data: [{
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
      }]
    };
  });
  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
}
