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

function func1_img( setContent ) {

    const opt = {
        level : "public"
    };

    Storage.get( "sample.jpg", opt ).then(
        value => {
            setContent(
                <img width="300px" src={value} alt="aaa"></img>
            );
        }
    );
}

function func1_txt( setContent ) {

    const opt = {
        level : "public",
        download : true,
    };

    Storage.get( "sample.txt", opt ).then(
        value => {
            value.Body.text().then(
                data => {
                    const arr = data.split("\n");
                    const res = [];
                    for( let item of arr ){
                        res.push( <li>{item}</li> );
                    }

                    setContent(
                        <ul>{res}</ul>
                    );
                            
                }
            );
        }
    );
}

//const func1 = func1_img;
const func1 = func1_txt;

function Other() {
    const [content, setContent] = useState("");

    useEffect( 
        ()=>{
            func1(setContent);
        },
        []
    );

    return (
        <div>
            <HeaderComponent className="my-4">
            </HeaderComponent>
            <p>Other.jsの画面です</p>
            <div className="border border-primary px-3 py-2">
                {content}
            </div>
        </div>
    );
}

export default withAuthenticator(Other);
