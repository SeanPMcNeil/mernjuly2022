import { createContext, useState } from 'react';

const NameContext = createContext();

export function NameProvider({ children }) {
    const [name, setName] = useState("");

    const addName = name => {
        setName(name);
    }

    return(
        <NameContext.Provider value={{ name, addName }}>
            { children }
        </NameContext.Provider>
    )
}

export default NameContext;