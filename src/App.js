import NorthStarThemeProvider from 'aws-northstar/components/NorthStarThemeProvider';
import AppLayout from 'aws-northstar/layouts/AppLayout';
import Header from 'aws-northstar/components/Header';
import SideNavigation from 'aws-northstar/components/SideNavigation';
import { SideNavigationItemType } from 'aws-northstar/components/SideNavigation';
import Icon from 'aws-northstar/components/Icon';

import ChartsPage from './pages/ChartsPage';
import EventsPage from './pages/EventsPage';
import AddOnsPage from './pages/AddOnsPage';
import AboutPage from './pages/AboutPage';

import {
    BrowserRouter,
    Route,
    Switch,
    //Link,
} from 'react-router-dom';

function HomePage(props) {
    return NotImplementedPage()
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

function App() {

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

    /*
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
    */

    const navigation = <SideNavigation header={navigation_header} items={navigation_items} />
    //const breadcrumbs = <BreadcrumbGroup items={breadcrumbs_items} />

    return (
        <NorthStarThemeProvider>
            <BrowserRouter>
                <AppLayout header={header} navigation={navigation} >
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/charts" component={ChartsPage} />
                        <Route exact path="/events" component={EventsPage} />
                        <Route exact path="/addons" component={AddOnsPage} />
                        <Route exact path="/notimplemented" component={NotImplementedPage} />
                        <Route exact path="/about" component={AboutPage} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </AppLayout>
            </BrowserRouter>
        </NorthStarThemeProvider>
    );
}

//export default withAuthenticator(App);
export default App;
