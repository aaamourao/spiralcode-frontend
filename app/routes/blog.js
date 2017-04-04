import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.get('store').query(
      'post',
      {
        include: 'tags',
        limit: 5,
        offset: 0
      }
    );
  }
});
