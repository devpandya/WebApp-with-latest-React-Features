import React from 'react';

export const ValidateForms = (children) =>{
    let isValid= true;
    children.forEach(element =>{
        debugger
        if(element.type.name === "Input" && element.props.ValidateElement){
            debugger;
                isValid = isValid && element.props.ValidateElement();
        }
    });
}