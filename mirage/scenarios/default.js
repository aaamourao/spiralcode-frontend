//
// Seed SpiralCode-Frontend DB
//
// made by madc0w
//
//import { faker } from 'ember-cli-manage';

export default function(server){
  var posts = server.createList('post', 10, 'withComments');
  posts.forEach(function(post){
    server.create('tag', {posts: {post}})
  });
}
