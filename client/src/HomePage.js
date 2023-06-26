import React from 'react';

function HomePage() {
    return (
        <div style={{textAlign: 'center'}}>
            <div style={{
                backgroundColor: '#f0f8ff',
                padding: '2rem',
                margin: '2rem',
                borderRadius: '5px'
            }}>
                <p style={{fontSize: '1.5rem'}}>
                    Welcome to Math Resources! We provide a platform where you can find and rate various Math resources. 
                    Here you can find different math resources including textbooks, worksheets, tutorials and video tutorials!
                </p>
            </div>
            <p style={{fontSize: '1.2rem'}}>Click below to get started:</p>
            <div style={{
                backgroundColor: '#ffe4b5',
                padding: '0px 20px',
                margin: '0.1rem',
                borderRadius: '5px',
                display: 'inline-block',
                cursor: 'pointer'
            }}>
                <h3>RATE</h3>
            </div>
        </div>
    );
}

export default HomePage;
