import { useState, useEffect } from "react";

import {
    //Auth, 
    Storage,
    API,
} from 'aws-amplify';

import Text from 'aws-northstar/components/Text';
import Box from 'aws-northstar/layouts/Box';

import KeyValuePair from 'aws-northstar/components/KeyValuePair';
import ColumnLayout, { Column } from 'aws-northstar/layouts/ColumnLayout';
import Stack from 'aws-northstar/layouts/Stack';
import StatusIndicator from 'aws-northstar/components/StatusIndicator';
import Link from 'aws-northstar/components/Link';
import LoadingIndicator from 'aws-northstar/components/LoadingIndicator';
import Inline from 'aws-northstar/layouts/Inline';

function fromTimestamptoDateTimeString(timestamp){
    var dt = new Date(timestamp * 1000);
    var year = dt.getFullYear();
    var month = dt.getMonth();
    var date = dt.getDate();
    var hour = dt.getHours();
    var min = dt.getMinutes();
    var sec = dt.getSeconds();
    var time = year + '-' + (month+1) + '-' + date + ' ' + hour + ':' + min + ':' + sec ;
    return time;
}

function resolveCameraName( name )
{
    // Remove UUID part
    // e.g. Laptop1d2c6588d-d4df-4343-84d5-3e873a918cb2 -> Laptop1

    return name.substring( 0, name.length - 36 );
}

function EventComponent(props){

    const [image, setImage] = useState(
        <LoadingIndicator/>
    );

    // FIXME : should use better logic to find the path (e.g. regex)
    const s3_path = props.item.image.split("/")
    const image_filename = s3_path[ s3_path.length - 1 ]

    const dt = fromTimestamptoDateTimeString( props.item.timestamp );

    const camera_name = resolveCameraName( props.item["camera-name"] );

    useEffect(
        () => {
            const opt = {
                level: "public"
            };
            Storage.get(image_filename, opt).then(
                value => {
                    setImage(
                        <img width="300px" src={value} alt=""></img>
                    );
                }
            ).catch(
                err => {
                    setImage(
                        ""
                    );
                }
            );
        },
        []
    );

    var status_indicator = <StatusIndicator statusType="positive">OK</StatusIndicator>;
    if (props.item.security_insights.is_tailgating) {
        status_indicator = <StatusIndicator statusType="negative">Tailgating</StatusIndicator>;
    }

    return (
        <div>
            <ColumnLayout>
                <Column key="column1">
                    {image}
                </Column>
                <Column key="column2">
                    <Stack>
                        <KeyValuePair label="Status" value={status_indicator}></KeyValuePair>
                        <KeyValuePair label="Camera" value={camera_name}></KeyValuePair>
                        <KeyValuePair label="Timestamp" value={dt}></KeyValuePair>
                    </Stack>
                </Column>
            </ColumnLayout>
            <hr/>
        </div>
    );
}

function EventsList(){

    const [content, setContent] = useState("");

    useEffect(
        () => {
            API.get("restapi", "/event").then(

                response => {
        
                    console.log(response);
        
                    const components = []
                    for (let item of response) {
                        components.push(
                            <EventComponent item={item} key={item.camera + item.timestamp}></EventComponent>
                        );
                    }
                
                    setContent( components )
                }
            ).catch(
                err => {
                    console.log(err)
                }
            );        
        },
        []
    );

    return (
        <div>
            {content}
        </div>
    );
}

function Pagination(props){

    const s_prev = "< Prev";
    const s_next = "Next >";

    return (
        //<Box display="flex" marginTop="10px" marginBottom="10px" alignSelf="center" alignItems="center" alignContent="center">
        <Box>
            <Inline spacing="none">
                <Link href="/events?page=1">&nbsp;{s_prev}&nbsp;</Link>
                <Text>&nbsp;1&nbsp;</Text>
                <Link href="/events?page=2">&nbsp;2&nbsp;</Link>
                <Link href="/events?page=3">&nbsp;3&nbsp;</Link>
                <Link href="/events?page=3">&nbsp;{s_next}&nbsp;</Link>
            </Inline>
        </Box>
    );    
}

function EventsPage(props){

    console.log(props);

    return (
        <div>
            <Pagination></Pagination>
            <EventsList></EventsList>
        </div>
    );
}

export default EventsPage;
