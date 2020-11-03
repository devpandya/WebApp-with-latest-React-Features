import React , { useState, useEffect }from 'react';
import {ValidateForms} from '../utility/functions.js';
import '../Css/label.css';
import './beforelogin.css';

function BeforeLoginContainer(props) {
    const [pageError, setPageError] = useState(props.pageError);
    const [childWNP,setChildWNP] = useState(props.children);
    useEffect(()=>{ 
        if(pageError !== props.pageError){
            setPageError(props.pageError);
        }
        debugger;
        props.ValidateForm && props.ValidateForm(ValidaeForm);
        if(props.children !== "Loading..."){
            let childWithNewProps = React.Children.map(childWNP,child =>{
                const asl = e => {return e}
                return React.cloneElement(child,{ValidateElement: asl, ...child.props});
            });
            setChildWNP(childWithNewProps);
            debugger;
        }
    },[props.pageError, setPageError]);

    const ValidaeForm = () =>{
        debugger;
        let result = ValidateForms(props.children);
    }

    return (
        <div className="container">
            <div className="sub-conatiner cl-3 cm-6 cs-10">
                <div className="form-container">
                    <label className="f-primary-text f-head-2 m-bottom-md">{props.title}</label>
                    {
                        pageError && pageError.length > 0 && <label  className="f-error f-body-l">{pageError}</label>
                    }
                    {
                        childWNP
                    }
                </div>
            </div>
        </div>
    );
}

export default BeforeLoginContainer;