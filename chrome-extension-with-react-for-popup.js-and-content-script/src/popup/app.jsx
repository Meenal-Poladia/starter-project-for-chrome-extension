/// <reference types="chrome"/>

import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('react-root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

const App = () => {
    const handleClick = ()=> {
        const url= chrome.runtime.getURL('contentScript.html');
        chrome.tabs.create({url});
    };

    return (
        <div style={{
                width: '300px',
                height: '300px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                background: 'lightyellow',
            }}
        >
            <h2 style={{
                textAlign: 'center'
            }}>
                I am the Popup Script
            </h2>
            <button
                style={{
                    fontSize: '1rem',
                    padding: '0.5rem',
                    borderRadius: '10px',
                    background: '#ff7f508c',
                    cursor: 'pointer',
                    border: 'none',
                }}
                onClick={handleClick}>
                Click Here to Open Content Script
            </button>
        </div>
    );
};

root.render(<App/>);