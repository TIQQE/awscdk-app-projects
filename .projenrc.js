const { JsiiProject, NpmAccess } = require('projen');
const project = new JsiiProject({
  author: 'Erik Lundevall-Zara',
  authorAddress: 'erik.lundevall@tiqqe.com',
  defaultReleaseBranch: 'main',
  name: 'awscdk-app-projects',
  packageName: '@TIQQE/awscdk-app-projects',
  repositoryUrl: 'git@github.com:TIQQE/awscdk-app-projects.git',
  githubOptions: {
    mergify: false,
  },
  gitignore: [
    '.idea/',
  ],
  licensed: false,
  peerDeps: [
    'projen',
  ],
  minNodeVersion: '14.15.0',
  npmAccess: NpmAccess.PUBLIC,
  description: 'Collection of project types for setting up AWS CDK-based apps with Typescript',
});
project.synth();