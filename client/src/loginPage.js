import React from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.3)'  // Background with 30% opacity
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#f0f8ff',
                padding: '2rem',
                borderRadius: '5px'
            }}>
                <h1 style={{fontWeight: 'bold'}}>USER LOGIN</h1>
                <input type="text" placeholder="username" style={{
                    marginTop: '1rem',
                    padding: '0.5rem',
                    fontSize: '1rem',
                    fontStyle: 'italic',
                    opacity: '0.7'
                }}/>
                <input type="password" placeholder="password" style={{
                    marginTop: '1rem',
                    padding: '0.5rem',
                    fontSize: '1rem',
                    fontStyle: 'italic',
                    opacity: '0.7'
                }}/>
                <Link to="/">
                    <button style={{
                        marginTop: '1rem',
                        padding: '10px 20px',
                        fontSize: '1rem',
                        borderRadius: '5px',
                        backgroundColor: '#ADD8E6',
                        border: 'none',
                        cursor: 'pointer'
                    }}>
                        LOGIN
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default LoginPage;
