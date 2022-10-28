import pprint
import json
import datetime

import boto3
from boto3.dynamodb.conditions import Key, Attr

def handler(event, context):

    print( f"Lambda function called : event={event}")

    dynamodb = boto3.resource('dynamodb')

    table = dynamodb.Table( "tailgatingTable" )

    # get recent N items
    query_response = table.query( 
        KeyConditionExpression=Key('app-name').eq('demo'),
        ScanIndexForward=False,
        Limit=100,
    )

    print("Response from DDB:", query_response)

    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        'body': json.dumps(query_response["Items"])
    }
