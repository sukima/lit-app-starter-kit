import { module, test } from 'qunit';
import { setupTest, render } from '../helpers';
import { html } from 'lit';

module('Integration | Component | lit-app', function (hooks) {
  setupTest(hooks);

  test('it works', async function (assert) {
    await render(html`<lit-app class="foobar"></lit-app>`);

    assert.dom('.foobar').exists();
  });
});
