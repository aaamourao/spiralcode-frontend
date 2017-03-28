import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      posts: this.get('store').findAll('post'),
      tags: this.get('store').findAll('tag')
    });
  }
});
