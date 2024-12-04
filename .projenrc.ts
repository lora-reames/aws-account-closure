import { awscdk, javascript } from 'projen';
const project = new awscdk.AwsCdkTypeScriptApp({
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'aws-account-closure',
  packageManager: javascript.NodePackageManager.NPM,
  projenrcTs: true,
  deps: [
    '@aws-solutions-constructs/aws-eventbridge-stepfunctions',
  ] /* Runtime dependencies of this module. */,
  description:
    'cdk application for automating AWS account closure and dealing with the AWS close account quota ',
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
  gitIgnoreOptions: {
    ignorePatterns: ['.DS_STORE'],
  },
});
project.synth();