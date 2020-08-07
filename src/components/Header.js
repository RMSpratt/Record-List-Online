import React from 'react';
import {Link} from 'gatsby';

export default function Header(props) {

    //The information for the first navigation link
    let firstNavLocation = null;
    let firstNavTitle = null;

    //The information for the second navigation link
    let secondNavLocation = null;
    let secondNavTitle = null;

    //The title of the page the user is currently on
    let pageTitle = null;

    //Form the navigation links based on the current page
    switch(props.page) {
        case "artists": 
            firstNavLocation = "/";
            secondNavLocation = "/list";
            firstNavTitle = "Homepage";
            secondNavTitle = "Complete List of Records";
            pageTitle = "List of Artists";
            break;

        case "list": 
            firstNavLocation = "/";
            secondNavLocation = "/artists"
            firstNavTitle = "Homepage";
            secondNavTitle = "List of Artists";
            pageTitle = "Complete List of Records";
            break;

        default: 
            firstNavLocation = "/list";
            secondNavLocation = "/artists";
            firstNavTitle = "Complete List of Records";
            secondNavTitle = "List of Artists";
            pageTitle = "Dave's Record List";
            break;
    }

    return (
        <header>
            <h1>{pageTitle}</h1>
            <Link to={firstNavLocation} className="navLink">{firstNavTitle}</Link>
            <Link to={secondNavLocation} className="navLink">{secondNavTitle}</Link>
        </header>
    );
}