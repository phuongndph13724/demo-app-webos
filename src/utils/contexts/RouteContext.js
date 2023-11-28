import React, { createContext, useContext, useState } from "react";

const RouteContext = createContext()

const FncRouteContext = ({children}) => {
    const [route , setRoute] = useState('')
    return (
        <RouteContext.Provider value={{route}}>
            {children}
        </RouteContext.Provider>
     )
}
export const useRouteContext = () => {
    return useContext(RouteContext);
}
export {FncRouteContext}