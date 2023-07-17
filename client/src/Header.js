import React from 'react';
import { Link } from 'react-router-dom';

// Import your logo image here
import logo from './logo.png'; // Replace this with the actual path to your logo file

function Header() {
    return (
        <header style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px 20px', 
            backgroundColor: '#f0f8ff'
        }}>
            <Link to="/" style={{flex: '1', textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center'}}>
                <img src={logo} alt="Logo" style={{width: '50px', height: '50px', marginRight: '10px'}}/>
                <h1 style={{fontFamily: 'Roboto', fontWeight: '500'}}>Math Resources</h1>  {/* Font changed here */}
            </Link>
            <div style={{flex: '1'}} /> {/* This is an empty middle section to counterbalance the login button */}
            <Link to="/loginPage" style={{flex: '1', textAlign: 'right', paddingRight: '10px'}}>
                <button style={{
                    padding: '10px 20px',
                    fontSize: '1rem',
                    borderRadius: '5px',
                    backgroundColor: '#ADD8E6',
                    border: 'none',
                    cursor: 'pointer'
                }}>
                    Login
                </button>
            </Link>
        </header>
    );
}

export default Header;
