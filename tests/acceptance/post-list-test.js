import { test } from 'qunit';
import moduleForAcceptance from 'spiralcode-frontend/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | post list');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/blog', 'should redirect automatically');
  });
});
