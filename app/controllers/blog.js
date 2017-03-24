import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    filterByTitle(/*param*/){
      return this.get('store').findAll('post');
    }
  }
});
