import React ,{useState, useEffect}from 'react';
import "../Css/input.css";
import { GetResourceValue } from '../Data/Resources';

const Input = props => {
    let isValid = true;
    const [value, setValue] = useState(props.value);
    const [className, setClassName] = useState("input");
    const [firstChange, setFirstChnage]= useState(true);
    const [error, setError]=useState("");
    const attributes =    props && props.resources ? props.resources[props.name] : GetResourceValue(props.name);
    const getResourceValue = key => { return props && props.resources ?  props.resources[key] :  GetResourceValue(key);} 

    useEffect(() =>{
        if(value !== props.value){
            setValue(props.value)
        }
        debugger;
        if(props.ValidateElement){
            props.ValidateElement(ValidateElement);
        }
    },[props.value, setValue]);

    const onChange = (e) =>{
        setFirstChnage(false);
        setClassName("input");
        if(Boolean(attributes.isrequired) && (e.currentTarget.value === null || e.currentTarget.value === undefined || e.currentTarget.value === "" || e.currentTarget.value.length < 1) ){
            isValid = false;
        }
        isValid = isValid && validateRegex(e.currentTarget.value);
        if(isValid || (Boolean(attributes.isrequired) && value && value.length < 1)){
            setError("");
        }
        else{
            setClassName("input error");
        }
        setCurrentValue(e.currentTarget.value);
        props.onChange && props.onChange();
    }

    const ValidateElement= ()=>{
        debugger;
        if(Boolean(attributes.isrequired) && (value === null || value === undefined || value === "" || value.length < 1) ){
            isValid = false;
        }
        isValid = isValid && validateRegex(value);
        if(isValid || (Boolean(attributes.isrequired) && value && value.length < 1)){
            setError("");
        }
        else{
            setClassName("input error");
        }
    }
    

    const setCurrentValue = value =>{
        setValue(value);
        props.getValue({value: value, isValid: isValid});
    }

    const validateRegex = (inputVal) =>{
        let istextValid= true;
        if(attributes.regex && attributes.regex.length > 0){
            istextValid = (new RegExp(attributes.regex)).test(inputVal)
        }
        if(!istextValid){
            switch(attributes.type){
                case "password":
                    setError((getResourceValue("passwordStrengthError")).text);
                    break;
                case "email":
                    setError((getResourceValue("emailPatternError")).text);
                    break;
                default:
                    break;
            }
        }
        
        return istextValid; 
    }

    const onpress = (e) =>{
        switch(attributes.type){
            case 'decimal':
                return isDecimalNumber(e);
            case 'number':
                if(e.key === '.'){
                    return false;
                }
                return true;    
            default:
                return true;
        }
    }

    const isDecimalNumber = (evt) => {
       var charCode = (evt.which) ? evt.which : evt.keyCode;
       if (charCode !== 46 && charCode > 31 
         && (charCode < 48 || charCode > 57)){
            isValid = false;
            return false;
        }
       isValid = true;
       return true;
    }

    const onBlur = (e) =>{
        if(Boolean(attributes.isrequired) && !firstChange && (!value || value.length <= 0))
        {
            isValid = false
            setError("");
            setClassName("input error");
        }
    }

    return (
        <div className="input-container">
            {
                props.hasLabel && <label className="input-header">{attributes.text}</label>
            }
            <input className={className} {...attributes} value={value} onChange={onChange} onBlur={onBlur} onKeyPress={onpress} disabled={props.disabled}/>
            {
                error && error.length > 0 && <label className="error-label">{error}</label>
            }
        </div>
    );
};

export default Input;