import React, { useContext } from "react";
export const AppContext = React.createContext([{}, () => { }]);


export function AppContextProvider(props) {
    return (
        <AppContext.Provider value={props}>
            {props.children}
        </AppContext.Provider>
    );
}

export const CurrentContext = () => { return useContext(AppContext) };

export const GetResource = (key) => { 
    if(!key || key.length <= 0)
        return ""
    
    if(!CurrentContext().MasterData || !CurrentContext().MasterData.Resources || !CurrentContext().MasterData.Resources.find(e => e.key === key))
        return ""
    
    return CurrentContext().MasterData.Resources.find(e => e.key === key);
} 


export const GetResourceString = (key) => {
    if(!key || key.length <= 0)
        return ""
    
    if(!CurrentContext().MasterData || !CurrentContext().MasterData.Resources || !CurrentContext().MasterData.Resources.find(e => e.key === key)    )
        return ""

    return (CurrentContext().MasterData.Resources.find(e => e.key === key)).text;
}   

export const AppConsumer = (Component) => {

    return (
        <AppContext.Consumer>
            {
                (properties) => {
                    return <Component {...properties} />
                }
            }
        </AppContext.Consumer>
    );
};

export default AppContext;