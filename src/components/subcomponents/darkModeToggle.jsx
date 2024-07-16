import React, { useRef, useState, useEffect } from 'react';

import { motion } from 'framer-motion';
const DarkModeToggle = ({ getRoot }) => {
    /**
     * Determines whether this runs on a CLIENT
     */
    const CLIENT_ONLY = typeof window !== 'undefined';
    /**
     * Gets the user preference by querying media on CLIENTs
     */
    const isSystemPreferenceLight = CLIENT_ONLY
        ? window.matchMedia('(prefers-color-scheme: light)')
        : null;
    const isSystemPreferenceDark = CLIENT_ONLY
        ? window.matchMedia('(prefers-color-scheme: dark)')
        : null;
    const systemPreference = CLIENT_ONLY
        ? isSystemPreferenceDark.matches || !isSystemPreferenceLight.matches
            ? true
            : false
        : null;

    /**
     * Gets the stored user preferences from Local Storage on CLIENTs
     */
    const storedUserPreference = CLIENT_ONLY
        ? localStorage.getItem('user-prefers-dark')
        : null;
    /**
     * Compute the initialDarkState on CLIENTs. Defaults to System Preference if Local Storage doesn't exist.
     * null for non-clients
     */
    const initialDarkState = CLIENT_ONLY
        ? storedUserPreference
            ? localStorage.getItem('user-prefers-dark') === 'true'
                ? true
                : false
            : systemPreference
        : null;
    /**
     * References dark-mode svg
     */
    const dmSymbol = useRef(null);
    /**
     * State representing dark mode
     */
    const [dark, setDark] = useState(initialDarkState);

    /**
     * Monitor changes in System Preference, and with any change toggle dark state
     */
    if (CLIENT_ONLY) {
        isSystemPreferenceDark.addEventListener('change', (evt) => {
            if (storedUserPreference === null) setDark(evt.matches);
        });
        isSystemPreferenceLight.addEventListener('change', (evt) => {
            if (storedUserPreference === null) setDark(!evt.matches);
        });
    }
    /**
     * Hook reacts to dark mode changes.
     */
    useEffect(() => {
        dark
            ? getRoot().current.classList.add('dark')
            : getRoot().current.classList.remove('dark');
        dmSymbol.current.classList.toggle('rotate-180');
    }, [dark, getRoot]);

    const handleManualToggle = () => {
        localStorage.setItem('user-prefers-dark', !dark);
        setDark(!dark);
    };
    return (
        <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.1 }}
            onClick={handleManualToggle}
            className="fixed bottom-5 right-5 sm:bottom-10 sm:right-10 z-[3000]"
        >
            <svg
                ref={dmSymbol}
                className={`size-10 sm:size-20 duration-500`}
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
            >
                <title>Switch between Dark, Light and System Preference</title>
                <g id="Layer_2" data-name="Layer 2">
                    <g id="Icons">
                        <g>
                            <rect width="48" height="48" fill="none" />
                            <g>
                                <path
                                    fill="currentColor"
                                    d="M14,24A10,10,0,0,0,24,34V14A10,10,0,0,0,14,24Z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M24,2A22,22,0,1,0,46,24,21.9,21.9,0,0,0,24,2ZM6,24A18.1,18.1,0,0,1,24,6v8a10,10,0,0,1,0,20v8A18.1,18.1,0,0,1,6,24Z"
                                />
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        </motion.button>
    );
};

export default DarkModeToggle;
