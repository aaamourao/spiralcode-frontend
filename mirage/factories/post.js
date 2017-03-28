//
// Posts factory:
// >>Including all tags in each post
//
// made by madc0w
//
import { Factory, faker, trait } from 'ember-cli-mirage';

export default Factory.extend({
  title(){
    return faker.hacker.phrase();
  },
  author: 'madc0w',
  date(){
    return faker.date.past();
  },
  content(){
    return faker.lorem.text();
  },
  images(){
    return "TODO TODO TODO";
  },
  withComments: trait({
    afterCreate(post){
      post.createComment('comment');
    }
  })
});
