export default function() {
  this.namespace = 'api';
  const portfolios = [
    {
      id: 0,
      type: 'print tamplate',
      src: 'Product-image/Example.png',
      w: 1122,
      h: 658,
      title: 'print tamplate',
      msrc: '(optional) larger image'
    },{
      id: 1,
      type: 'web tamplate',
      src: 'Product-image/Example1.png',
      w: 1122,
      h: 658,
      title: 'web tamplate',
      msrc: '(optional) larger image'
    },{
      id: 2,
      type: 'user interface',
      src: 'Product-image/Example2.png',
      w: 1122,
      h: 658,
      title: 'user interface',
      msrc: '(optional) larger image'
    },{
      id: 3,
      type: 'mock up',
      src: 'Product-image/Example3.png',
      w: 1122,
      h: 658,
      title: 'mock up',
      msrc: '(optional) larger image'
    },{
      id: 4,
      type: 'user interface',
      src: 'Product-image/Example4.png',
      w: 1122,
      h: 658,
      title: 'user interface',
      msrc: '(optional) larger image'
    },{
      id: 5,
      type: 'web tamplate',
      src: 'Product-image/Example5.png',
      w: 1122,
      h: 658,
      title: 'web tamplate',
      msrc: '(optional) larger image'
    },{
      id: 5,
      type: 'user interface',
      src: 'Product-image/Example5.png',
      w: 1122,
      h: 658,
      title: 'web tamplate',
      msrc: '(optional) larger image'
    },{
      id: 6,
      type: 'mock up',
      src: 'Product-image/Example3.png',
      w: 1122,
      h: 658,
      title: 'mock up',
      msrc: '(optional) larger image'
    },{
      id: 7,
      type: 'mock up',
      src: 'Product-image/Example3.png',
      w: 1122,
      h: 658,
      title: 'mock up',
      msrc: '(optional) larger image'
    }
  ];
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

  const employees = [
    { id: 0, name:'Elon Mask', title: 'employee', src: 'Employees/mask.jpg',
      description: 'Streamline project, resource, and portfolio management with Microsoft Project portfolio management with Microsoft'},
    { id: 1, name: 'Albert Einstein', title: 'employee', src: 'Employees/mask.jpg',
      description: 'Streamline project, resource, and portfolio Streamline project, resource management with Microsoft Project'},
    { id: 2, name: 'Steve Jobs',title: 'employee', src: 'Employees/mask.jpg',
      description: 'Streamline project, resource, and portfolio management with Microsoft Project'},
    { id: 3, name: 'Bla bla bla',title: 'employee', src: 'Employees/mask.jpg',
      description: 'Streamline project, resource, and portfolio manav  tools help you keep track of projects and stay organized gement with Microsoft Project'},
    { id: 4, name: 'Lja Kropha',title: 'employee', src: 'Employees/mask.jpg',
      description: 'Streamline project, resource,  tools help you keep track of projects and stay organized and portfolio management with Microsoft Project'},
    { id: 5, name: 'Chik chik',title: 'employee', src: 'Employees/mask.jpg',
      description: 'Streamline project,  tools help you keep track of projects and stay organized resource, and portfolio management with Microsoft Project'},
    { id: 6, name: 'Deep purple',title: 'employee', src: 'Employees/mask.jpg',
      description: 'Streamline  tools help you keep track of projects and stay organized project, resource, and portfolio management with Microsoft Project'}
  ];
  this.get('/employees',function(){
    return {
      employees
    } 
  });
  const users = [
    {id: 0, fio: 'Захарчук Владислав Борисович', age: 20, avatarSrc: 'Users/mask.jpg', address: 'Intitutskaaaa 11/3',login: 'vlados',password: 'grindcore' },
    {id: 1, fio: 'Григорчук Олександр Борисович', age: 20, avatarSrc: 'Users/mask.jpg', address: 'Intitutskaaaa 11/3',login: 'sanjok',password: 'karapuz' },
    {id: 2, fio: 'Ткачук Євгеній Андріййович', age: 20, avatarSrc: 'Users/mask.jpg', address: 'Intitutskaaaa 11/3',login: 'kamandir',password: 'lysyj' },
    {id: 3, fio: 'Шевчук Олег Анатолійович', age: 20, avatarSrc: 'Users/mask.jpg', address: 'Intitutskaaaa 11/3',login: 'aljaska',password: 'grdcoiuyre' }
  ];
  this.get('/users',function(){
    return {
      users
    } 
  });
  
  const reviews = [
    {id:0, name:'Elon Mask',
      review:'Streamline project, resource, and portfolio mana Portfolio Management.Streamline project, resource, and portfolio management with Microsoft Project and Portfolio Managemen'},
    {id:1,name:'Albert Einstein',
      review:'Streamline project, resource, and portfolio mana Portfolio Management.Streamline project, resource, and portfolio management with Microsoft Project and Portfolio Managemen'},
    {id:2,name:'Steve Jobs',
      review:'Streamline project, resource, and portfolio mana Portfolio Management.Streamline project, resource, and portfolio management with Microsoft Project and Portfolio Managemen'},
    {id:3,name:'Curt Cobain',
      review:'Streamline project, resource, and portfolio mana Portfolio Management.Streamline project, resource, and portfolio management with Microsoft Project and Portfolio Managemen'}
  ];
  this.get('/reviews',function(){
    return {
      reviews
    } 
  });
  this.post('/reviews', (schema, request) => {
    const attrs = JSON.parse(request.requestBody).review;
    return schema.reviews.create(attrs);
  });
  this.post('/portfolios', (schema, request) => {
    const attrs = JSON.parse(request.requestBody).portfolios;
    return schema.portfolios.create(attrs);
  });
  this.del('/reviews/:id', (schema,request) => {
    reviews.splice(request.params.id,1);
  });
  const administrators = [
    {id: 0, login: 'admin', password: 'killme'}
  ];
  this.get('/administrators',function(){
    return {
      administrators
    } 
  });
  this.del('/portfolios/:id', (schema,request) => {
    portfolios.splice(request.params.id,1);
  });
  // this.put('/portfolios/:id', (schema, request) => {
  //   var id = request.params.id;
  //   const attrs = JSON.parse(request.requestBody).portfolios;
  //   return schema.portfolios.update(id, attrs);
    
  // });
  this.put('/portfolios/:id', function(schema, request) {
    var id = request.params.id;
    // var attrs = JSON.parse(request.requestBody).portfolios;
    return portfolios.forEach(function(obj) {
      if (obj.id === id) {
        obj.id['type'] = request.queryParams.type;
        obj.id['src'] = request.queryParams.src;
      }
    }
    )
  });
  // These comments are here to help you get started. Feel free to delete them.
  // 
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
