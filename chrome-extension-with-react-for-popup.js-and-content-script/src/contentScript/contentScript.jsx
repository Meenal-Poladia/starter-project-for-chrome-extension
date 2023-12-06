/// <reference types="chrome"/>

import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('content-root');
const root = createRoot(container);

const App = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            background: 'lightyellow'
        }}>
            <h2 style={{fontSize: '3rem'}}>I am the Content Script</h2>
        </div>
    );
};

root.render(<App/>);