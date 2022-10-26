import * as React from "react";
import { useState, useEffect } from "react";

//import '@aws-amplify/ui-react/styles.css';
//import { withAuthenticator } from '@aws-amplify/ui-react';

import Button from '@mui/material/Button';

import Dashboard from "./mui-test/Dashboard"

function MuiTest() {

    return (
        <React.Fragment>
            <Head>
                <meta name="robots" content="noindex,nofollow" />
            </Head>
            <Dashboard/>
        </React.Fragment>
    );
}

//export default withAuthenticator(MuiTest);
export default MuiTest;
