import { createContext, useContext, useState } from "react";

const ModeContext = createContext();

export function useMode() {
    return useContext(ModeContext);
}

export function ModeProvider({ children }) {
    const [mode, setMode] = useState('light');
    const toggleMode = () => {
        setMode((prevmode) => (prevmode === 'dark' ? 'light' : 'dark'));
    }
    const contextValue = {
        mode,
        toggleMode,
    }
    return (
        <ModeContext.Provider value={contextValue}>
            {children}
        </ModeContext.Provider>
    )
}