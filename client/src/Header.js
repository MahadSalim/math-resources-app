import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={{textAlign: 'center', 
                        fontSize: '1rem',
                        padding: '1px 1px', 
                        backgroundColor: '#f0f8ff'}}>
            <Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>
                <h1>Math Resources</h1>
            </Link>
        </header>
    );
}

export default Header;
