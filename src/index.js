import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Other from './Other';
import reportWebVitals from './reportWebVitals';

//import  {AmplifyProvider} from "@aws-amplify/ui-react"
import awsconfig from "./aws-exports"
import {Amplify} from "aws-amplify"
Amplify.configure(awsconfig);

//const root = ReactDOM.createRoot(document.getElementById('root'));

/*
root.render(
  <React.StrictMode>
    <AmplifyProvider>
      <App/>
    </AmplifyProvider>
  </React.StrictMode>
);
*/

ReactDOM.render(
  (
      <Other/>
  ),
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
