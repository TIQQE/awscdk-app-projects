import { AwsCdkSimpleTsApp } from '../src';

describe('Test closed source settings', () => {
  test('Mergify is false by default', () => {
    const project = new AwsCdkSimpleTsApp({
      cdkVersion: '1.116.0',
      defaultReleaseBranch: 'main',
      name: 'myproject',
    });

    const hasNoMergifyConfig = project.github && !project.github?.mergify;
    expect(hasNoMergifyConfig).toBeTruthy();
  });
});