export default function() {
  this.namespace = '/api';

  let blog = [{
    type: 'posts',
    id: 'xss-injection',
    attributes: {
      title: 'XSS Injection Attack Overview',
      author: 'madc0w',
      date: '2017-03-23',
      tag: 'hacking',
      content: 'dhasuidusahdasid hdusiahduahsuhdiasu dahsiudhasu'
    }
  }, {
  type: 'posts',
    id: 'graph-alg-opencl',
    attributes: {
      title: 'Graph-Path Algorithms on OpenCL',
      author: 'madc0w',
      date: '2017-03-20',
      tag: 'algorithms',
      content: 'dhasuidusahdasid hdusiahduahsuhdiasu dahsiudhas'
    }
  }, {
    type: 'posts',
    id: 'ctf-roadsec',
    attributes: {
      title: 'Catch the Flag Clues: Roadsec',
      author: 'madc0w',
      date: '2017-03-15',
      tag: 'hacking',
      content: 'dhasuidusahdasid hdusiahduahsuhdiasu dahsiudhas'
    }
  }];

  this.get('/posts', function() {
    return {
      data: blog
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
