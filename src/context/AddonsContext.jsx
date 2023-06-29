import { createContext, useState } from "react";

// default value for context
export const AddonsContext = createContext({
    addonsDisplay: [],
    setAddonsDisplay: ()=> {},

})

export const AddonsProvider = ({children}) => {
    const [addonsDisplay, setAddonsDisplay] = useState([]);

    const value = {addonsDisplay, setAddonsDisplay};

    return (
        <AddonsContext.Provider value={value}>{children}</AddonsContext.Provider>
    )
}