import React,{useState} from 'react';
import BeforeLoginContainer from '../ContainerPages/BeforeLoginContainer';
import { GetResourceText } from '../Data/Resources';
import Input from '../CustomControls/Input';
import Button from '../CustomControls/Button';
import Anchor from '../CustomControls/Anchor';

function ForgotPassword(props) {
    const [email, setEmail] = useState({});
    const [mobile, setMobile] = useState({});
    const [pageError, setPageError] = useState("");
    
    const onForgotPasswordClicked = () =>{
        if (email.isValid && mobile.isValid) {

        }
        else{
            setPageError("Please enter Valid Email Id and Mobile Number");
        }
    }

    return (
        <BeforeLoginContainer title={GetResourceText('forgotpassword')} pageError = {pageError}>
            <Input name="email" hasLabel value={email.value} getValue={e => setEmail(e)} />
            <Input name="mobile" hasLabel value={mobile.value} getValue={e => setMobile(e)} />
            <Button className="primary-button" name="send" onClick={onForgotPasswordClicked} />
            <Anchor className="p-top-md" name="backtologin" navigateTo="/login" ></Anchor>
        </BeforeLoginContainer>
    );
}

export default ForgotPassword;