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
        "cvsecurity": {
            "GraphQLAPIKeyOutput": "string",
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    },
    "storage": {
        "s3cvsecuritystorage99cc675e": {
            "BucketName": "string",
            "Region": "string"
        }
    }
}