//
// Post model for
// ember-cli-mirage
//
// made by madc0w
//
import { Model, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  tags: hasMany('tag'),
  comments: hasMany('comment')
});
