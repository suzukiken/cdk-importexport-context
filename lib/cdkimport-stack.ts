import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';

export class CdkimportStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    
    const s3bucketname_exportname = this.node.tryGetContext('s3bucketname_exportname')
    const bucket_name = cdk.Fn.importValue(s3bucketname_exportname)
    const buckt = s3.Bucket.fromBucketName(this, 'bucket', bucket_name)
  
  }
}
