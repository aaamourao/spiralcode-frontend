//
// Comment factory:
// >>Including all tags in each post
//
// made by madc0w
//
import { Factory, faker, association, trait } from 'ember-cli-mirage';

export default Factory.extend({
  withPost: trait({
    post: association()
  }),
  email: faker.internet.email(),
  nick: faker.internet.userName(),
  text: faker.lorem.text(),
  date: faker.date.past()
});
