import React, { useState } from 'react';
import BeforeLoginContainer from '../ContainerPages/BeforeLoginContainer';
import {Input, Button, Anchor} from '../CustomControls';
import { GetResourceText } from '../Data/Resources';
import { ValidateForm , RegisterControl, constructor} from '../utility/functions';

function RegisterUser(props) {
    constructor();
    const [firstname, setFirstname] = useState({});
    const [lastname, setLastmame] = useState({});
    const [email, setEmail] = useState({});
    const [mobile, setMobile] = useState({});
    const [password, setPassword] = useState({});
    const [confirmpassword, setConfirmPassword] = useState({});
    const [pageError, setPageError] = useState("");

    const onRegisterClick = () =>{
        if(ValidateForm()){

        }
        setPageError("");
    }
    
    return (
        <BeforeLoginContainer title={GetResourceText('register')} pageError = {pageError}>
            <Input name="firstname" hasLabel value={firstname.value} registerControl={RegisterControl} getValue={e => setFirstname(e)} />
            <Input name="lastname" hasLabel value={lastname.value} registerControl={RegisterControl} getValue={e => setLastmame(e)} />
            <Input name="email" hasLabel value={email.value} registerControl={RegisterControl} getValue={e => setEmail(e)} />
            <Input name="mobile" hasLabel value={mobile.value} registerControl={RegisterControl} getValue={e => setMobile(e)} />
            <Input name="password" hasLabel value={password.value} registerControl={RegisterControl} getValue={e => setPassword(e)} />
            <Input name="confirmpassword" hasLabel value={confirmpassword.value} registerControl={RegisterControl} getValue={e => setConfirmPassword(e)} />
            <Button className="primary-button" name="register" onClick={onRegisterClick} />
            <Anchor className="p-top-md" name="backtologin" navigateTo="/login" ></Anchor>
        </BeforeLoginContainer>
    );
}

export default RegisterUser;