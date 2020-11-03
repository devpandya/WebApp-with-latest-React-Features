import React, { useState } from 'react';
import BeforeLoginContainer from '../ContainerPages/BeforeLoginContainer';
import {Input, Button, Anchor} from '../CustomControls';
import { GetResourceText } from '../Data/Resources';

function RegisterUser(props) {
    const [firstname, setFirstname] = useState({});
    const [lastname, setLastmame] = useState({});
    const [email, setEmail] = useState({});
    const [mobile, setMobile] = useState({});
    const [password, setPassword] = useState({});
    const [confirmpassword, setConfirmPassword] = useState({});
    const [pageError, setPageError] = useState("");

    const onRegisterClick = () =>{
        let validf = validateForm();
        debugger;
        setPageError("");
    }

    let validateForm;

    return (
        <BeforeLoginContainer title={GetResourceText('register')} ValidateForm={e => {validateForm = e;}} pageError = {pageError}>
            <Input name="firstname" hasLabel value={firstname.value} getValue={e => setFirstname(e)} />
            <Input name="lastname" hasLabel value={lastname.value} getValue={e => setLastmame(e)} />
            <Input name="email" hasLabel value={email.value} getValue={e => setEmail(e)} />
            <Input name="mobile" hasLabel value={mobile.value} getValue={e => setMobile(e)} />
            <Input name="password" hasLabel value={password.value} getValue={e => setPassword(e)} />
            <Input name="confirmpassword" hasLabel value={confirmpassword.value} getValue={e => setConfirmPassword(e)} />
            <Button className="primary-button" name="register" onClick={onRegisterClick} />
            <Anchor className="p-top-md" name="backtologin" navigateTo="/login" ></Anchor>
        </BeforeLoginContainer>
    );
}

export default RegisterUser;