import React,{useState, useEffect, Fragment} from 'react';
import axios from 'axios';
import BeforeLoginContainer from '../ContainerPages/BeforeLoginContainer';

function UserList(props) {
    const[users, setUsers] = useState([]);
    useEffect(()=>{
        axios({
            method:'get', 
            url:"http://localhost:5000/users",
            
        }).then(resp =>{
            setUsers(resp.data)
        })
    },[])

    return (
        <BeforeLoginContainer>
            {
                users && users.map( user => {
                   return  (<Fragment>
                        <div className ="p-md" style={{display:"flex", borderBottom: "1px solid var(--seperator-n-disabled-color)"}}>
                            <label className="f-primary f-body-large p-horizontal-md">{user.name}</label>
                            <label className="f-tertiary-text f-body-large p-horizontal-md">{user.email}</label>
                        </div>
                    </Fragment>)
                })  
            }              
        </BeforeLoginContainer>
    );
}

export default UserList;