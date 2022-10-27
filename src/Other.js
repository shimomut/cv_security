import { useState, useEffect } from "react";

//import '@aws-amplify/ui-react/styles.css';

import {
    //Auth, 
    Storage,
    API,
} from 'aws-amplify';

//import { withAuthenticator } from '@aws-amplify/ui-react';

/*
import { 
  HeaderComponent,
  //BoardComponent,
  //BoardComponentCollection,
  //PersonComponentCollection 
} from "./ui-components"
*/

import NorthStarThemeProvider from 'aws-northstar/components/NorthStarThemeProvider';
import Button from 'aws-northstar/components/Button';

import {
    BrowserRouter,
    Route,
    Switch,
    Link,
} from 'react-router-dom';

function HomePage(props) {
    return (
        <div>
            <p>This is home.</p>
        </div>
    );
}

function ListPage(props) {
    return (
        <div>
            <p>This is List page.</p>
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

    var message = "Not tailgating";
    if (props.item.security_insights.tailgating) {
        message = "Tailgating";
    }

    const opt = {
        level: "public"
    };
    Storage.get(props.item.image, opt).then(
        value => {
            setImage(
                <img width="300px" src={value}></img>
            );
        }
    ).catch(
        err => {
            setImage(
                ""
            );
        }
    );

    return (
        <div className='border border-primary px-3 py-2'>
            <p>{props.item.camera}</p>
            <p>{props.item.timestamp}</p>
            <p>{message}</p>
            {image}
        </div>
    );
}

function updateGateEvents( setContent ){
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

    return (
        <NorthStarThemeProvider>
            <BrowserRouter>
                <h1>Menu</h1>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/list">List</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>

                <h1>Contents</h1>

                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/list" component={GateEventListPage} />
                    <Route exact path="/about" component={AboutPage} />
                    <Route component={NotFoundPage} />
                </Switch>

                <Button variant="primary">Button test</Button>

            </BrowserRouter>
        </NorthStarThemeProvider>
    );
}

//export default withAuthenticator(Other);
export default Other;
