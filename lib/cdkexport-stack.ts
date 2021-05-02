import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';

export class CdkexportStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    
    const bucket = new s3.Bucket(this, 'bucket', {
      removalPolicy: cdk.RemovalPolicy.DESTROY
    })
    
    const s3bucketname_exportname = this.node.tryGetContext('s3bucketname_exportname')

    new cdk.CfnOutput(this, 'output', {
      value: bucket.bucketName,
      exportName: s3bucketname_exportname
    })
  }
}
