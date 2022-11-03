export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "cvsecurity": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        }
    },
    "api": {
        "restapi": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    },
    "storage": {
        "s3cvsecuritystorage99cc675e": {
            "BucketName": "string",
            "Region": "string"
        }
    },
    "function": {
        "cvsecurity1561746f": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    }
}