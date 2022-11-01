import { useState, useEffect } from "react";

import {
    //Auth, 
    Storage,
    API,
} from 'aws-amplify';

import NorthStarThemeProvider from 'aws-northstar/components/NorthStarThemeProvider';
import AppLayout from 'aws-northstar/layouts/AppLayout';
import Header from 'aws-northstar/components/Header';
import SideNavigation from 'aws-northstar/components/SideNavigation';
import { SideNavigationItemType } from 'aws-northstar/components/SideNavigation';
import BreadcrumbGroup from 'aws-northstar/components/BreadcrumbGroup';
//import Button from 'aws-northstar/components/Button';
import Icon from 'aws-northstar/components/Icon';

import KeyValuePair from 'aws-northstar/components/KeyValuePair';
//import Container from 'aws-northstar/layouts/Container';
import ColumnLayout, { Column } from 'aws-northstar/layouts/ColumnLayout';
import Stack from 'aws-northstar/layouts/Stack';
import StatusIndicator from 'aws-northstar/components/StatusIndicator';
import Link from 'aws-northstar/components/Link';
import LoadingIndicator from 'aws-northstar/components/LoadingIndicator';

import Table from 'aws-northstar/components/Table';
import { useMemo, useCallback, useRef } from 'react';
import orderBy from 'lodash/orderBy';

import {
    BrowserRouter,
    Route,
    Switch,
    //Link,
} from 'react-router-dom';

function HomePage(props) {
    return NotImplementedPage()
}

function AboutPage(props) {
    return (
        <div>
            <p>This is About page.</p>
        </div>
    );
}

function NotImplementedPage(props){
    return (
        <div>
            <h2>Not implemented.</h2>
        </div>
    );
}

function NotFoundPage(props) {
    return (
        <div>
            <p>This is NotFound page.</p>
        </div>
    );
}

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

function GateEventComponent_Column(props){

    const [image, setImage] = useState(
        <LoadingIndicator/>
    );

    // FIXME : should use better logic to find the path (e.g. regex)
    const s3_path = props.item.image.split("/")
    const image_filename = s3_path[ s3_path.length - 1 ]

    var security_insights = "OK";
    if (props.item.security_insights.is_tailgating) {
        security_insights = "Tailgating";
    }

    var dt = fromTimestamptoDateTimeString( props.item.timestamp );

    var camera_name = resolveCameraName( props.item["camera-name"] );

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


    const Status = <StatusIndicator statusType="positive">Available</StatusIndicator>;

    return (
        <div>
            <ColumnLayout>
                <Column key="column1">
                    {image}
                </Column>
                <Column key="column2">
                    <Stack>
                        <KeyValuePair label="Status" value={Status}></KeyValuePair>
                    </Stack>
                </Column>
                <Column key="column3">
                    <Stack>
                        <KeyValuePair label="Camera" value={camera_name}></KeyValuePair>
                        <KeyValuePair label="Timestamp" value={dt}></KeyValuePair>
                    </Stack>
                </Column>
            </ColumnLayout>
            <hr/>
        </div>
    );
}

function GateEventComponent(props) {

    const [image, setImage] = useState("");

    // FIXME : should use better logic to find the path (e.g. regex)
    const s3_path = props.item.image.split("/")
    const image_filename = s3_path[ s3_path.length - 1 ]

    var security_insights = "OK";
    if (props.item.security_insights.is_tailgating) {
        security_insights = "Tailgating";
    }

    var dt = fromTimestamptoDateTimeString( props.item.timestamp );

    var camera_name = resolveCameraName( props.item["camera-name"] );

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

    return (
        <div style={{ border:"2px solid black", padding:"10px" }}>
            <p>Camera : {camera_name}</p>
            <p>Timestamp : {dt}</p>
            <p>Security insights : {security_insights}</p>
            {image}
        </div>
    );
}

