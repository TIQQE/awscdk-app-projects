import { AwsCdkTypeScriptApp, AwsCdkTypeScriptAppOptions } from 'projen';

/**
 * Options for AwsCdkSimpleAppTs
 */
export interface AwsCdkSimpleTsAppOptions extends AwsCdkTypeScriptAppOptions {
  /**
   * Changes default settings more suitable to closed source projects.
   * The settings affected are:
   *
   * - **mergify** - defaults to false, i.e. not enabling a Mergify configuration
   * - **licensed** - defaults to false, i.e. no license information added
   * @default true
   * @featured
   */
  readonly closedSource?: boolean;
}

/**
 * Creates a simple sample AWS CDK App in Typescript.
 * @pjid awscdk-simple-app-ts
 */
export class AwsCdkSimpleTsApp extends AwsCdkTypeScriptApp {
  constructor(options: AwsCdkSimpleTsAppOptions) {
    super({
      licensed: options.closedSource === undefined ? false : !options.closedSource,
      githubOptions: {
        ...options.githubOptions,
        mergify: options.closedSource === undefined ? false : !options.closedSource,
      },
      ...options,
      cdkVersion: options.cdkVersion ?? '1.116.0',
    });
  }
}