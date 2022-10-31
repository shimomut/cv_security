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
import Button from 'aws-northstar/components/Button';

import {
    BrowserRouter,
    Route,
    Switch,
    //Link,
} from 'react-router-dom';

function HomePage(props) {
    return (
        <div>
            <p>This is home.</p>
        </div>
    );
}

function AboutPage(props) {
    return (
        <div>
            <p>This is About page.</p>
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

function GateEventComponent(props) {

    const [image, setImage] = useState("");

    // FIXME : should use better logic to find the path (e.g. regex)
    const s3_path = props.item.image.split("/")
    const image_filename = s3_path[ s3_path.length - 1 ]

    var message = "Not tailgating";
    if (props.item.security_insights.is_tailgating) {
        message = "Tailgating";
    }

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
            <p>{props.item["app-name"]}</p>
            <p>{props.item["camera-name"]}</p>
            <p>{props.item.timestamp}</p>
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
                            <GateEventComponent item={item} key={item.camera + item.timestamp}></GateEventComponent>
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




function Other() {

    const header = <Header
        title={"Panorama Security App"}
        rightContent={
            <Button variant="primary">Button test</Button>
        }
    />;
    
    const navigation_header = {
        href: "/",
        text: 'Menu'
    };

    const navigation_items = [
        {
            "type": SideNavigationItemType.LINK,
            "text": "Home",
            "href": "/"
        },
        {
            "type": SideNavigationItemType.LINK,
            "text": "List",
            "href": "/list"
        },
        {
            "type": SideNavigationItemType.LINK,
            "text": "About",
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
                        <Route exact path="/list" component={GateEventListPage} />
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
