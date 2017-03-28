//
// Post model
//
// made by madc0w
//
import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  author: DS.attr('string', {
    defaultValue(){
      return 'madc0w'
    }
  }),
  date: DS.attr('date', {
    defaultValue(){
      return new Date();
    }
  }),
  tags: DS.hasMany('tag'),
  content: DS.attr('string'),
  images: DS.attr('string'),
  comments: DS.hasMany('comment')
});
