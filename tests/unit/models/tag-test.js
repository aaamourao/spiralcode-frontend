import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('tag', 'Unit | Model | tag', {
  // Specify the other units that are required for this test.
  needs: ['model:post']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

test('should have a list of related posts', function(assert){
  // Get tag model from the store
  const Tag = this.store().modelFor('tag');

  // Get posts attr from tag model
  const relationship = Ember.get(Tag, 'relationshipsByName').get('posts');

  assert.equal(relationship.key, 'posts', 'has relationship with post model');
  assert.equal(relationship.kind, 'hasMany', 'has many posts');
});
