import React from 'react';
import './Header.css';

export default function Header() {
    return (
        <div className="header">
            <h1>The Blog</h1>
            <div className="btn">
                <button>Home</button>
                <button>New Button</button>
            </div>
        </div>
    );
}