function GateEventListPage(){

    const [content, setContent] = useState("");

    useEffect(
        () => {
            API.get("api60ee79cf", "/gateevent").then(

                response => {
        
                    console.log(response);
        
                    const components = []
                    for (let item of response) {
                        components.push(
                            //<GateEventComponent item={item} key={item.camera + item.timestamp}></GateEventComponent>
                            <GateEventComponent_Column item={item} key={item.camera + item.timestamp}></GateEventComponent_Column>
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

function TableListTestPage(){

    const columnDefinitions = [
        {
            id: 'id',
            width: 200,
            Header: 'Id',
            accessor: 'id'
        },
        {
            id: 'name',
            width: 200,
            Header: 'Name',
            accessor: 'name'
        },
    ];
    
    const [items, setItems] = useState([]);
    const [rowCount, setRowCount] = useState(0);
    const [loading, setLoading] = useState(false);
    const fetchIdRef = useRef(0);
    const data = useMemo(() => {
        const data = [];
        for (let i = 0; i < 1000; i++) {
            data.push({
                id: i,
                name: `Name ${i}`,
            });
        }
    
        return data;
    }, []);
    const handleFetchData = useCallback(options => {
        setLoading(true);
        const fetchId = ++fetchIdRef.current;
        setTimeout(() => {
            if (fetchId === fetchIdRef.current) {
                // You could fetch your data from server.
                const filterData = data.filter(d => {
                    if (options.filterText) {
                        return d.name.indexOf(options.filterText) >= 0;
                    }
    
                    return true;
                });
                let tempData = filterData.slice(
                    options.pageIndex * options.pageSize,
                    (options.pageIndex + 1) * options.pageSize
                );
                if(options.sortBy && options.sortBy.length > 0) {
                    tempData = orderBy(tempData, options.sortBy[0].id, options.sortBy[0].desc ? 'desc': 'asc');
                }
                setItems(tempData);
                setRowCount(filterData.length);
                setLoading(false);
            }
        }, 1000);
    }, []);
    
    return (
        <Table
            tableTitle='Remote Update Table'
            columnDefinitions={columnDefinitions}
            onFetchData={handleFetchData}
            rowCount={rowCount}
            items={items}
            loading={loading}
        />
    );
}


function Other() {

    const header = <Header
        title={"Panorama Security App"}
        rightContent={
            //<Button variant="primary">Button test</Button>
            <Icon name="AccountCircle" fontSize="large" variant="Outlined"/>
        }
    />;
    
    const navigation_header = {
        href: "/",
        text: 'Menu'
    };

    const navigation_items = [
        {
            "type": SideNavigationItemType.LINK,
            "text": "Charts",
            "href": "/charts"
        },
        {
            "type": SideNavigationItemType.LINK,
            "text": "Events",
            "href": "/events"
        },
        {
            "type": SideNavigationItemType.LINK,
            "text": "Live Cameras",
            "href": "/livecameras"
        },
        {
            "type": SideNavigationItemType.LINK,
            "text": "Advanced",
            "href": "/advanced",
            "items" : [
                {
                    "type": SideNavigationItemType.LINK,
                    "text": "Manage Accounts",
                    "href": "/accounts"
                },
                {
                    "type": SideNavigationItemType.LINK,
                    "text": "Archived Data",
                    "href": "/archives"
                },
                {
                    "type": SideNavigationItemType.LINK,
                    "text": "Manage AI Model",
                    "href": "/model"
                },
                {
                    "type": SideNavigationItemType.LINK,
                    "text": "Add-ons",
                    "href": "/addons"
                },
            ],
        },

        {
            "type": SideNavigationItemType.LINK,
            "text": "Help",
            "href": "/help",
            "items" : [
                {
                    "type": SideNavigationItemType.LINK,
                    "text": "Documents",
                    "href": "/documents"
                },
                {
                    "type": SideNavigationItemType.LINK,
                    "text": "Report issues",
                    "href": "/reportissues"
                },
            ],
        },
        {
            "type": SideNavigationItemType.LINK,
            "text": "About this application",
            "href": "/about"
        },
    ];

    const breadcrumbs_items = [
        {
            text: "Home",
            href: "/",
        },
        {
            text: "AAA",
            href: "/",
        },
        {
            text: "BBB",
            href: "#",
        }
    ];

    const navigation = <SideNavigation header={navigation_header} items={navigation_items} />
    const breadcrumbs = <BreadcrumbGroup items={breadcrumbs_items} />

    return (
        <NorthStarThemeProvider>
            <BrowserRouter>
                <AppLayout header={header} navigation={navigation} breadcrumbs={breadcrumbs} >
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/events" component={GateEventListPage} />
                        <Route exact path="/livecameras" component={TableListTestPage} />
                        <Route exact path="/notimplemented" component={NotImplementedPage} />
                        <Route exact path="/about" component={AboutPage} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </AppLayout>
            </BrowserRouter>
        </NorthStarThemeProvider>
    );
}

//export default withAuthenticator(Other);
export default Other;
