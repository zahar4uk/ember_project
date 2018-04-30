export default function() {
  this.namespace = 'api';
  const portfolios = [{
    id: 0,
    type: 'print tamplate',
    src: 'Product-image/Example.png',
    w: 768,
    h: 1024
  },{
    id: 1,
    type: 'web tamplate',
    src: 'Product-image/Example1.png',
    w: 768,
    h: 1024
  },{
    id: 2,
    type: 'user interface',
    src: 'Product-image/Example2.png',
    w: 768,
    h: 1024
  },{
    id: 3,
    type: 'mock up',
    src: 'Product-image/Example3.png',
    w: 768,
    h: 1024
  },{
    id: 4,
    type: 'user interface',
    src: 'Product-image/Example4.png',
    w: 768,
    h: 1024
  },{
    id: 5,
    type: 'web tamplate',
    src: 'Product-image/Example5.png',
    w: 768,
    h: 1024
  }];

  this.get('/portfolios', function(schema, request) {
    if (request.queryParams.type) {
      return {
        portfolios: portfolios.filter(function(item) {
          return item.type === request.queryParams.type;
        })
      }
    }
    return {
      portfolios: portfolios
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
