import { useState, useEffect } from "react";

import '@aws-amplify/ui-react/styles.css';

import { 
    //Auth, 
    Storage 
} from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';

import { 
  HeaderComponent,
  //BoardComponent,
  //BoardComponentCollection,
  //PersonComponentCollection 
} from "./ui-components"

import { 
    BrowserRouter, 
    Route,
    Routes,
    Link,
} from 'react-router-dom';

function HomePage(props){
    return (
        <div>
            <p>This is home.</p>
        </div>
    );
}

function ListPage(props){
    return (
        <div>
            <p>This is List page.</p>
        </div>
    );
}

function AboutPage(props){
    return (
        <div>
            <p>This is About page.</p>
        </div>
    );
}

function NotFoundPage(props){
    return (
        <div>
            <p>This is NotFound page.</p>
        </div>
    );
}

function RouterTest() {

    const home_page = <HomePage/>

    return (
        <BrowserRouter>
            <h1>Router test</h1>

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

            <Routes>
                <Route path="/" element={home_page} />
                <Route path="/list" element={<ListPage/>} />
                <Route path="/about" element={<AboutPage/>} />
                <Route path="*" element={<NotFoundPage/>} />
            </Routes>
        </BrowserRouter>
  

    );
}

export default withAuthenticator(RouterTest);
