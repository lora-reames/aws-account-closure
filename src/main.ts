import { App, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { AccountClosureStepFunction } from './constructs/account-closure';

export class AccountClosureStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps = {}) {
    super(scope, id, props);
    new AccountClosureStepFunction(this, 'account-closure', {});
  }
}

// for development, use account/region from cdk cli
const env = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
};

const app = new App();

new AccountClosureStack(app, 'aws-account-closure', { env });

app.synth();