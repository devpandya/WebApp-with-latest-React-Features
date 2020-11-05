import {useState} from 'react';

let controls =[]

export const constructor = (callBack = () => {}) => {
    const [hasBeenCalled, setHasBeenCalled] = useState(false);
    if (hasBeenCalled) return;
    callBack();
    controls = [];
    setHasBeenCalled(true);
  }

//Start:---------------Form Validation Functions-----------------///
export const RegisterControl= control =>{
    if(!controls.includes(control)){
        controls.push(control);
    }
}

export const ClearControls = () => controls = [];

export const ValidateForm = () =>{
    let isValid = true;
    debugger;
    controls.forEach(control =>{
        isValid =  control.validationFunction() && isValid;
    })
    return isValid;
}
//End:---------------Form Validation Functions-----------------///