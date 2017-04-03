//
// Config for ember-cli-mirage
//
// made by madc0w
//
export default function() {
  this.logging = true;
  this.namespace = '/api';

  this.get('/posts');
  this.post('/posts/:id');
  this.post('/posts');

  this.get('/tags');
  this.post('/tags/:id');
  this.post('/tags');

  this.get('/comments');
  this.get('/comments/:id');
  this.post('/comments');
  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server

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
