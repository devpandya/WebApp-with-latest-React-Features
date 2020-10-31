import React from 'react';
import '../Css/label.css'
import { GetResourceValue } from '../Data/Resources';
import { useHistory } from 'react-router-dom';

function Anchor(props) {
    const attributes =    props && props.resources ? props.resources[props.name] : GetResourceValue(props.name);
    const getResourceValue = key => { return props && props.resources ?  props.resources[key] :  GetResourceValue(key);} 
    const history = useHistory();
    return (
        <a className={`anchor ${props.className}`} onClick={()=>{history.push(props.navigateTo)}} {...attributes}>{getResourceValue(props.name).text}</a>
    );
}

export default Anchor;