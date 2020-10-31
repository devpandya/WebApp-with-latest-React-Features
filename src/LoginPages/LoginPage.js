import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Input from "../CustomControls/Input";
import './login.css';
import '../Css/spacing.css';
import Button from "../CustomControls/Button";
import { Login } from './User';
import { CurrentContext } from "../utility/AppContext"
import BeforeLoginContainer from "../ContainerPages/BeforeLoginContainer";
import { GetResourceText } from "../Data/Resources";
import Anchor from "../CustomControls/Anchor";


const LoginPage = props => {
    const [username, setUsername] = useState({});
    const history = useHistory();
    const [password, setPassword] = useState({});
    const [pageError, setPageError] = useState("");
    const SetUser = CurrentContext().SetUser;
    const onLoginClick = () => {

        if (username.isValid && password.isValid) {
            let userData = Login(username.value, password.value);
            if (userData.ErrorCode === "OK") {
                setUsername({ value: '', isValid: false });
                setPassword({ value: '', isValid: false })
                SetUser(userData.UserData);

                ///////////////////////////////
                //Extra Handling to be put here
                ///////////////////////////////

                setPageError("");
                history.push('/dashboard');
                return;
            }
            SetUser(userData.UserData);
            setPageError(userData.ErrorCode);
        }
        else {
            SetUser({ isLoggedIn: false });
            setPageError(GetResourceText('invalidCredentials'));
        }
    }

    return (
        <BeforeLoginContainer title={GetResourceText('login')} pageError = {pageError}>
            <Input name="username" hasLabel value={username.value} getValue={e => setUsername(e)} />
            <Input name="password" hasLabel value={password.value} getValue={e => setPassword(e)} />
            <Button className="primary-button" name="login" onClick={onLoginClick} />
            <div style={{display:"flex",justifyContent:"space-between"}}>
                <Anchor className="p-top-md" name="register" navigateTo="/register" ></Anchor>
                <Anchor className="p-top-md" name="forgotpassword" navigateTo="/forgotpassword" ></Anchor>
            </div>
        </BeforeLoginContainer>
    );
};

export default LoginPage;