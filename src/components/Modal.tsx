import React, { ReactNode } from 'react';
import { useTheme } from './ThemeProvider';
import darkModeIcon from '../assets/darkMode.png';

interface ModalProps {
    children: ReactNode;
    timeUntil: string;
}

const Modal: React.FC<ModalProps> = ({ children, timeUntil }) => {
    const {isDarkMode, toggleDarkMode} = useTheme();

    return (
        <>
        <h1>{timeUntil}</h1>
        <div className={`relative text-center p-8 pb-10 ${isDarkMode ? 'bg-zinc-900' : 'bg-white'} rounded-lg shadow-lg`}>
            {children}
            <img src={darkModeIcon} onClick={toggleDarkMode} alt="Dark Mode" className={`absolute ${isDarkMode ? 'invert' : ''} hover:drop-shadow-lg bottom-3 right-3 h-6 w-6`} />
        </div>
        </>
    );
};

export default Modal;