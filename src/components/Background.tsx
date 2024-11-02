import React, { ReactNode } from 'react';
import { useTheme } from './ThemeProvider';

interface BGProps {
    children: ReactNode;
}

const Background: React.FC<BGProps> = ({ children }) => {
    const { isDarkMode, toggleDarkMode} = useTheme();
    return (
        <>
            <div className={`min-h-screen flex items-center justify-center ${isDarkMode ? 'bg-zinc-800 text-zinc-200' : 'bg-gray-100 text-gray-800'}`}>
                {children}
            </div>
        </>
    );
};

export default Background;