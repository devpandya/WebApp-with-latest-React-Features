import React from 'react';
import "../Css/button.css";
import { GetResourceValue } from '../Data/Resources';

function Button(props) {
    const getResourceValue = key => { return props && props.resources ?  props.resources[key] :  GetResourceValue(key);}

    return (    
        <button className={`button ${props.className} ${props.disabled && 'disabled'}`} 
                disabled= {props.disabled && props.disabled} 
                onClick={props.onClick}>{ props.text && props.text.length > 0 ? props.text :  getResourceValue(props.name).text}</button>
    );
}

export default Button;