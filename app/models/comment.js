//
// Comment model
//
// made by madc0w
//
import DS from 'ember-data';

export default DS.Model.extend({
  post: DS.belongsTo('post'),
  email: DS.attr(),
  nick: DS.attr('string', {
    defaultValue(){
      return 'anonymous';
    }
  }),
  text: DS.attr('string'),
  date: DS.attr('date', {
    defaultValue(){
      return new Date();
    }
  })
});
