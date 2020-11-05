import React , { useState, useEffect }from 'react';
import '../Css/label.css';
import './beforelogin.css';

function BeforeLoginContainer(props) {
    const [pageError, setPageError] = useState(props.pageError);
    useEffect(()=>{ 
        if(pageError !== props.pageError){
            setPageError(props.pageError);
        }
    },[props.pageError, setPageError]);

    return (
        <div className="container">
            <div className="sub-conatiner cl-3 cm-6 cs-10">
                <div className="form-container">
                    <label className="f-primary-text f-head-2 m-bottom-md">{props.title}</label>
                    {
                        pageError && pageError.length > 0 && <label  className="f-error f-body-l">{pageError}</label>
                    }
                    {
                        props.children
                    }
                </div>
            </div>
        </div>
    );
}

export default BeforeLoginContainer;