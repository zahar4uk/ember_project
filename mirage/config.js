export default function() {
  this.namespace = 'api';

  this.get('/portfolios', function() {
    return {
      portfolios: [{
        id: 1,
        type: 'print tamplate',
        imageSrc: 'Product-image/Example.png'
      },{
        id: 2,
        type: 'web tamplate',
        imageSrc: 'Product-image/Example1.png'
      },{
        id: 3,
        type: 'user interface',
        imageSrc: 'Product-image/Example2.png'
      },{
        id: 4,
        type: 'mock up',
        imageSrc: 'Product-image/Example3.png'
      },{
        id: 5,
        type: 'user interface',
        imageSrc: 'Product-image/Example4.png'
      },{
        id: 6,
        type: 'web tamplate',
        imageSrc: 'Product-image/Example5.png'
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
