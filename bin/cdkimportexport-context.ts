#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkexportStack } from '../lib/cdkexport-stack';
import { CdkimportStack } from '../lib/cdkimport-stack';

const app = new cdk.App();
new CdkimportStack(app, 'CdkimportStack', {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION }
});
new CdkexportStack(app, 'CdkexportStack', {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION }
});