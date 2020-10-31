import React from 'react';
import './header.css';
import { CurrentContext } from '../utility/AppContext';
import { useHistory } from 'react-router-dom';

function Header(props) {
    const user = CurrentContext().User;
    const style = CurrentContext().Style;
    const setStyle = CurrentContext().SetStyle;
    const history = useHistory();

    const ChangeDirection = () =>{
        let varStyle = {...style};
        if(varStyle.direction === 'rtl'){
            varStyle.direction = 'ltr';
        }
        else{
            varStyle.direction = 'rtl';
        }
        setStyle(varStyle);
    }
    return (
        <div className="header">
            <a id="logo" className="logo">{"Logo"}</a>
            <div className="header-menu">
                {
                    props.menus.map(menuItem=>{
                        return <label key={menuItem.MenuId} className="menu-item">{menuItem.MenuTitle}</label>
                    })
                }
                {
                    user && user.isLoggedIn ? <label className="menu-item">{"UserName:" + user.Name}</label> : <label className="menu-item" onClick={()=>{ history.push('/login');}}>{"Login"}</label>
                }
                {
                    !user || !user.isLoggedIn ? <label className="menu-item" onClick={()=>{ history.push('/register');}}>{"Register"}</label> :<span></span>
                }
                {
                    <label className="menu-item" onClick={ChangeDirection}>{`Current Direction: ${style.direction}`}</label>
                }
            </div>
        </div>
    );
}

export default Header;