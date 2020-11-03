
import React,{Suspense} from 'react';
import { Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import {CurrentContext } from '../utility/AppContext';
import BeforeLoginContainer from '../ContainerPages/BeforeLoginContainer.js';

const Components = {
    "Register": () =>{return React.lazy(()=> import('../Users/RegisterUser.js'));},
    "ForgotPassword": () =>{return React.lazy(()=> import('../LoginPages/ForgotPassword.js'));},
    "Login": () =>{return React.lazy(()=> import('../LoginPages/LoginPage.js'));},
}

const history = createBrowserHistory();

function Routers(props) {
    const GetFeatures = () =>{
        let currentContext = CurrentContext();
        if(currentContext.MasterData.User){
            return currentContext.MasterData.Features.find(e => e.loginrequired === true);
        }
        return currentContext.MasterData.Features;
    }

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Router history={history}>
                <Switch>
                    <Route exact path={"/"} render={() => {return Suspension(Components["Login"]())}} />
                    {
                        GetFeatures().map(i =>{
                            return <Route key={i.feature} exact path={`/${i.target}`} render={() => {return Suspension(Components[i.feature]());}} />
                        })
                    }
                </Switch>       
            </Router>
        </Suspense>
    );
}

const Suspension = Suspensable => <Suspense fallback={<BeforeLoginContainer>Loading...</BeforeLoginContainer>}><Suspensable /></Suspense>

export default Routers;