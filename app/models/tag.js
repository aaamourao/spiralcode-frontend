//
// Post's tag model
// made by madc0w
//
import DS from 'ember-data';

export default DS.Model.extend({
  posts: DS.hasMany('post'),
  name: DS.attr('string')
});
