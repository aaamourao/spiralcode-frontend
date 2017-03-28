//
// Comment factory:
// >>Including all tags in each post
//
// made by madc0w
//
import { Factory, faker, association } from 'ember-cli-mirage';

export default Factory.extend({
  post: association(),
  email: faker.internet.email(),
  nick: faker.internet.userName(),
  text: faker.lorem.text(),
  date: faker.date.past()
});
