import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('post', 'Unit | Model | post', {
  beforeEach() {
  },
  afterEach(){
  },
  // Specify the other units that are required for this test.
  needs: ['model:tag', 'model:comment']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

test('should have a list of tags and a list of comments', function(assert){
  // Get post model from the store
  const Post = this.store().modelFor('post');

  // Get tags attr from post model
  const tagRelationship = Ember.get(Post,'relationshipsByName').get('tags');

  assert.equal(tagRelationship.key, 'tags', 'has relationship with tag model');
  assert.equal(tagRelationship.kind, 'hasMany', 'has many tags');

  // Get comments attr from post model
  const comRelationship = Ember.get(Post,'relationshipsByName').get('comments');

  assert.equal(comRelationship.key, 'comments', 'has relationship with comment model');
  assert.equal(comRelationship.kind, 'hasMany', 'has many comments');
});
