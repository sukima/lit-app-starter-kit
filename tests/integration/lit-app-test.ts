import { module, test } from 'qunit';
import { setupTest, render } from '../helpers';

module('Integration | Component | lit-app', function (hooks) {
  setupTest(hooks);

  test('it works', function (assert) {
    render(`<lit-app id="foobar"></lit-app>`);
    assert.ok(document.querySelector('#foobar'));
  });
});
