import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the shape of the context value
interface ThemeContextType {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}

// Create a context with an undefined initial value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Create a provider component
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    // Create our State to be used globally, and initialize it with the default value
    const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

    // Wrap our use State setter function in a function that toggles the value
    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
};



// Create a accessor that other components can use to get the value of the context MUST be wrapped in <ThemeProvider> (See main.tsx)
export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
