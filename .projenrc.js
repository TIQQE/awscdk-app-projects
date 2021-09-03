const { JsiiProject } = require('projen');
const project = new JsiiProject({
  author: 'Erik Lundevall Zara',
  authorAddress: '45368867+eriklz@users.noreply.github.com',
  defaultReleaseBranch: 'main',
  name: 'awscdk-app-projects',
  repositoryUrl: 'git@github-as-eriklztiqqe:TIQQE/awscdk-app-projects.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
  // release: undefined,      /* Add release management to this project. */
});
project.synth();