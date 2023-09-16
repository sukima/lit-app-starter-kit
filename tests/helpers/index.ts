import * as QUnit from 'qunit';

interface TestContext {
  fixture: HTMLElement | null;
  container: HTMLElement | null;
  pauseTest(): Promise<void>;
}

declare global {
  interface Window { resumeTest?(): void; }
}

export function getContainer() {
  let container = document.querySelector('#testing-container');
  if (container) return container;
  throw new ReferenceError('Missing #testing-container div');
}

export function pauseTest(): Promise<void> {
  QUnit.assert.timeout(-1);
  console.info('Testing paused. Use `resumeTest()` to continue.');
  return new Promise(resolve => {
    window.resumeTest = () => {
      resolve();
      window.resumeTest = undefined;
    };
  });
}

export function setupTest(hooks: QUnit['hooks']) {
  hooks.beforeEach(function (this: TestContext) {
    this.fixture = document.getElementById('qunit-fixture');
    this.container = document.getElementById('testing-container');
    this.pauseTest = pauseTest;
  });
}

export function render(innerHTML: string) {
  getContainer().innerHTML = innerHTML;
}
