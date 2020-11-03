import React, { Fragment, useState, useEffect } from 'react';
import { AppContextProvider } from './AppContext';
import Routers from './Routers';
import axios from 'axios';
const Header = React.lazy(()=> import('../Master/Header'));

const menus =[
    {MenuId: 1, MenuTitle:"Home", MenuTarget:"Home", IsScrollTo:true},
    {MenuId: 2, MenuTitle:"Contact", MenuTarget:"Contact", IsScrollTo:true},
    {MenuId: 3, MenuTitle:"Blogs", MenuTarget:"Blogs", IsScrollTo:false}
];

function App(props) {
    const [user, setUser] = useState({});
    const [masterData, setMasterData] = useState({});
    const [style, setStyle] = useState({direction:"ltr"});
    const [dataFetched, setDataFetched]= useState(false);
    useEffect(()=>{
        axios({
            method:'get', 
            url:"http://localhost:5000/getmaster",
            
        }).then(resp =>{
            setMasterData(resp.data);
            setDataFetched(true);
        })
    },[])
    if(!dataFetched)
    {
        return <label>{"...Loading..."}</label>
    }
    return (
        <div style={style}>
            <AppContextProvider User={user} SetUser={setUser} Style={style} SetStyle={setStyle} MasterData={masterData} SetMasterData={setMasterData}>
                <Fragment>
                    {
                        user && user.isLoggedIn && <Header menus={menus}/>
                    }
                    <Routers />
                </Fragment>
            </AppContextProvider>
        </div>
    );
}

export default App;


