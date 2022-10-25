import json
import datetime

def handler(event, context):

    print('received event:')
    print(event)

    data = [
        {
            "camera" : "Front door 1",
            "timestamp" : datetime.datetime.now().isoformat(),
            "image" : "cab650cd-5d57-4b17-861e-a1c5cd35e510.jpg",
            "security_insights" : {
                "tailgating" : False
            }
        },
        {
            "camera" : "Front door 2",
            "timestamp" : datetime.datetime.now().isoformat(),
            "image" : "0cfad418-1b95-4fd0-9b6e-cb1688f29008.jpg",
            "security_insights" : {
                "tailgating" : False
            }
        },
        {
            "camera" : "Back door 1",
            "timestamp" : datetime.datetime.now().isoformat(),
            "image" : "026c799e-d077-4f7c-9e78-8c73990604a1.jpg",
            "security_insights" : {
                "tailgating" : True
            }
        },
    ]

    print( "Returning ", data )

    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        'body': json.dumps(data)
    }
