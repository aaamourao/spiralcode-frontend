import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('comment', 'Unit | Model | comment', {
  // Specify the other units that are required for this test.
  needs: ['model:post']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

test('should belong to a post', function(assert){
  // Get comment model from the store
  const Comment = this.store().modelFor('comment');

  // Get post attr from comment model
  const relationship = Ember.get(Comment, 'relationshipsByName').get('post');

  assert.equal(relationship.key, 'post', 'has a relationship with post model');
  assert.equal(relationship.kind, 'belongsTo', 'is owned by a post');
});
