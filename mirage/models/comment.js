//
// Comment model for
// ember-cli-mirage
//
// made by madc0w
//
import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  post: belongsTo('post')
});
