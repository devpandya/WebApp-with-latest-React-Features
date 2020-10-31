
import React,{Suspense} from 'react';
import { Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
const Dashboard = React.lazy(()=> import('../DashboardPages/Dashboard.js'));
const Landing = React.lazy(()=> import('../LandingPage/Landing.js'));
const LoginPage = React.lazy(()=> import('../LoginPages/LoginPage.js'));
const ForgotPassword = React.lazy(()=> import('../LoginPages/ForgotPassword.js'));
const RegisterUser = React.lazy(()=> import('../Users/RegisterUser.js'));

const history = createBrowserHistory();

function Routers(props) {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Router history={history}>
                <Switch>
                    <Route exact path={"/"} render={() => {return Suspension(Landing)}} />
                    <Route exact path={"/register"} render={()=>{return Suspension(RegisterUser)}} />
                    <Route exact path={"/login"} render={() => {return Suspension(LoginPage);}} />
                    <Route exact path={"/forgotpassword"} render={() => {return Suspension(ForgotPassword);}} />
                    <Route exact path={"/dashboard"} render={() => {return Suspension(Dashboard);}} />
                </Switch>       
            </Router>
        </Suspense>
    );
}

const Suspension = Suspensable => <Suspense fallback={<div>Loading...</div>}><Suspensable /></Suspense>

export default Routers;