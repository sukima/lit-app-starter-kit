import * as QUnit from 'qunit';
import * as QUnitDOM from 'qunit-dom';
import { getContainer } from './helpers';

QUnit.config.urlConfig.push({ id: 'nocontainer', label: 'Hide container' });
QUnit.config.urlConfig.push({ id: 'devmode', label: 'Development mode' });

let container = getContainer();
container.classList.toggle('testing-container-full-screen', Boolean(QUnit.urlParams.devmode));
container.classList.toggle('testing-container-hidden', Boolean(QUnit.urlParams.nocontainer));

QUnitDOM.setup(QUnit.assert, { getRootElement: () => container });
