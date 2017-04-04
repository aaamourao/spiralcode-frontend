//
// Posts factory:
// >>Including all tags in each post
//
// made by madc0w
//
import { Factory, faker, trait } from 'ember-cli-mirage';

export default Factory.extend({
  title: faker.hacker.phrase,
  author: 'madc0w',
  date: faker.date.past,
  withExclusiveTag: trait({
    afterCreate(post){
      post.createTag('exclusive');
    }
  }),
  content: faker.hacker.phrase() + faker.lorem.text() ,
  images(){
    return "TODO TODO TODO";
  },
  withCommentAndTag: trait({
    afterCreate(server, post){
      server.create('comment', post);
      server.create('tag', post);
    }
  })
});
