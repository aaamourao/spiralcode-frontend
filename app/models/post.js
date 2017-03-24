import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  author: DS.attr('string'),
  date: DS.attr('date'),
  tags: DS.attr('string'),
  content: DS.attr('string')
});
