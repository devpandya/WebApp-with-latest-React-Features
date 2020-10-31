import React, { Fragment } from 'react';
import Header from '../Master/Header';
import Startup from './Components/Startup';

const menus =[
    {MenuId: 1, MenuTitle:"Home", MenuTarget:"Home", IsScrollTo:true},
    {MenuId: 2, MenuTitle:"Contact", MenuTarget:"Contact", IsScrollTo:true},
    {MenuId: 3, MenuTitle:"Blogs", MenuTarget:"Blogs", IsScrollTo:false}
];


function Landing(props) {
    return (
        <Fragment>
            <Header menus={menus}/>
            <Startup/>
        </Fragment>
    );
}

export default Landing;